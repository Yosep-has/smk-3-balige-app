<?php

namespace App\Http\Middleware;

use App\Helper\ToolsHelper;
use App\Http\Api\UserApi;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authToken = ToolsHelper::getAuthToken();
        if (empty($authToken)) {
            return redirect()->route('auth.login');
        }

        $response = UserApi::getMe($authToken);
        if (! isset($response->data->user)) {
            return redirect()->route('auth.login');
        }

        $auth = $response->data->user;

        // Akses diambil dari roles SSO (tanpa HakAksesModel)
        $auth->akses = isset($auth->roles) ? (array) $auth->roles : [];

        $request->attributes->set('auth', $auth);

        return $next($request);
    }
}
<?php

use App\Http\Controllers\App\Home\HomeController;
use App\Http\Controllers\App\Skl\SklController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware(['throttle:req-limit', 'handle.inertia'])->group(function () {

    // SSO Routes
    Route::prefix('sso')->group(function () {
        Route::get('/callback', [AuthController::class, 'ssoCallback'])->name('sso.callback');
    });

    // Authentication Routes
    Route::prefix('auth')->group(function () {
        Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
        Route::post('/login-check', [AuthController::class, 'postLoginCheck'])->name('auth.login-check');
        Route::post('/login-post', [AuthController::class, 'postLogin'])->name('auth.login-post');
        Route::get('/logout', [AuthController::class, 'logout'])->name('auth.logout');
        Route::get('/totp', [AuthController::class, 'totp'])->name('auth.totp');
        Route::post('/totp-post', [AuthController::class, 'postTotp'])->name('auth.totp-post');
    });

    // Public Routes — tanpa login
    Route::get('/unduh-skl', [SklController::class, 'publicIndex'])->name('skl.public');
    Route::post('/unduh-skl/check', [SklController::class, 'checkNisn'])->name('skl.check-nisn');

    // Protected Routes — wajib login
    Route::middleware('check.auth')->group(function () {

        // Beranda
        Route::get('/', [HomeController::class, 'index'])->name('home');

        // SKL (Surat Keterangan Lulus)
        Route::prefix('skl')->group(function () {
            Route::get('/', [SklController::class, 'index'])->name('skl');
            Route::post('/change', [SklController::class, 'postChange'])->name('skl.change-post');
            Route::post('/delete', [SklController::class, 'postDelete'])->name('skl.delete-post');
            Route::post('/delete-selected', [SklController::class, 'postDeleteSelected'])->name('skl.delete-selected-post');
        });

    });
});

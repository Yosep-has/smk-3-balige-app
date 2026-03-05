<?php

namespace App\Http\Controllers\App\Skl;

use App\Helper\ToolsHelper;
use App\Http\Controllers\Controller;
use App\Models\SklModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SklController extends Controller
{
    public function index(Request $request)
    {
        $auth = $request->attributes->get('auth');
        $isEditor = $this->checkIsEditor($auth);

        return Inertia::render('app/skl/skl-page', [
            'sklList' => function () {
                return SklModel::orderBy('nama')->get();
            },
            'pageName' => Inertia::always('Surat Keterangan Lulus'),
            'auth' => Inertia::always($auth),
            'isEditor' => Inertia::always($isEditor),
            'jurusanOptions' => Inertia::always($this->getJurusanOptions()),
            'statusOptions' => Inertia::always(['Lulus', 'Tidak Lulus']),
        ]);
    }

    public function postChange(Request $request)
    {
        $auth = $request->attributes->get('auth');
        $isEditor = $this->checkIsEditor($auth);
        if (!$isEditor) {
            return back()->with('error', 'Anda tidak memiliki izin.');
        }

        $request->validate([
            'nisn'          => 'required|string|max:20',
            'nama'          => 'required|string|max:255',
            'tempat_lahir'  => 'required|string|max:100',
            'tanggal_lahir' => 'required|date',
            'nama_orang_tua'=> 'required|string|max:255',
            'jurusan'       => 'required|string',
            'tahun_lulus'   => 'required|integer|min:2000|max:2100',
            'status'        => 'required|in:Lulus,Tidak Lulus',
            'nomor_skl'     => 'nullable|string|max:100',
        ]);

        $existing = SklModel::where('nisn', $request->nisn)->first();

        if ($existing) {
            // Update
            $existing->update([
                'nama'          => $request->nama,
                'tempat_lahir'  => $request->tempat_lahir,
                'tanggal_lahir' => $request->tanggal_lahir,
                'nama_orang_tua'=> $request->nama_orang_tua,
                'jurusan'       => $request->jurusan,
                'tahun_lulus'   => $request->tahun_lulus,
                'status'        => $request->status,
                'nomor_skl'     => $request->nomor_skl,
            ]);
            return back()->with('success', 'Data SKL berhasil diperbarui.');
        } else {
            // Create
            SklModel::create([
                'id'            => ToolsHelper::generateId(),
                'nisn'          => $request->nisn,
                'nama'          => $request->nama,
                'tempat_lahir'  => $request->tempat_lahir,
                'tanggal_lahir' => $request->tanggal_lahir,
                'nama_orang_tua'=> $request->nama_orang_tua,
                'jurusan'       => $request->jurusan,
                'tahun_lulus'   => $request->tahun_lulus,
                'status'        => $request->status,
                'nomor_skl'     => $request->nomor_skl,
            ]);
            return back()->with('success', 'Data SKL berhasil ditambahkan.');
        }
    }

    public function postDelete(Request $request)
    {
        $auth = $request->attributes->get('auth');
        $isEditor = $this->checkIsEditor($auth);
        if (!$isEditor) {
            return back()->with('error', 'Anda tidak memiliki izin.');
        }

        $request->validate([
            'nisn' => 'required|string',
        ]);

        SklModel::where('nisn', $request->nisn)->delete();

        return back()->with('success', 'Data SKL berhasil dihapus.');
    }

    public function postDeleteSelected(Request $request)
    {
        $auth = $request->attributes->get('auth');
        $isEditor = $this->checkIsEditor($auth);
        if (!$isEditor) {
            return back()->with('error', 'Anda tidak memiliki izin.');
        }

        $request->validate([
            'nisnList' => 'required|array',
        ]);

        SklModel::whereIn('nisn', $request->nisnList)->delete();

        return back()->with('success', 'Data SKL yang dipilih berhasil dihapus.');
    }

    // Halaman publik - tanpa auth
    public function publicIndex()
    {
        return Inertia::render('app/skl/skl-public-page');
    }

    public function checkNisn(Request $request)
    {
        $request->validate([
            'nisn' => 'required|string',
        ]);

        $skl = SklModel::where('nisn', $request->nisn)->first();

        if (!$skl) {
            return response()->json([
                'success' => false,
                'message' => 'Data SKL dengan NISN tersebut tidak ditemukan.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data'    => $skl,
        ]);
    }

    private function checkIsEditor($auth)
    {
        if (ToolsHelper::checkRoles('Admin', $auth->akses)) return true;
        if (ToolsHelper::checkRoles('Admin', $auth->roles)) return true;
        if (ToolsHelper::checkRoles('SKL', $auth->akses))   return true;
        return false;
    }

    private function getJurusanOptions()
    {
        return ['TKJ', 'RPL', 'MM', 'AK', 'PM', 'TAV'];
    }
}

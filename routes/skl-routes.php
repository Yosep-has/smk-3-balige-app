<?php

// ============================================================
// Tambahkan import ini di bagian atas routes/web.php
// ============================================================
use App\Http\Controllers\App\Skl\SklController;


// ============================================================
// Tambahkan route berikut di dalam group 'check.auth'
// (sejajar dengan route hak-akses yang sudah ada)
// ============================================================

// SKL Routes (Admin - Kelola Data)
Route::prefix('skl')->group(function () {
    Route::get('/', [SklController::class, 'index'])->name('skl');
    Route::post('/change', [SklController::class, 'postChange'])->name('skl.change-post');
    Route::post('/delete', [SklController::class, 'postDelete'])->name('skl.delete-post');
    Route::post('/delete-selected', [SklController::class, 'postDeleteSelected'])->name('skl.delete-selected-post');
});


// ============================================================
// Tambahkan route publik ini di LUAR group 'check.auth'
// (siswa tidak perlu login untuk cek status lulus)
// ============================================================

// SKL Public Route (Siswa - Cek & Unduh)
Route::get('/unduh-skl', [SklController::class, 'publicIndex'])->name('skl.public');
Route::post('/unduh-skl/check', [SklController::class, 'checkNisn'])->name('skl.check-nisn');

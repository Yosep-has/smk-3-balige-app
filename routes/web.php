<?php

use Illuminate\Support\Facades\Route;
Route::get('/unduh-skl', [SklController::class, 'publicIndex'])->name('skl.public');
Route::get('/', function () {
    return view('beranda');
})->name('beranda');

Route::get('/unduh-skl', function () {
    return view('app');
})->name('unduh-skl');

Route::get('/profil', function () {
    return view('profil');
})->name('profil');

Route::get('/berita', function () {
    return view('berita');
})->name('berita');

Route::get('/portofolio', function () {
    return view('portofolio');
})->name('portofolio');


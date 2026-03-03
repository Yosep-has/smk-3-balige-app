<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('beranda');
})->name('beranda');

Route::get('/profil', function () {
    return view('profil');
})->name('profil');

Route::get('/berita', function () {
    return view('berita');
})->name('berita');

Route::get('/portofolio', function () {
    return view('portofolio');
})->name('portofolio');
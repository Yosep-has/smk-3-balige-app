<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('profil'); // pastikan ada profil.blade.php
});

Route::get('/home', function () {
    return view('app'); // kalau mau buka app.blade.php
});

Route::get('/profil', function () {
    return view('profil');
});
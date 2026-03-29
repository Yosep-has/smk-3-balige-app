<?php
namespace App\Http\Controllers\App\skl; // sesuai folder

use App\Http\Controllers\Controller; // IMPORT HARUS ADA
use Illuminate\Http\Request;

class SklController extends Controller
{
    public function publicIndex()
    {
        return view('skl'); // resources/views/skl.blade.php
    }
}
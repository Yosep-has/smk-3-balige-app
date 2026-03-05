<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SklModel extends Model
{
    protected $table = 'm_skl';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'id',
        'nisn',
        'nama',
        'tempat_lahir',
        'tanggal_lahir',
        'nama_orang_tua',
        'jurusan',
        'tahun_lulus',
        'status',
        'nomor_skl',
    ];

    public $timestamps = true;
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('m_skl', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nisn')->unique();
            $table->string('nama');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('nama_orang_tua');
            $table->string('jurusan');
            $table->year('tahun_lulus');
            $table->enum('status', ['Lulus', 'Tidak Lulus'])->default('Lulus');
            $table->string('nomor_skl')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('m_skl');
    }
};

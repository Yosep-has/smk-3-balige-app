@extends('layouts.app')

@section('content')

<div class="hero">
    <h1>SMK NEGERI 3 BALIGE</h1>
    <p>Mengembangkan karakter dan keterampilan siswa untuk masa depan.</p>
</div>

<div class="section">
    <h2>Jurusan Kami</h2>

    <div class="card">
        <h3>Teknik Komputer & Jaringan</h3>
        <p>Mempelajari jaringan dan server.</p>
    </div>

    <div class="card">
        <h3>Multimedia</h3>
        <p>Desain grafis dan video editing.</p>
    </div>

    <div class="card">
        <h3>Akuntansi</h3>
        <p>Administrasi dan keuangan.</p>
    </div>
</div>

<div class="section">
    <h2>Berita Terbaru</h2>

    <div class="card">
        <h4>Pengumuman Ujian</h4>
        <p>Jadwal ujian semester sudah keluar.</p>
        <a href="{{ route('berita') }}">Baca Selengkapnya</a>
    </div>

    <div class="card">
        <h4>Lomba Siswa</h4>
        <p>Siswa SMK 3 Balige juara lomba IT.</p>
        <a href="{{ route('berita') }}">Baca Selengkapnya</a>
    </div>
</div>

@endsection
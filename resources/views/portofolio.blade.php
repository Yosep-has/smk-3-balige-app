@extends('layouts.app')

@section('content')

<!-- ================= PORTOFOLIO ================= -->
<section class="section">

    <h2 class="section-title center">Portofolio & Skill</h2>

    <div class="card-grid">

        <div class="card">
            <h3>Project Website</h3>
            <p>
                Pembuatan dan pengembangan website resmi sekolah
                berbasis Laravel dengan fitur berita, profil,
                dan sistem informasi siswa.
            </p>
            <a href="#" class="read-more">Lihat Detail →</a>
        </div>

        <div class="card highlight">
            <h3>Project Multimedia</h3>
            <p>
                Pembuatan video profil sekolah, desain grafis,
                serta konten promosi digital untuk media sosial.
            </p>
            <a href="#" class="read-more">Lihat Detail →</a>
        </div>

        <div class="card">
            <h3>Project Jaringan</h3>
            <p>
                Instalasi dan konfigurasi jaringan komputer
                serta manajemen server di laboratorium sekolah.
            </p>
            <a href="#" class="read-more">Lihat Detail →</a>
        </div>

    </div>

</section>

@endsection
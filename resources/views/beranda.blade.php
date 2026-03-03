@extends('layouts.app')

@section('content')

<!-- ================= HERO ================= -->
<section class="hero">
    <div class="container hero-wrapper">
        <div class="hero-left">
            <span class="badge">Tahun Ajaran 2024/2025</span>
            <h1>SMK NEGERI 3 BALIGE</h1>
            <p>
                Mengembangkan karakter dan keterampilan siswa untuk masa depan
                melalui pendidikan berkualitas dan inovatif.
            </p>
        </div>

        <div class="hero-right">
            <img src="{{ asset('images/sekolah.jpg') }}" alt="Gedung Sekolah">
        </div>
    </div>

    <!-- Statistik -->
    <div class="stats">
        <div class="stat-item">
            <h3>1200+</h3>
            <p>Siswa Aktif</p>
        </div>
        <div class="stat-item">
            <h3>85+</h3>
            <p>Tenaga Pengajar</p>
        </div>
        <div class="stat-item">
            <h3>98%</h3>
            <p>Tingkat Kelulusan</p>
        </div>
        <div class="stat-item">
            <h3>45+</h3>
            <p>Prestasi Tahunan</p>
        </div>
    </div>
</section>


<!-- ================= PROFIL & VISI MISI ================= -->
<section class="section">
    <div class="container profile-grid">

        <div class="profile-img">
            <img src="{{ asset('images/guru.jpg') }}" alt="Guru SMK">
        </div>

        <div class="profile-text">
            <h2>Profil & Visi Misi</h2>

            <div class="visi-misi-box">
                <h4>Visi</h4>
                <p>
                    Menjadi sekolah unggulan yang menghasilkan lulusan
                    berkarakter, kompeten dan berdaya saing global.
                </p>

                <h4>Misi</h4>
                <ul>
                    <li>Menyelenggarakan pendidikan berkualitas berbasis teknologi</li>
                    <li>Membentuk karakter siswa yang disiplin dan mandiri</li>
                    <li>Mengembangkan potensi akademik dan non-akademik</li>
                </ul>
            </div>
        </div>

    </div>
</section>


<!-- ================= JURUSAN ================= -->
<section class="section bg-soft">
    <div class="container">
        <h2 class="section-title center">Jurusan di SMK Negeri 3 Balige</h2>

        <div class="card-grid">

            <div class="card">
                <h3>Teknik Komputer & Jaringan</h3>
                <p>Fokus pada instalasi dan manajemen jaringan komputer.</p>
                <a href="#" class="read-more">Detail →</a>
            </div>

            <div class="card">
                <h3>Multimedia</h3>
                <p>Pengembangan kreatif di bidang desain dan produksi media.</p>
                <a href="#" class="read-more">Detail →</a>
            </div>

            <div class="card">
                <h3>Akuntansi</h3>
                <p>Manajemen keuangan dan pelaporan akuntansi modern.</p>
                <a href="#" class="read-more">Detail →</a>
            </div>

        </div>
    </div>
</section>


<!-- ================= BERITA ================= -->
<section class="section">
    <div class="container">
        <h2 class="section-title center">Berita Terbaru & Pengumuman</h2>

        <div class="card-grid">

            <div class="card news-card">
                <img src="{{ asset('images/berita1.jpg') }}" alt="">
                <div class="card-body">
                    <h4>Pelaksanaan Ujian Tengah Semester</h4>
                    <p>Ujian tengah semester akan dilaksanakan mulai minggu depan.</p>
                    <a href="{{ route('berita') }}" class="read-more">Baca Selengkapnya →</a>
                </div>
            </div>

            <div class="card news-card">
                <img src="{{ asset('images/berita2.jpg') }}" alt="">
                <div class="card-body">
                    <h4>Penerimaan Siswa Baru (PPDB)</h4>
                    <p>Pendaftaran siswa baru sudah dibuka secara online.</p>
                    <a href="{{ route('berita') }}" class="read-more">Baca Selengkapnya →</a>
                </div>
            </div>

            <div class="card news-card">
                <img src="{{ asset('images/berita3.jpg') }}" alt="">
                <div class="card-body">
                    <h4>Rapat Koordinasi Guru</h4>
                    <p>Rapat koordinasi membahas kurikulum terbaru.</p>
                    <a href="{{ route('berita') }}" class="read-more">Baca Selengkapnya →</a>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- ================= MITRA ================= -->
<section class="section bg-soft">
    <div class="container center">
        <h2 class="section-title">Mitra Kerjasama</h2>

        <div class="mitra-grid">
            <div class="mitra-card">PT. PLN</div>
            <div class="mitra-card">PT. Telkom</div>
            <div class="mitra-card">PT. Astra</div>
            <div class="mitra-card">PT. Bank Sumut</div>
        </div>
    </div>
</section>

@endsection
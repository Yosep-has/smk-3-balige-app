@extends('layouts.app')

@section('content')

<!-- ================= HERO ================= -->
<section class="hero">
    <div class="hero-content">

        <div class="hero-left">
            <span class="badge">Tahun Ajaran 2024/2025</span>
            <h1>PROFIL SMK <br> NEGERI 3 BALIGE</h1>
            <p>
                Bergabunglah dengan kami dalam menciptakan masa depan yang cerah 
                melalui pendidikan berkualitas, fasilitas modern dan pengajaran inovatif.
            </p>
        </div>

        <div class="hero-right">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b" alt="Gedung Sekolah">
        </div>

    </div>
</section>

<!-- ================= SEJARAH ================= -->
<section class="section">
    <h2 class="section-title">Sejarah & Identitas</h2>
    <p>
        Berdiri sejak 2005, SMK Negeri 3 Balige telah berkembang menjadi institusi 
        vokasi unggulan yang fokus pada integrasi teknologi dan dunia industri 
        dalam setiap aspek pendidikan.
    </p>
</section>

<!-- ================= VISI MISI ================= -->
<section class="section bg-light">
    <h2 class="section-title center">Visi & Misi</h2>

    <div class="card-grid">
        <div class="card">
            <h3>Visi</h3>
            <p>Menjadi sekolah unggul yang menghasilkan lulusan berkompeten dan berkarakter.</p>
        </div>

        <div class="card">
            <h3>Misi</h3>
            <p>Menyelenggarakan pendidikan berbasis teknologi serta kerja sama industri.</p>
        </div>
    </div>
</section>

<!-- ================= STRUKTUR ================= -->
<section class="section">
    <h2 class="section-title center">
        Struktur Organisasi <br>
        Periode 2025 / 2026
    </h2>

    <div class="org-chart">

        <div class="org-row">
            <div class="org-box">Ketua Yayasan<br><strong>Nama Ketua</strong></div>
            <div class="org-box main">Kepala Sekolah<br><strong>Nama Kepala</strong></div>
            <div class="org-box">Komite Sekolah<br><strong>Nama Komite</strong></div>
        </div>

        <div class="org-row">
            <div class="org-box">Bendahara<br><strong>Nama Bendahara</strong></div>
            <div class="org-box">Kepala Tata Usaha<br><strong>Nama TU</strong></div>
        </div>

        <div class="org-row">
            <div class="org-box">Waka Kesiswaan</div>
            <div class="org-box">Waka Kurikulum</div>
            <div class="org-box">Waka Sarpras</div>
            <div class="org-box">Waka Humas</div>
        </div>

        <div class="org-row">
            <div class="org-box small">Wali Kelas</div>
            <div class="org-box small">Dewan Guru</div>
        </div>

        <div class="org-row">
            <div class="org-box student">SISWA</div>
        </div>

    </div>
</section>

<!-- ================= FASILITAS ================= -->
<section class="section bg-light">
    <h2 class="section-title center">Fasilitas & Sarana</h2>

    <div class="facility-grid">
        <div class="facility">Lab Komputer</div>
        <div class="facility">Perpustakaan</div>
        <div class="facility">Lapangan</div>
        <div class="facility">Ruang Kelas</div>
        <div class="facility">Ruang Ibadah</div>
        <div class="facility">Koperasi</div>
    </div>
</section>

<!-- ================= AKREDITASI ================= -->
<section class="section">
    <h2 class="section-title center">Akreditasi & Prestasi</h2>

    <div class="card-grid">
        <div class="card highlight">
            <h3>Akreditasi A</h3>
            <p>Terakreditasi A oleh BAN-SM sebagai sekolah unggulan tingkat nasional.</p>
        </div>

        <div class="card">
            <h3>Juara LKS Provinsi</h3>
            <p>Meraih juara dalam ajang Lomba Kompetensi Siswa bidang teknologi.</p>
        </div>

        <div class="card">
            <h3>Prestasi Akademik</h3>
            <p>Siswa berprestasi dalam olimpiade sains tingkat nasional.</p>
        </div>
    </div>
</section>

<!-- ================= MITRA ================= -->
<section class="section bg-light">
    <h2 class="section-title center">Mitra Kerja</h2>

    <div class="mitra-grid">
        <div class="mitra">Marriott International</div>
        <div class="mitra">Holland Bakery</div>
        <div class="mitra">Garuda Indonesia</div>
        <div class="mitra">Blue Bird Group</div>
    </div>
</section>

@endsection
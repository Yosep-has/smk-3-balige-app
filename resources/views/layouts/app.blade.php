<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMK Negeri 3 Balige</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

    <!-- ================= NAVBAR ================= -->
    <nav class="navbar">
        <div class="nav-left">
            <div class="logo-circle">
                🎓
            </div>
            <div>
                <strong>SMK NEGERI 3 BALIGE</strong><br>
                <small>Excellence in Education</small>
            </div>
        </div>

        <div class="nav-right">
            <ul class="nav-menu">
                <li><a href="{{ route('beranda') }}">Beranda</a></li>
                <li><a href="{{ route('berita') }}">Berita & Informasi</a></li>
                <li><a href="{{ route('profil') }}">Profil Sekolah</a></li>
                <li><a href="{{ route('portofolio') }}">Portofolio & Skill</a></li>
            </ul>

            <button class="btn-login">LOGIN</button>
        </div>
    </nav>

    <!-- ================= CONTENT ================= -->
    <main class="main-content">
        @yield('content')
    </main>

    <!-- ================= FOOTER ================= -->
    <footer class="footer">

        <div class="footer-header">
            <h2>Kontak <span>Sekolah</span></h2>
            <p>Kami siap membantu dan menjawab pertanyaan Anda</p>
        </div>

        <div class="footer-grid">

            <div class="footer-box">
                <h3>Informasi Kontak</h3>
                <p><strong>Alamat:</strong> Jl. Pendidikan No. 123, Balige</p>
                <p><strong>Telepon:</strong> (021) 1234-5678</p>
                <p><strong>Email:</strong> info@smk3balige.sch.id</p>
                <p><strong>Jam Operasional:</strong> Senin - Jumat 07:00 - 16:00</p>
            </div>

            <div class="footer-box">
                <h3>Media Sosial</h3>
                <div class="social-buttons">
                    <button>Facebook</button>
                    <button>Instagram</button>
                </div>
            </div>

        </div>

        <div class="footer-bottom">
            © {{ date('Y') }} SMK Negeri 3 Balige. All Rights Reserved.
        </div>

    </footer>

</body>
</html>
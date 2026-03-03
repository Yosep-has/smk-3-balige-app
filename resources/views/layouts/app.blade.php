<!DOCTYPE html>
<html>
<head>
    <title>SMK 3 Balige</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

    {{-- NAVBAR --}}
    <nav>
        <a href="{{ route('beranda') }}">Beranda</a>
        <a href="{{ route('berita') }}">Berita & Informasi</a>
        <a href="{{ route('profil') }}">Profil Sekolah</a>
        <a href="{{ route('portfolio') }}">Portfolio & Skill</a>
    </nav>

    {{-- CONTENT --}}
    <div>
        @yield('content')
    </div>

    {{-- FOOTER --}}
    <footer>
        <h3>Kontak Sekolah</h3>
        <p>SMK Negeri 3 Balige</p>
        <p>Email: info@smk3balige.sch.id</p>
    </footer>

</body>
</html>
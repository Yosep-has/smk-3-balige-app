<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unduh SKL</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background-color: #f6f3ea;
        }

        .navbar {
            background-color: #000;
            color: white;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 22px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .navbar-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-circle {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-color: #d4a62a;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            font-weight: bold;
        }

        .school-text {
            display: flex;
            flex-direction: column;
            line-height: 1.1;
        }

        .school-text .title {
            font-size: 15px;
            font-weight: 700;
        }

        .school-text .subtitle {
            font-size: 10px;
            color: #d1d5db;
        }

        .navbar-center {
            display: flex;
            align-items: center;
            gap: 18px;
            font-size: 14px;
        }

        .navbar-center a {
            color: white;
            text-decoration: none;
        }

        .navbar-center a.active {
            color: #4c78ff;
        }

        .navbar-right {
            background-color: white;
            color: #14213d;
            border-radius: 8px;
            padding: 8px 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            font-size: 14px;
        }

        .user-icon {
            width: 26px;
            height: 26px;
            border: 2px solid #14213d;
            border-radius: 50%;
            position: relative;
        }

        .user-icon::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 8px;
            border: 2px solid #14213d;
            border-top: none;
            border-radius: 0 0 10px 10px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            background: white;
        }

        .page-wrapper {
            min-height: calc(100vh - 56px);
            padding: 90px 40px 40px 40px;
            position: relative;
        }

        .table-box {
            width: 630px;
            background-color: #fff;
            border: 1px solid #e5e7eb;
            margin: 0 auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        thead th {
            text-align: left;
            padding: 28px 18px;
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
            border-bottom: 1px solid #e5e7eb;
            background-color: #f9fafb;
        }

        tbody td {
            padding: 28px 18px;
            font-size: 18px;
            color: #1f2937;
            border-top: 1px solid #f3f4f6;
        }

        thead th:first-child,
        tbody td:first-child {
            border-right: 1px solid #f0f0f0;
        }

        .download-wrapper {
            position: absolute;
            right: 55px;
            bottom: 40px;
        }

        .download-btn {
            background-color: #148a2a;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 18px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            text-decoration: none;
        }

        .download-icon {
            width: 18px;
            height: 18px;
            background-color: black;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: white;
        }

        @media (max-width: 900px) {
            .navbar {
                flex-wrap: wrap;
                height: auto;
                padding: 12px 16px;
                gap: 12px;
            }

            .navbar-center {
                flex-wrap: wrap;
                gap: 10px;
            }

            .page-wrapper {
                padding: 30px 20px 100px 20px;
            }

            .table-box {
                width: 100%;
            }

            .download-wrapper {
                position: static;
                margin-top: 30px;
                display: flex;
                justify-content: flex-end;
            }
        }
    </style>
</head>
<body>

    <nav class="navbar">
        <div class="navbar-left">
            <div class="logo-circle">🎓</div>
            <div class="school-text">
                <div class="title">SMA NEGERI 3 BALIGE</div>
                <div class="subtitle">Excellence in Education</div>
            </div>
        </div>

        <div class="navbar-center">
            <a href="{{ route('beranda') }}">Beranda</a>
            <a href="{{ route('berita') }}">Berita & Informasi</a>
            <a href="{{ route('profil') }}">Profil Sekolah</a>
            <a href="{{ route('portofolio') }}">Portofolio & Skill</a>
            <a href="{{ route('unduh-skl') }}" class="active">Unduh SKL</a>
            <a href="#">Data</a>
            <a href="#">Pelanggaran</a>
        </div>

        <div class="navbar-right">
            <div class="user-icon"></div>
            <span>SISWA</span>
        </div>
    </nav>

    <div class="page-wrapper">
        <div class="table-box">
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rudi Ginting</td>
                        <td>Lulus</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="download-wrapper">
            <a href="#" class="download-btn">
                <span class="download-icon">⬇</span>
                Download
            </a>
        </div>
    </div>

</body>
</html>
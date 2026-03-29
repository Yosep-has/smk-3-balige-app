@extends('layouts.app')

@section('content')

<!-- ================= HEADER SKL ================= -->
<section class="hero" style="padding: 60px 0 40px; min-height: auto;">
    <div class="container">
        <h1 style="font-size: 2rem; margin-bottom: 8px;">Surat Keterangan Lulus</h1>
        <p style="color: #666; font-size: 1rem;">
            Daftar kelulusan siswa SMK Negeri 3 Balige. Klik tombol <strong>Download</strong> untuk mengunduh SKL Anda.
        </p>
    </div>
</section>

<!-- ================= TABEL SKL ================= -->
<section class="section">
    <div class="container">

        <!-- Status loading / error -->
        <div id="skl-loading" style="text-align:center; padding: 48px; color: #888;">
            ⏳ Memuat data kelulusan...
        </div>
        <div id="skl-error" style="display:none; text-align:center; padding: 48px; color: #e53e3e;">
            ⚠️ <span id="skl-error-msg"></span>
        </div>

        <!-- Tabel -->
        <div id="skl-table-wrap" style="display:none; overflow-x: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            <table style="width:100%; border-collapse:collapse; background:#fff;">
                <thead>
                    <tr style="background-color:#1a1a2e;">
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">No</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">Nama</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">NISN</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">Jurusan</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">Kelas</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">Keterangan</th>
                        <th style="padding:16px 20px; text-align:left; color:#fff; font-family:Poppins,sans-serif; font-size:13px;">Aksi</th>
                    </tr>
                </thead>
                <tbody id="skl-tbody"></tbody>
            </table>
        </div>

        <!-- Total -->
        <div id="skl-total" style="display:none; text-align:right; margin-top:12px; color:#aaa; font-size:12px; font-family:Poppins,sans-serif;"></div>

    </div>
</section>

<script>
    const API_BASE = 'https://smkn-3-balige-manajemen-data-be.flwryy.fun:8080';

    fetch(API_BASE + '/siswa')
        .then(res => {
            if (!res.ok) throw new Error('Server merespons dengan status ' + res.status);
            return res.json();
        })
        .then(data => {
            document.getElementById('skl-loading').style.display = 'none';

            const list = Array.isArray(data) ? data : [];

            if (list.length === 0) {
                document.getElementById('skl-error-msg').textContent = 'Belum ada data kelulusan.';
                document.getElementById('skl-error').style.display = 'block';
                return;
            }

            const tbody = document.getElementById('skl-tbody');
            list.forEach((siswa, i) => {
                const punyaSkl = !!siswa.skl_file;
                const row = document.createElement('tr');
                row.style.borderBottom = '1px solid #f0f0f0';
                row.style.backgroundColor = i % 2 === 0 ? '#fff' : '#fafafa';
                row.onmouseenter = () => row.style.backgroundColor = '#fffbf0';
                row.onmouseleave = () => row.style.backgroundColor = i % 2 === 0 ? '#fff' : '#fafafa';

                row.innerHTML = `
                    <td style="padding:15px 20px; color:#bbb; font-size:13px; font-family:Poppins,sans-serif;">${i + 1}</td>
                    <td style="padding:15px 20px; font-size:15px; color:#1a1a2e; font-family:Poppins,sans-serif; font-weight:600;">${siswa.nama_lengkap}</td>
                    <td style="padding:15px 20px; font-size:13px; color:#777; font-family:Poppins,sans-serif;">${siswa.nisn}</td>
                    <td style="padding:15px 20px; font-size:13px; color:#555; font-family:Poppins,sans-serif;">${siswa.jurusan}</td>
                    <td style="padding:15px 20px; font-size:13px; color:#555; font-family:Poppins,sans-serif;">${siswa.kelas}</td>
                    <td style="padding:15px 20px;">
                        <span style="
                            display:inline-block;
                            background:${punyaSkl ? '#e8f5e9' : '#fdecea'};
                            color:${punyaSkl ? '#2e7d32' : '#c62828'};
                            padding:4px 14px; border-radius:20px;
                            font-size:12px; font-weight:700;
                            font-family:Poppins,sans-serif;
                            border:1px solid ${punyaSkl ? '#a5d6a7' : '#ef9a9a'};
                        ">${punyaSkl ? 'Lulus' : 'Belum Tersedia'}</span>
                    </td>
                    <td style="padding:15px 20px;">
                        ${punyaSkl
                            ? `<a href="${API_BASE}/siswa/${siswa.id}/skl" target="_blank"
                                style="
                                    display:inline-flex; align-items:center; gap:5px;
                                    background:#27ae60; color:#fff; text-decoration:none;
                                    padding:7px 16px; border-radius:6px;
                                    font-size:12px; font-family:Poppins,sans-serif; font-weight:700;
                                    box-shadow:0 2px 6px rgba(39,174,96,0.35);
                                ">⬇ Download</a>`
                            : `<span style="color:#ccc; font-size:13px; font-family:Poppins,sans-serif;">—</span>`
                        }
                    </td>
                `;
                tbody.appendChild(row);
            });

            document.getElementById('skl-table-wrap').style.display = 'block';
            document.getElementById('skl-total').style.display = 'block';
            document.getElementById('skl-total').textContent = 'Total ' + list.length + ' siswa';
        })
        .catch(err => {
            document.getElementById('skl-loading').style.display = 'none';
            document.getElementById('skl-error-msg').textContent = 'Gagal memuat data: ' + err.message;
            document.getElementById('skl-error').style.display = 'block';
        });
</script>

@endsection
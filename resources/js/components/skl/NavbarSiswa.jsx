  import React from "react";

  export default function NavbarSiswa() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-circle">🎓</div>
          <div className="school-text">
            <div className="title">SMA NEGERI 3 BALIGE</div>
            <div className="subtitle">Excellence in Education</div>
          </div>
        </div>

        <div className="navbar-center">
          <a href="/">Beranda</a>
          <a href="/berita">Berita & Informasi</a>
          <a href="/profil">Profil Sekolah</a>
          <a href="/portofolio">Portofolio & Skill</a>
          <a href="/unduh-skl" className="active">Unduh SKL</a>
          <a href="/data">Data</a>
          <a href="/pelanggaran">Pelanggaran</a>
        </div>

        <div className="navbar-right">
          <div className="user-icon"></div>
          <span>SISWA</span>
        </div>
      </nav>
    );
  }
import React from "react";
import NavbarSiswa from "../../../components/skl/NavbarSiswa";
import "../../../styles/skl/unduh-skl.css";

export default function UnduhSKL() {
  const siswa = {
    nama: "Rudi Ginting",
    keterangan: "Lulus",
  };

  return (
    <div className="page-container">
      <NavbarSiswa />

      <div className="page-wrapper">
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{siswa.nama}</td>
                <td>{siswa.keterangan}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="download-wrapper">
          <button className="download-btn">
            <span className="download-icon">⬇</span>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
import * as React from "react";

const API_BASE = "https://smkn-3-balige-manajemen-data-be.flwryy.fun:8080";

export default function SklPublicPage() {
    const [siswaList, setSiswaList] = React.useState([]);
    const [loading, setLoading]     = React.useState(true);
    const [error, setError]         = React.useState("");

    React.useEffect(() => {
        fetch(`${API_BASE}/api/siswa`)
            .then((res) => {
                if (!res.ok) throw new Error("Server error");
                return res.json();
            })
            .then((data) => setSiswaList(Array.isArray(data) ? data : []))
            .catch((err) => setError("Gagal memuat data: " + err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleDownload = (id) => {
        window.open(`${API_BASE}/api/siswa/${id}/skl`, "_blank");
    };

    return (
        <div style={{
            minHeight: "100vh",
            backgroundColor: "#fdf9ec",
            fontFamily: "Georgia, serif",
        }}>
            {/* ===== NAVBAR ===== */}
            <nav style={{
                backgroundColor: "#1a1a2e",
                padding: "0 40px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                height: "64px", boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                position: "sticky", top: 0, zIndex: 100,
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                        width: "42px", height: "42px", backgroundColor: "#f5a623",
                        borderRadius: "50%", display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: "18px", fontWeight: "bold", color: "#1a1a2e",
                    }}>S</div>
                    <div>
                        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "15px", fontFamily: "sans-serif" }}>
                            SMK NEGERI 3 BALIGE
                        </div>
                        <div style={{ color: "#f5a623", fontSize: "11px", letterSpacing: "1px", fontFamily: "sans-serif" }}>
                            Excellence in Education
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {["Beranda","Berita & Informasi ▾","Profil Sekolah ▾","Portofolio & Skill ▾","Unduh SKL ▾","Data ▾","Pelanggaran ▾"].map((item) => (
                        <a key={item} href="#" style={{
                            color: item.startsWith("Unduh") ? "#f5a623" : "#ccc",
                            textDecoration: "none", fontSize: "13px",
                            padding: "6px 10px", fontFamily: "sans-serif",
                            fontWeight: item.startsWith("Unduh") ? "bold" : "normal",
                        }}>{item}</a>
                    ))}
                </div>
                <button style={{
                    background: "transparent", border: "1px solid #ccc", color: "#fff",
                    padding: "7px 18px", borderRadius: "20px", cursor: "pointer",
                    fontSize: "13px", fontFamily: "sans-serif",
                    display: "flex", alignItems: "center", gap: "8px",
                }}>👤 SISWA</button>
            </nav>

            {/* ===== KONTEN ===== */}
            <main style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>
                <div style={{ fontSize: "26px", fontWeight: "bold", color: "#1a1a2e", marginBottom: "6px", fontFamily: "sans-serif" }}>
                    Surat Keterangan Lulus (SKL)
                </div>
                <div style={{ color: "#888", fontSize: "14px", marginBottom: "32px", fontFamily: "sans-serif" }}>
                    Daftar kelulusan siswa SMK Negeri 3 Balige. Klik tombol <b>Download</b> untuk mengunduh SKL Anda.
                </div>

                <div style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#1a1a2e" }}>
                                {["No","Nama","NISN","Jurusan","Kelas","Keterangan","Aksi"].map((h) => (
                                    <th key={h} style={{
                                        padding: "16px 20px", textAlign: "left",
                                        fontSize: "13px", fontWeight: "600",
                                        color: "#fff", fontFamily: "sans-serif",
                                    }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (
                                <tr><td colSpan={7} style={{ textAlign: "center", padding: "56px", color: "#aaa", fontFamily: "sans-serif" }}>
                                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>⏳</div>
                                    Memuat data dari server...
                                </td></tr>
                            )}
                            {!loading && error && (
                                <tr><td colSpan={7} style={{ textAlign: "center", padding: "56px", fontFamily: "sans-serif" }}>
                                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>⚠️</div>
                                    <div style={{ color: "#e53e3e", fontSize: "14px", marginBottom: "8px" }}>{error}</div>
                                    <div style={{ color: "#aaa", fontSize: "12px" }}>
                                        Endpoint: {API_BASE}/api/siswa
                                    </div>
                                </td></tr>
                            )}
                            {!loading && !error && siswaList.length === 0 && (
                                <tr><td colSpan={7} style={{ textAlign: "center", padding: "56px", color: "#aaa", fontFamily: "sans-serif" }}>
                                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>📭</div>
                                    Belum ada data siswa.
                                </td></tr>
                            )}
                            {!loading && !error && siswaList.map((siswa, i) => {
                                const punyaSkl = !!siswa.skl_file;
                                return (
                                    <tr key={siswa.id} style={{
                                        borderBottom: "1px solid #f0f0f0",
                                        backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa",
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#fffbf0"}
                                        onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fff" : "#fafafa"}
                                    >
                                        <td style={{ padding: "15px 20px", color: "#bbb", fontSize: "13px", fontFamily: "sans-serif", width: "48px" }}>{i + 1}</td>
                                        <td style={{ padding: "15px 20px", fontSize: "15px", color: "#1a1a2e", fontFamily: "Georgia, serif", fontWeight: "500" }}>{siswa.nama_lengkap}</td>
                                        <td style={{ padding: "15px 20px", fontSize: "13px", color: "#777", fontFamily: "sans-serif" }}>{siswa.nisn}</td>
                                        <td style={{ padding: "15px 20px", fontSize: "13px", color: "#555", fontFamily: "sans-serif" }}>{siswa.jurusan}</td>
                                        <td style={{ padding: "15px 20px", fontSize: "13px", color: "#555", fontFamily: "sans-serif" }}>{siswa.kelas}</td>
                                        <td style={{ padding: "15px 20px" }}>
                                            <span style={{
                                                display: "inline-block",
                                                background: punyaSkl ? "#e8f5e9" : "#fdecea",
                                                color: punyaSkl ? "#2e7d32" : "#c62828",
                                                padding: "4px 14px", borderRadius: "20px",
                                                fontSize: "12px", fontWeight: "bold", fontFamily: "sans-serif",
                                                border: `1px solid ${punyaSkl ? "#a5d6a7" : "#ef9a9a"}`,
                                            }}>
                                                {punyaSkl ? "Lulus" : "Belum Tersedia"}
                                            </span>
                                        </td>
                                        <td style={{ padding: "15px 20px" }}>
                                            {punyaSkl ? (
                                                <button onClick={() => handleDownload(siswa.id)} style={{
                                                    background: "#27ae60", color: "#fff", border: "none",
                                                    padding: "7px 16px", borderRadius: "6px", cursor: "pointer",
                                                    fontSize: "12px", fontFamily: "sans-serif", fontWeight: "bold",
                                                    display: "inline-flex", alignItems: "center", gap: "5px",
                                                    boxShadow: "0 2px 6px rgba(39,174,96,0.35)",
                                                }}
                                                    onMouseEnter={e => e.currentTarget.style.background = "#219a52"}
                                                    onMouseLeave={e => e.currentTarget.style.background = "#27ae60"}
                                                >⬇ Download</button>
                                            ) : (
                                                <span style={{ color: "#ccc", fontSize: "13px", fontFamily: "sans-serif" }}>—</span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {!loading && !error && siswaList.length > 0 && (
                    <div style={{ marginTop: "16px", color: "#aaa", fontSize: "12px", fontFamily: "sans-serif", textAlign: "right" }}>
                        Total {siswaList.length} siswa
                    </div>
                )}
            </main>
        </div>
    );
}
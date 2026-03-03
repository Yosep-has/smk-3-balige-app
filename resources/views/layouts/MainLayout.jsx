import { Link } from "@inertiajs/react";

export default function MainLayout({ children }) {
    return (
        <div>
            {/* NAVBAR */}
            <nav
                style={{
                    backgroundColor: "black",
                    padding: "15px",
                    display: "flex",
                    gap: "20px",
                    color: "white",
                }}
            >
                <Link href="/" style={{ color: "white" }}>
                    Beranda
                </Link>
                <Link href="/berita" style={{ color: "white" }}>
                    Berita & Informasi
                </Link>
                <Link href="/profil" style={{ color: "white" }}>
                    Profil Sekolah
                </Link>
                <Link href="/portfolio" style={{ color: "white" }}>
                    Portofolio & Skill
                </Link>
            </nav>

            {/* CONTENT */}
            <div style={{ padding: "20px" }}>{children}</div>
        </div>
    );
}

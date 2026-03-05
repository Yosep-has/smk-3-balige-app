import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import * as React from "react";
import { route } from "ziggy-js";

export default function SklPublicPage() {
    const [nisn, setNisn] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState(null);
    const [error, setError] = React.useState("");

    const handleCheck = async () => {
        if (!nisn.trim()) {
            setError("NISN tidak boleh kosong.");
            return;
        }
        setLoading(true);
        setError("");
        setResult(null);
        try {
            const res = await axios.post(route("skl.check-nisn"), { nisn });
            setResult(res.data.data);
        } catch (err) {
            if (err.response?.status === 404) {
                setError("Data SKL dengan NISN tersebut tidak ditemukan.");
            } else {
                setError("Terjadi kesalahan. Silakan coba lagi.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        alert("Fitur download PDF akan tersedia setelah generate PDF diimplementasi.");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <header className="bg-white border-b shadow-sm">
                <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        SMK
                    </div>
                    <div>
                        <h1 className="font-bold text-gray-900 text-sm">SMK Negeri 3 Balige</h1>
                        <p className="text-xs text-gray-500">Layanan Unduh Surat Keterangan Lulus</p>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
                {/* Form Cari */}
                <Card>
                    <CardHeader>
                        <CardTitle>Cek Status Kelulusan</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <Label>NISN (Nomor Induk Siswa Nasional)</Label>
                            <Input
                                value={nisn}
                                onChange={(e) => setNisn(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                                placeholder="Masukkan NISN Anda..."
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                        <Button onClick={handleCheck} disabled={loading}>
                            {loading ? "Memeriksa..." : "Cek Status SKL"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Hasil */}
                {result && (
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Data Kelulusan</CardTitle>
                                <Badge
                                    variant={result.status === "Lulus" ? "default" : "destructive"}
                                    className="text-sm"
                                >
                                    {result.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="text-muted-foreground">NISN</p>
                                    <p className="font-medium">{result.nisn}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Nama</p>
                                    <p className="font-medium">{result.nama}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Tempat, Tgl Lahir</p>
                                    <p className="font-medium">
                                        {result.tempat_lahir},{" "}
                                        {new Date(result.tanggal_lahir).toLocaleDateString("id-ID")}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Nama Orang Tua</p>
                                    <p className="font-medium">{result.nama_orang_tua}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Jurusan</p>
                                    <p className="font-medium">{result.jurusan}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Tahun Lulus</p>
                                    <p className="font-medium">{result.tahun_lulus}</p>
                                </div>
                                {result.nomor_skl && (
                                    <div className="col-span-2">
                                        <p className="text-muted-foreground">Nomor SKL</p>
                                        <p className="font-medium">{result.nomor_skl}</p>
                                    </div>
                                )}
                            </div>

                            {result.status === "Lulus" && (
                                <Button onClick={handleDownload} className="mt-2">
                                    Unduh SKL (PDF)
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                )}
            </main>

            {/* Footer */}
            <footer className="border-t bg-white py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} SMK Negeri 3 Balige. All rights reserved.
            </footer>
        </div>
    );
}

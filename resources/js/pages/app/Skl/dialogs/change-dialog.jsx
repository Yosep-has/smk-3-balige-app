import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "@inertiajs/react";
import { Separator } from "@radix-ui/react-separator";
import { useEffect } from "react";
import { route } from "ziggy-js";

export function SklChangeDialog({
    open,
    onOpenChange,
    title,
    data: dataEdit,
    jurusanOptions,
    statusOptions,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nisn: "",
        nama: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        nama_orang_tua: "",
        jurusan: "",
        tahun_lulus: new Date().getFullYear(),
        status: "Lulus",
        nomor_skl: "",
    });

    useEffect(() => {
        if (dataEdit) {
            setData({
                nisn: dataEdit.nisn ?? "",
                nama: dataEdit.nama ?? "",
                tempat_lahir: dataEdit.tempat_lahir ?? "",
                tanggal_lahir: dataEdit.tanggal_lahir ?? "",
                nama_orang_tua: dataEdit.nama_orang_tua ?? "",
                jurusan: dataEdit.jurusan ?? "",
                tahun_lulus: dataEdit.tahun_lulus ?? new Date().getFullYear(),
                status: dataEdit.status ?? "Lulus",
                nomor_skl: dataEdit.nomor_skl ?? "",
            });
        } else {
            reset();
        }
    }, [dataEdit, open]);

    const handleSubmit = () => {
        post(route("skl.change-post"));
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent aria-describedby="skl-form">
                <SheetHeader className="pb-0">
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>
                        Isi data SKL siswa pada form di bawah ini.
                    </SheetDescription>
                </SheetHeader>
                <Separator className="border-b" />
                <div className="grid flex-1 auto-rows-min gap-4 px-4 overflow-y-auto">
                    {/* NISN */}
                    <div className="grid gap-2">
                        <Label>NISN</Label>
                        <Input
                            value={data.nisn}
                            onChange={(e) => setData("nisn", e.target.value)}
                            disabled={!!dataEdit}
                            placeholder="Contoh: 1234567890"
                        />
                        {errors.nisn && (
                            <p className="text-sm text-red-500">{errors.nisn}</p>
                        )}
                    </div>

                    {/* Nama */}
                    <div className="grid gap-2">
                        <Label>Nama Lengkap</Label>
                        <Input
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            placeholder="Nama lengkap siswa"
                        />
                        {errors.nama && (
                            <p className="text-sm text-red-500">{errors.nama}</p>
                        )}
                    </div>

                    {/* Tempat Lahir */}
                    <div className="grid gap-2">
                        <Label>Tempat Lahir</Label>
                        <Input
                            value={data.tempat_lahir}
                            onChange={(e) => setData("tempat_lahir", e.target.value)}
                            placeholder="Kota tempat lahir"
                        />
                        {errors.tempat_lahir && (
                            <p className="text-sm text-red-500">{errors.tempat_lahir}</p>
                        )}
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="grid gap-2">
                        <Label>Tanggal Lahir</Label>
                        <Input
                            type="date"
                            value={data.tanggal_lahir}
                            onChange={(e) => setData("tanggal_lahir", e.target.value)}
                        />
                        {errors.tanggal_lahir && (
                            <p className="text-sm text-red-500">{errors.tanggal_lahir}</p>
                        )}
                    </div>

                    {/* Nama Orang Tua */}
                    <div className="grid gap-2">
                        <Label>Nama Orang Tua</Label>
                        <Input
                            value={data.nama_orang_tua}
                            onChange={(e) => setData("nama_orang_tua", e.target.value)}
                            placeholder="Nama ayah/ibu"
                        />
                        {errors.nama_orang_tua && (
                            <p className="text-sm text-red-500">{errors.nama_orang_tua}</p>
                        )}
                    </div>

                    {/* Jurusan */}
                    <div className="grid gap-2">
                        <Label>Jurusan</Label>
                        <Select
                            value={data.jurusan}
                            onValueChange={(val) => setData("jurusan", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih jurusan" />
                            </SelectTrigger>
                            <SelectContent>
                                {jurusanOptions?.map((j) => (
                                    <SelectItem key={j} value={j}>
                                        {j}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.jurusan && (
                            <p className="text-sm text-red-500">{errors.jurusan}</p>
                        )}
                    </div>

                    {/* Tahun Lulus */}
                    <div className="grid gap-2">
                        <Label>Tahun Lulus</Label>
                        <Input
                            type="number"
                            min="2000"
                            max="2100"
                            value={data.tahun_lulus}
                            onChange={(e) => setData("tahun_lulus", e.target.value)}
                        />
                        {errors.tahun_lulus && (
                            <p className="text-sm text-red-500">{errors.tahun_lulus}</p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="grid gap-2">
                        <Label>Status</Label>
                        <Select
                            value={data.status}
                            onValueChange={(val) => setData("status", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih status" />
                            </SelectTrigger>
                            <SelectContent>
                                {statusOptions?.map((s) => (
                                    <SelectItem key={s} value={s}>
                                        {s}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.status && (
                            <p className="text-sm text-red-500">{errors.status}</p>
                        )}
                    </div>

                    {/* Nomor SKL */}
                    <div className="grid gap-2">
                        <Label>Nomor SKL (opsional)</Label>
                        <Input
                            value={data.nomor_skl}
                            onChange={(e) => setData("nomor_skl", e.target.value)}
                            placeholder="Contoh: 421.3/123/2024"
                        />
                        {errors.nomor_skl && (
                            <p className="text-sm text-red-500">{errors.nomor_skl}</p>
                        )}
                    </div>
                </div>

                <SheetFooter>
                    <Button onClick={handleSubmit} disabled={processing}>
                        {processing ? "Menyimpan..." : "Simpan"}
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" disabled={processing}>
                            Batal
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

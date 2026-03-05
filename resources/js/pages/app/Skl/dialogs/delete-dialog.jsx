import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { AlertCircleIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { route } from "ziggy-js";

export function SklDeleteDialog({ open, onOpenChange, data: dataDelete }) {
    const { data, setData, post, processing } = useForm({
        nisn: "",
        confirmation: "",
    });

    useEffect(() => {
        if (dataDelete) {
            setData("nisn", dataDelete.nisn ?? "");
            setData("confirmation", "");
        }
    }, [dataDelete]);

    const handleSubmit = () => {
        if (data.confirmation !== dataDelete?.nisn) {
            toast.error("Konfirmasi NISN tidak sesuai.");
            return;
        }
        post(route("skl.delete-post"));
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent aria-describedby="skl-delete-form">
                <SheetHeader className="pb-0">
                    <SheetTitle>Hapus Data SKL</SheetTitle>
                    <SheetDescription>
                        Tindakan ini akan menghapus data SKL siswa secara permanen.
                    </SheetDescription>
                </SheetHeader>
                <Separator className="border-b" />
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <Alert variant="destructive">
                        <AlertCircleIcon />
                        <AlertTitle>Peringatan</AlertTitle>
                        <AlertDescription>
                            Data SKL yang dihapus tidak dapat dikembalikan.
                        </AlertDescription>
                    </Alert>

                    {dataDelete && (
                        <div className="grid gap-3">
                            <Label>Nama Siswa</Label>
                            <Input value={dataDelete.nama ?? ""} readOnly />
                        </div>
                    )}

                    <div className="grid gap-3">
                        <Label>NISN (readonly)</Label>
                        <Input value={dataDelete?.nisn ?? ""} readOnly />
                    </div>

                    <div className="grid gap-3">
                        <Label>Ketik NISN untuk konfirmasi</Label>
                        <Input
                            value={data.confirmation}
                            onChange={(e) => setData("confirmation", e.target.value)}
                            placeholder={`Ketik: ${dataDelete?.nisn ?? ""}`}
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button
                        onClick={handleSubmit}
                        className="bg-red-600 hover:bg-red-700"
                        disabled={processing}
                    >
                        {processing ? "Menghapus..." : "Tetap Hapus"}
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

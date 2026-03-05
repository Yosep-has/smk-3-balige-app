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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { route } from "ziggy-js";

export function SklDeleteSelectedDialog({ open, onOpenChange, data: dataDelete }) {
    const { data, setData, post, processing } = useForm({
        nisnList: [],
        confirmation: "",
    });

    const [keyConfirmation, setKeyConfirmation] = useState("");

    useEffect(() => {
        if (dataDelete && dataDelete.length > 0) {
            setKeyConfirmation(
                Math.random().toString(36).substring(2, 8).toUpperCase()
            );
            setData("nisnList", dataDelete.map((d) => d.nisn));
        } else {
            setKeyConfirmation("");
        }
    }, [dataDelete]);

    const handleSubmit = () => {
        if (data.confirmation !== keyConfirmation) {
            toast.error("Konfirmasi kunci tidak sesuai.");
            return;
        }
        post(route("skl.delete-selected-post"));
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent aria-describedby="skl-delete-selected-form">
                <SheetHeader className="pb-0">
                    <SheetTitle>Hapus Data SKL Terpilih</SheetTitle>
                    <SheetDescription>
                        Tindakan ini akan menghapus {dataDelete?.length ?? 0} data SKL secara permanen.
                    </SheetDescription>
                </SheetHeader>
                <Separator className="border-b" />
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <Alert variant="destructive">
                        <AlertCircleIcon />
                        <AlertTitle>Peringatan</AlertTitle>
                        <AlertDescription>
                            <p>Data SKL yang akan dihapus:</p>
                            <ul className="list-inside list-disc text-sm max-h-48 overflow-y-auto mt-1">
                                {dataDelete?.map((d) => (
                                    <li key={d.nisn}>
                                        {d.nama} ({d.nisn})
                                    </li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>

                    <div className="grid gap-3">
                        <Label>Kunci untuk menghapus</Label>
                        <Input value={keyConfirmation} readOnly disabled />
                    </div>

                    <div className="grid gap-3">
                        <Label>Tulis ulang kunci</Label>
                        <Input
                            value={data.confirmation}
                            onChange={(e) => setData("confirmation", e.target.value)}
                            placeholder="Ketik kunci di atas"
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

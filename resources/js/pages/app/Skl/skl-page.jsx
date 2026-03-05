import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AppLayout from "@/layouts/app-layout";
import { router, usePage } from "@inertiajs/react";
import * as Icon from "@tabler/icons-react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { SklChangeDialog } from "./dialogs/change-dialog";
import { SklDeleteDialog } from "./dialogs/delete-dialog";
import { SklDeleteSelectedDialog } from "./dialogs/delete-selected-dialog";

export default function SklPage() {
    const { sklList, isEditor, jurusanOptions, statusOptions, flash } =
        usePage().props;

    const [search, setSearch] = React.useState("");
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const [isChangeDialogOpen, setIsChangeDialogOpen] = React.useState(false);
    const [titleChangeDialog, setTitleChangeDialog] = React.useState("Tambah Data SKL");
    const [dataEdit, setDataEdit] = React.useState(null);

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
    const [dataDelete, setDataDelete] = React.useState(null);

    const [isDeleteSelectedDialogOpen, setIsDeleteSelectedDialogOpen] = React.useState(false);
    const [dataDeleteSelected, setDataDeleteSelected] = React.useState(null);

    React.useEffect(() => {
        if (flash?.success) {
            router.reload({ only: ["sklList"] });
            setIsChangeDialogOpen(false);
            setIsDeleteDialogOpen(false);
            setIsDeleteSelectedDialogOpen(false);
            setRowSelection({});
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                />
            ),
            enableSorting: false,
        },
        {
            id: "no",
            header: "No",
            cell: ({ row }) => row.index + 1,
            enableSorting: false,
        },
        {
            accessorKey: "nisn",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    NISN
                    <Icon.IconArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
        },
        {
            accessorKey: "nama",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama Siswa
                    <Icon.IconArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <div>
                    <div className="font-medium">{row.original.nama}</div>
                    <div className="text-xs text-muted-foreground">
                        {row.original.tempat_lahir},{" "}
                        {new Date(row.original.tanggal_lahir).toLocaleDateString("id-ID")}
                    </div>
                </div>
            ),
        },
        {
            accessorKey: "jurusan",
            header: "Jurusan",
            cell: ({ row }) => (
                <Badge variant="outline">{row.original.jurusan}</Badge>
            ),
        },
        {
            accessorKey: "tahun_lulus",
            header: "Tahun Lulus",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <Badge
                    variant={
                        row.original.status === "Lulus"
                            ? "default"
                            : "destructive"
                    }
                >
                    {row.original.status === "Lulus" ? (
                        <Icon.IconCircleCheck className="mr-1 h-3 w-3" />
                    ) : (
                        <Icon.IconCircleX className="mr-1 h-3 w-3" />
                    )}
                    {row.original.status}
                </Badge>
            ),
        },
        {
            accessorKey: "nomor_skl",
            header: "Nomor SKL",
            cell: ({ row }) => row.original.nomor_skl ?? "-",
        },
        {
            id: "aksi",
            header: "Aksi",
            cell: ({ row }) =>
                isEditor ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Icon.IconDots className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => {
                                    setDataEdit(row.original);
                                    setTitleChangeDialog("Edit Data SKL");
                                    setIsChangeDialogOpen(true);
                                }}
                            >
                                <Icon.IconEdit className="mr-2 h-4 w-4" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => {
                                    setDataDelete(row.original);
                                    setIsDeleteDialogOpen(true);
                                }}
                            >
                                <Icon.IconTrash className="mr-2 h-4 w-4" />
                                Hapus
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : null,
        },
    ];

    const table = useReactTable({
        data: sklList,
        columns,
        state: { sorting, columnFilters, columnVisibility, rowSelection, globalFilter: search },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setSearch,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const selectedRows = table.getFilteredSelectedRowModel().rows;

    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>Data Surat Keterangan Lulus (SKL)</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Toolbar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <InputGroup>
                                <InputGroupAddon>
                                    <Icon.IconSearch className="h-4 w-4" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Cari nama atau NISN..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-64"
                                />
                            </InputGroup>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        Kolom <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {table
                                        .getAllColumns()
                                        .filter((col) => col.getCanHide())
                                        .map((col) => (
                                            <DropdownMenuCheckboxItem
                                                key={col.id}
                                                checked={col.getIsVisible()}
                                                onCheckedChange={(val) =>
                                                    col.toggleVisibility(!!val)
                                                }
                                            >
                                                {col.id}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="flex items-center gap-2">
                            {isEditor && selectedRows.length > 0 && (
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        setDataDeleteSelected(
                                            selectedRows.map((r) => r.original)
                                        );
                                        setIsDeleteSelectedDialogOpen(true);
                                    }}
                                >
                                    <Icon.IconTrash className="mr-2 h-4 w-4" />
                                    Hapus ({selectedRows.length})
                                </Button>
                            )}
                            {isEditor && (
                                <Button
                                    onClick={() => {
                                        setDataEdit(null);
                                        setTitleChangeDialog("Tambah Data SKL");
                                        setIsChangeDialogOpen(true);
                                    }}
                                >
                                    <Icon.IconPlus className="mr-2 h-4 w-4" />
                                    Tambah
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Tabel */}
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((hg) => (
                                    <TableRow key={hg.id}>
                                        {hg.headers.map((header) => (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id}>
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="text-center py-8 text-muted-foreground"
                                        >
                                            Belum ada data SKL.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-muted-foreground">
                            {selectedRows.length} dari{" "}
                            {table.getFilteredRowModel().rows.length} baris dipilih
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Berikutnya
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <SklChangeDialog
                open={isChangeDialogOpen}
                onOpenChange={setIsChangeDialogOpen}
                title={titleChangeDialog}
                data={dataEdit}
                jurusanOptions={jurusanOptions}
                statusOptions={statusOptions}
            />
            <SklDeleteDialog
                open={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
                data={dataDelete}
            />
            <SklDeleteSelectedDialog
                open={isDeleteSelectedDialogOpen}
                onOpenChange={setIsDeleteSelectedDialogOpen}
                data={dataDeleteSelected}
            />
        </AppLayout>
    );
}

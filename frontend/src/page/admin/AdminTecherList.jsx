import React, { useEffect, useState } from "react";
import { DataTable } from "../../components/data-table/DataTable";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DataTableColumnHeader } from "../../components/data-table/DataTableColumnHeader ";
import { toast, ToastContainer } from "react-toastify";
import TeacherApi from "../../servies/api/Teacher/TeacherApi";
import AdminTeacherUpserForm from "./AdminTeacherUpserForm";

export default function AdminTecherList() {
    const [data, setData] = useState([]);

    const DeletParent = async (id) => {
        const deletingloading = toast.loading("Deleting parent...");
        try {
            const { status } = await TeacherApi.delete(id);
            if (status === 200) {
                toast.dismiss(deletingloading);
                setData((prevData) =>
                    prevData.filter((parent) => parent.id !== id)
                );
                toast.success("Parent deleted successfully!");
            }
        } catch (error) {
            toast.error("Failed to delete parent.");
        }
    };
    const TeacherListColum = [
        {
            accessorKey: "id",
            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        #ID
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const id = row.getValue("id");
                return <div className="text-center font-medium">{id}</div>;
            },
        },
        {
            accessorKey: "fristname",

            header: ({ column }) => {
                return (
                    <DataTableColumnHeader column={column} title="fristname" />
                );
                /*   const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Frist Name
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                ); */
            },
            cell: ({ row }) => {
                const fristname = row.getValue("fristname");
                return (
                    <div className="text-center font-medium">{fristname}</div>
                );
            },
        },
        {
            accessorKey: "lastname",
            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Last Name
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const lastname = row.getValue("lastname");
                return (
                    <div className="text-center font-medium">{lastname}</div>
                );
            },
        },
        {
            accessorKey: "date_of_birth",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Date Of Birth
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const date_of_birth = row.getValue("date_of_birth");
                return (
                    <div className="text-center font-medium">
                        {date_of_birth}
                    </div>
                );
            },
        },
        {
            accessorKey: "gender",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Gender
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const value = row.getValue("gender");
                const gender = value === "f" ? "Female" : "Male";
                return <div className="text-center font-medium">{gender}</div>;
            },
        },
        {
            accessorKey: "bloode_type",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Bloode Type
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const bloode_type = row.getValue("bloode_type");
                return (
                    <div className="text-center font-medium">{bloode_type}</div>
                );
            },
        },

        {
            accessorKey: "address",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Address
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const address = row.getValue("address");
                return <div className="text-center font-medium">{address}</div>;
            },
        },
        {
            accessorKey: "student_parent_id",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Address
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const lastname = row.getValue("student_parent_id");
                return (
                    <div className="text-center font-medium">{lastname}</div>
                );
            },
        },
        {
            accessorKey: "phone",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Phone
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const phone = row.getValue("phone");
                return (
                    <div className="text-center font-medium">+212-{phone}</div>
                );
            },
        },
        {
            accessorKey: "email",

            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Email
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const email = row.getValue("email");
                return <div className="text-center font-medium">{email}</div>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const { id, lastname, fristname } = row.original;
                const [isOpen, setIsOpen] = useState(false);

                return (
                    <div>
                        <Sheet
                            open={isOpen}
                            onOpenChange={setIsOpen}
                            style={{ overflow: "auto" }}
                        >
                            <SheetTrigger>
                                <Button size={"sm"} variant="outline">
                                    update
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                style={{
                                    overflow: "auto",
                                    textAlign: "center",
                                }}
                            >
                                <SheetHeader>
                                    <SheetTitle>
                                        Update Parent &nbsp; {fristname} &nbsp;
                                        {lastname}
                                    </SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click
                                        save when you're done.
                                        <div style={{ overflow: "auto" }}>
                                            <AdminTeacherUpserForm
                                                value={row.original}
                                                SubmitCreate={(FormData) => {
                                                    const promise =
                                                        TeacherApi.update(
                                                            id,
                                                            FormData
                                                        );
                                                    promise.then((response) => {
                                                        const { teacher } =
                                                            response.data;
                                                        const elments =
                                                            data.map((item) => {
                                                                if (
                                                                    item.id ===
                                                                    id
                                                                ) {
                                                                    return teacher;
                                                                }
                                                                return item;
                                                            });
                                                        setData(elments);
                                                        setIsOpen(false);
                                                    });
                                                    return promise;
                                                }}
                                            />
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button size={"sm"} variant="outline">
                                    Delete
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you absolutely sure to delete &nbsp;
                                        <span className={"font-bold"}>
                                            {fristname}
                                            &nbsp;
                                            {lastname}
                                        </span>
                                        ?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        className="mt-2"
                                        onClick={() => {
                                            DeletParent(id);
                                        }}
                                    >
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        TeacherApi.all().then(({ data }) => setData(data.data));
    }, []);

    return (
        <div className="">
            <ToastContainer />
            <DataTable columns={TeacherListColum} data={data} />
        </div>
    );
}

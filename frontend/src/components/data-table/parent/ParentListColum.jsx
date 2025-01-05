import { data } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import { DataTableColumnHeader } from "../DataTableColumnHeader ";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

export const ParentListColum = [
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
            return <DataTableColumnHeader column={column} title="fristname" />;
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
            return <div className="text-center font-medium">{fristname}</div>;
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
            return <div className="text-center font-medium">{lastname}</div>;
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
                <div className="text-center font-medium">{date_of_birth}</div>
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
            const gender = value === "f" ? "Male" : "Female";
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
            return <div className="text-center font-medium">{bloode_type}</div>;
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
            return <div className="text-center font-medium">+212-{phone}</div>;
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
            console.log(id);

            return (
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Delete</Button>
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
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="mt-2">
                                Continue
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            );
        },
    },
];

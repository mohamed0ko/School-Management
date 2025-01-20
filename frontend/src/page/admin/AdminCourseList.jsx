import React, { useEffect, useState } from "react";
import ParentApi from "../../servies/api/Parent/ParentApi";
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
import CourseApi from "../../servies/api/Course/CourseApi";
import AdminCourseUnserForm from "./AdminCourseUnserForm";

export default function AdminCourseList() {
    const [data, setData] = useState([]);

    const DeleteCourse = async (id) => {
        const deletingloading = toast.loading("Deleting Course...");
        try {
            const { status } = await CourseApi.delete(id);
            if (status === 200) {
                toast.dismiss(deletingloading);
                setData((prevData) =>
                    prevData.filter((parent) => parent.id !== id)
                );
                toast.success("Course deleted successfully!");
            }
        } catch (error) {
            toast.error("Failed to delete Course.");
        }
    };
    const CourseListColum = [
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
            accessorKey: "name",

            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Name" />;
            },
            cell: ({ row }) => {
                const name = row.getValue("name");
                return <div className="text-center font-medium">{name}</div>;
            },
        },
        {
            accessorKey: "description",
            header: ({ column }) => {
                const isAsc = column.getIsSorted() === "asc";
                return (
                    <Button
                        className="px-1 py-0"
                        variant="ghost"
                        onClick={() => column.toggleSorting(isAsc)}
                    >
                        Description
                        {isAsc ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                );
            },
            cell: ({ row }) => {
                const description = row.getValue("description");
                return (
                    <div className="text-center font-medium">{description}</div>
                );
            },
        },

        {
            id: "actions",
            cell: ({ row }) => {
                const { id, name } = row.original;
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
                                        Update Parent &nbsp; {name} &nbsp;
                                    </SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click
                                        save when you're done.
                                        <div style={{ overflow: "auto" }}>
                                            <AdminCourseUnserForm
                                                value={row.original}
                                                SubmitCreate={(FormData) => {
                                                    const promise =
                                                        CourseApi.update(
                                                            id,
                                                            FormData
                                                        );
                                                    promise.then((response) => {
                                                        const { course } =
                                                            response.data;
                                                        const elments =
                                                            data.map((item) => {
                                                                if (
                                                                    item.id ===
                                                                    id
                                                                ) {
                                                                    return course;
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
                                            {name}
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
                                            DeleteCourse(id);
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
        CourseApi.all().then(({ data }) => setData(data.data));
    }, []);

    return (
        <div className="">
            <ToastContainer />
            <DataTable columns={CourseListColum} data={data} />
        </div>
    );
}

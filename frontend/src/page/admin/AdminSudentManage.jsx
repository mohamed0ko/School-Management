import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminStudentList from "./AdminStudentList";
import StudentApi from "../../servies/api/Student/StudentApi";
import AdminStudentUnserForm from "./AdminStudentUnserForm";

const AdminSudentManage = () => {
    return (
        <>
            <div className="relactive overflow-x-auto"></div>
            <div className=" md:block">
                <div className="">
                    <div className="bg-background">
                        <div className="grid ">
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <Tabs
                                        defaultValue="music"
                                        className="h-full space-y-6"
                                    >
                                        <div className="space-between flex items-center">
                                            <TabsList>
                                                <TabsTrigger
                                                    value="music"
                                                    className="relative"
                                                >
                                                    Show Students
                                                </TabsTrigger>
                                                <TabsTrigger value="podcasts">
                                                    Create Student
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>
                                        <TabsContent
                                            value="music"
                                            className="border-none p-0 outline-none"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <AdminStudentList />
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent
                                            value="podcasts"
                                            className="h-full flex-col border-none p-0 data-[state=active]:flex"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <AdminStudentUnserForm
                                                        SubmitCreate={(
                                                            formData
                                                        ) =>
                                                            StudentApi.create(
                                                                formData
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSudentManage;

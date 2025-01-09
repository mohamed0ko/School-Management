import React from "react";
import { Link } from "react-router-dom";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/ui/tabs";
import AdminParentList from "./AdminParentList";
import ParentApi from "../../servies/api/Parent/ParentApi";
import AdminParentUpserForm from "./AdminParentUpserForm";

const AdminParentManage = () => {
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
                                                    <Link to="ListParent">
                                                        Show Parent
                                                    </Link>
                                                </TabsTrigger>
                                                <TabsTrigger value="podcasts">
                                                    Podcasts
                                                </TabsTrigger>
                                            </TabsList>
                                        </div>
                                        <TabsContent
                                            value="music"
                                            className="border-none p-0 outline-none"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <AdminParentList />
                                                </div>
                                            </div>
                                        </TabsContent>
                                        <TabsContent
                                            value="podcasts"
                                            className="h-full flex-col border-none p-0 data-[state=active]:flex"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <AdminParentUpserForm
                                                        SubmitCreate={(
                                                            formData
                                                        ) =>
                                                            ParentApi.create(
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

            {/*  <div className="d-grid gap-2 d-md-block">
                <Link to="ListParent" className="btn btn-primary">
                    Show Parent
                </Link>
                &nbsp;
                <Link to="ParentCreate" className="btn btn-primary">
                    ParentCreate
                </Link>
            </div>
            <div>
                <Outlet />
            </div> */}
        </>
    );
};

export default AdminParentManage;

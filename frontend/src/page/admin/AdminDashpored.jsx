import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { redirectToDashboard } from "../../App";
import { useAuthContext } from "../../api/ContextAuth";
import UserApi from "../../servies/api/User/UserApi";

export default function AdminDashpored({ className }) {
    const { setUser, setAuthenticated, logout, authenticated } =
        useAuthContext();
    const navigate = useNavigate();
    const [isloding, setIsloding] = useState(true);

    useEffect(() => {
        if (authenticated == true) {
            setIsloding(false);
            UserApi.getUser()
                .then(({ data }) => {
                    const { role } = data;
                    if (role !== "admin") {
                        navigate(redirectToDashboard(role));
                    }
                    setUser(data);
                    setAuthenticated(true);
                })
                .catch((respo) => {
                    logout();
                });
        } else {
            navigate("/login");
        }
    }, [authenticated]);
    if (isloding) {
        return <></>;
    }

    return (
        <main className={"mx-auto space-y-4 py-4"}>
            <div className="flex">
                <div className={"w-25 border mr-2 rounded-l"}>
                    <div className={cn("pb-12", className)}>
                        <div>
                            <div className="px-3 py-2">
                                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                    <Link
                                        style={{ color: "black" }}
                                        className="nav-link align-middle px-0"
                                        to="/SutedentDashpored"
                                    >
                                        Dashpored
                                    </Link>
                                </h2>
                                <div className="space-y-1">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <Link
                                            style={{ color: "black" }}
                                            to="/AdminDashpored/ManageParent"
                                            className="nav-link align-middle px-0"
                                        >
                                            <i className="fa-solid fa-user-plus"></i>{" "}
                                            &nbsp; Parents
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <Link
                                            style={{ color: "black" }}
                                            to="/AdminDashpored/ManageStudent"
                                            className="nav-link align-middle px-0"
                                        >
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            &nbsp; Students
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <Link
                                            style={{ color: "black" }}
                                            to="/AdminDashpored/TeacherManage"
                                            className="nav-link align-middle px-0"
                                        >
                                            <i className="fa-solid fa-chalkboard-user"></i>
                                            &nbsp; Teachers
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        <Link
                                            style={{ color: "black" }}
                                            to="/AdminDashpored/CourseManage"
                                            className="nav-link align-middle px-0"
                                        >
                                            <i className="fa-solid fa-book"></i>
                                            &nbsp; Courses
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-100 border mr-2  rounded-l"}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

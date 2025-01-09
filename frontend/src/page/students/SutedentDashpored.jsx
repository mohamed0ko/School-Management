import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StudentsApi from "../../servies/api/students/students";
import { useAuthContext } from "../../api/ContextAuth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
export default function SutedentDashpored({ className }) {
    const { setUser, setAuthenticated, logout, authenticated } =
        useAuthContext();
    const navigate = useNavigate();
    const [isloding, setIsloding] = useState(true);

    useEffect(() => {
        if (authenticated == true) {
            setIsloding(false);
            StudentsApi.getUser()
                .then(({ data }) => {
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
                <div className={"w-24 md:w-2/12 border mr-2 rounded-l"}>
                    <div className={cn("pb-12", className)}>
                        <div>
                            <div className="px-3 py-2">
                                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                                    <Link
                                        className="nav-link align-middle px-0"
                                        to="/SutedentDashpored"
                                    >
                                        Student Dashpored
                                    </Link>
                                </h2>
                                <div className="space-y-1">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        hiii
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-100 md:w-2/12 border mr-2  rounded-l"}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

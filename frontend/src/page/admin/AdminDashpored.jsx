import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../../api/ContextAuth";
import StudentsApi from "../../servies/api/students/students";
import Register from "../Register";
export default function AdminDashpored() {
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
                    <Register />
                </div>
                <div className={"w-100 md:w-2/12 border mr-2  rounded-l"}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

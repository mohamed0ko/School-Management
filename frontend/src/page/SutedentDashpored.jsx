import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../api/ContextAuth";
import StudentsApi from "../servies/api/students/students";
export default function SutedentDashpored() {
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
        <div id="" className="container-fluid ">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a
                            href="/"
                            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                        >
                            <span className="fs-5 d-none d-sm-inline">
                                Menu
                            </span>
                        </a>
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="nav-item">
                                <Link
                                    to="/SutedentDashpored/student"
                                    className="nav-link align-middle px-0"
                                >
                                    Student
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="nav-link px-0 align-middle"
                                >
                                    <i className="fs-4 bi-table"></i>{" "}
                                    <span className="ms-1 d-none d-sm-inline">
                                        Orders
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

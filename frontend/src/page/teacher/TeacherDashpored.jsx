import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import StudentsApi from "../../servies/api/students/students";
import { useAuthContext } from "../../api/ContextAuth";
export default function TeacherDashpored() {
    const { setUser, setAuthenticated, logout, authenticated, user } =
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
        <div className="container-fluid one">
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
                                    to="/TeacherDashpored/teacher"
                                    className="nav-link align-middle px-0"
                                >
                                    teacher
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: "100%" }} className="col py-3 tow">
                    <div className="container-fluid bg-primary ">
                        <div
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={{ minHeight: "400px" }}
                        >
                            <h3 className="display-3 font-weight-bold text-white">
                                Our {user ? user.name : <></>}
                                {user ? user.fristname : <></>}
                            </h3>
                            <div className="d-inline-flex text-white">
                                <p className="m-0">
                                    <a className="text-white" href="">
                                        Home
                                    </a>
                                </p>
                                <p className="m-0 px-2">/</p>
                                <p className="m-0">Our Classes</p>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../api/ContextAuth";
import StudentsApi from "../servies/api/students/students";
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
        <div className="container-fluid one">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link
                            to="/AdminDashpored"
                            className="nav-link align-middle px-0"
                        >
                            Admin Dashpored
                        </Link>

                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li className="nav-item">
                                <Link
                                    to="/AdminDashpored/ManageParent"
                                    className="nav-link align-middle px-0"
                                >
                                    create
                                </Link>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div style={{ width: "100%" }} className="col py-3 tow">
                    {/*   <div>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        {user ? user.id : <></>}
                                    </th>
                                    <td>
                                        {user ? user.name : <></>}
                                        {user ? user.fristname : <></>}
                                    </td>
                                    <td>{user ? user.email : <></>}</td>
                                    <td>{user ? user.created_at : <></>}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

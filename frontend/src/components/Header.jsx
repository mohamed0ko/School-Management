import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../api/ContextAuth";
import StudentsApi from "../servies/api/students/students";

export default function Header() {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    const logoutColl = async () => {
        StudentsApi.logout().then(() => {
            logout();
            navigate("/login");
        });
    };

    return (
        <div>
            <div className="container-fluid bg-light position-relative shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <a
                        href="#"
                        className="navbar-brand font-weight-bold text-secondary"
                        style={{ fontSize: "50px" }}
                    >
                        <i className="flaticon-043-teddy-bear"></i>
                        <span className="text-primary">KidKinder</span>
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav font-weight-bold py-0">
                            <Link to="/" className="nav-item nav-link">
                                <i className="fa-solid fa-house"></i>&nbsp; Home
                                Page
                            </Link>
                            {user ? (
                                <></>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="nav-item nav-link"
                                    >
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                        &nbsp; Login
                                    </Link>
                                </>
                            )}
                        </div>
                        {user ? (
                            <>
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn- dropdown-toggle "
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-solid fa-user "></i>
                                        &nbsp;
                                        {user.fristname}
                                        {user.name}
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>

                                        <div className="dropdown-divider"></div>
                                        <Link
                                            onClick={logoutColl}
                                            className="nav-item nav-link"
                                        >
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            &nbsp; Logout
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

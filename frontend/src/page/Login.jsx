import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirectToDashboard } from "../App";
import { useAuthContext } from "../api/ContextAuth";
import UserApi from "../servies/api/User/UserApi";

function Login() {
    const { login, setAuthenticated, authenticated, setToken } =
        useAuthContext();
    const [error, setError] = useState({ email: "", password: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const context = useAuthContext();
    const [user, setUser] = useState({
        email: "mohamed@gmail.com",
        password: "123456789",
    });

    useEffect(() => {
        if (context.authenticated) {
            navigate("/SutedentDashpored");
        }
    }, []);

    function handlerChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setUser((prev) => {
            return { ...prev, [name]: value };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        setError({ email: "", password: "" });

        UserApi.getCsrfToken()
            .then(() => {
                return UserApi.login(user);
            })
            .then((response) => {
                const { status, data } = response;

                if (status === 200) {
                    setToken(data.token);
                    console.log(data.token);
                    setAuthenticated(true);
                    const { role } = data.user;
                    navigate(redirectToDashboard(role));
                    /*  switch (role) {
                        case "admin":
                            navigate("/AdminDashpored");
                            break;
                        case "student":
                            navigate("/SutedentDashpored");
                            break;
                        case "teacher":
                            navigate("/TeacherDashpored");
                            break;
                        case "parent":
                            navigate("/ParentDashpored");
                            break;
                        default:
                            navigate("/Login");
                            break;
                    } */
                } else {
                    const errors = data.errors || {};
                    setError({
                        email: errors.email || "",
                        password: errors.password || "",
                    });
                }
            })
            .catch((error) => {
                console.error("حدث خطأ أثناء تسجيل الدخول:", error);
                setError({
                    email: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
                    password: "kkkkk",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div style={{ width: "50%", margin: " auto" }}>
            <form onSubmit={handleSubmit} style={{ marginTop: "80px" }}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${
                            error.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={user.email}
                        onChange={handlerChange}
                        required
                    />
                    {error.email && (
                        <div className="invalid-feedback">{error.email}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={`form-control ${
                            error.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handlerChange}
                        required
                    />
                    {error.password && (
                        <div className="invalid-feedback">{error.password}</div>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Login;

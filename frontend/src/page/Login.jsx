import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../api/ContextAuth";
import StudentsApi from "../servies/api/students/students";

function Login() {
    const { login, setAuthenticated, authenticated } = useAuthContext();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        setError({ email: "", password: "" });

        try {
            await StudentsApi.getCsrfToken();

            const response = await StudentsApi.login(user);

            if (response.status === 200 || response.status === 204) {
                setAuthenticated(true);
                /* console.log(user); */
                navigate("/SutedentDashpored");
            } else {
                const errors = response.data.errors || {};
                setError({
                    email: errors.email || "",
                    password: errors.password || "",
                });
            }
        } catch (error) {
            console.error("حدث خطأ أثناء تسجيل الدخول:", error);
            setError({
                email: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
                password: "",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <form onSubmit={handleSubmit}>
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

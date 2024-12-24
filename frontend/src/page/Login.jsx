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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSubmitting) return; // منع التكرار
        setIsSubmitting(true); // تعيين حالة الإرسال

        // إعادة تعيين الأخطاء
        setError({ email: "", password: "" });

        // الحصول على رمز CSRF
        StudentsApi.getCsrfToken()
            .then(() => {
                // محاولة تسجيل الدخول
                return StudentsApi.login(user);
            })
            .then((response) => {
                const { status, data } = response;

                if (status === 200) {
                    // تحديد المصادقة
                    setAuthenticated(true);

                    // التوجيه بناءً على دور المستخدم
                    const { role } = data.user;
                    switch (role) {
                        case "admin":
                            navigate("/AdminDashpored/admin");
                            break;
                        case "student":
                            navigate("/SutedentDashpored");
                            break;
                        case "teacher":
                            navigate("/TeacherDashpored");
                            break;
                        default:
                            navigate("/Login");
                            break;
                    }
                } else {
                    // معالجة الأخطاء القادمة من الخادم
                    const errors = data.errors || {};
                    setError({
                        email: errors.email || "",
                        password: errors.password || "",
                    });
                }
            })
            .catch((error) => {
                // معالجة الخطأ في حالة الفشل
                console.error("حدث خطأ أثناء تسجيل الدخول:", error);
                setError({
                    email: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
                    password: "",
                });
            })
            .finally(() => {
                // إنهاء حالة الإرسال
                setIsSubmitting(false);
            });
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

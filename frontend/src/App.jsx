import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./api/ContextAuth";
import "./Bootstrap.min.css";
import "./index.css";
import Register from "./page/Register";
import Home from "./page/Home";
import Users from "./page/Users";
import Layout from "./router/Layout";
import Login from "./page/Login";

import AdminParentManage from "./page/admin/AdminParentManage";
import SutedentDashpored from "./page/students/SutedentDashpored";
import TeacherDashpored from "./page/teacher/TeacherDashpored";
import AdminDashpored from "./page/admin/AdminDashpored";
import ParentDashpored from "./page/parents/ParentDashpored";
import AdminSudentManage from "./page/admin/AdminSudentManage";
import AdminTeacherManage from "./page/admin/AdminTeacherManage";
import AdminCourseManage from "./page/admin/AdminCourseManage";

export const redirectToDashboard = (roleTaype) => {
    switch (roleTaype) {
        case "admin":
            return "/AdminDashpored";

        case "student":
            return "/SutedentDashpored";

        case "teacher":
            return "/TeacherDashpored";

        case "parent":
            return "/ParentDashpored";
    }
};
function App() {
    return (
        <>
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index path="/" element={<Home />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/SutedentDashpored"
                            element={<SutedentDashpored />}
                        >
                            <Route index element={<Users />} />
                            <Route index path="student" element={<Users />} />
                        </Route>
                        {/* start admin */}
                        <Route
                            path="/AdminDashpored"
                            element={<AdminDashpored />}
                        >
                            <Route index element={<Users />} />
                            <Route index path="admin" element={<Users />} />
                            <Route
                                path="ManageParent"
                                element={<AdminParentManage />}
                            />

                            <Route
                                path="ManageStudent"
                                element={<AdminSudentManage />}
                            />
                            <Route
                                path="TeacherManage"
                                element={<AdminTeacherManage />}
                            />
                            <Route
                                path="CourseManage"
                                element={<AdminCourseManage />}
                            />
                        </Route>

                        {/* end admin */}
                        {/*  start teacher */}
                        <Route
                            path="/TeacherDashpored"
                            element={<TeacherDashpored />}
                        >
                            <Route index element={<Users />} />
                            <Route index path="teacher" element={<Users />} />
                        </Route>
                        {/*  end teacher  */}
                        {/*  end parents  */}
                        <Route
                            path="/ParentDashpored"
                            element={<ParentDashpored />}
                        >
                            <Route index element={<Users />} />
                            <Route index path="parent" element={<Users />} />
                        </Route>
                        {/*  end parents  */}
                    </Route>
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;

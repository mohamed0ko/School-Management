import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./api/ContextAuth";
import "./Bootstrap.min.css";
import "./index.css";
import Register from "./page/Register";
import Home from "./page/Home";
import Users from "./page/Users";
import Layout from "./router/Layout";
import Login from "./page/Login";

import AdminParentList from "./page/admin/AdminParentList";
import AdminParentManage from "./page/admin/AdminParentManage";
import SutedentDashpored from "./page/students/SutedentDashpored";
import TeacherDashpored from "./page/teacher/TeacherDashpored";
import AdminDashpored from "./page/admin/AdminDashpored";
import AdminParentUpserForm from "./page/admin/AdminParentUpserForm";

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
                            >
                                <Route index element={<AdminParentList />} />
                                <Route
                                    path="ParentCreate"
                                    element={<AdminParentUpserForm />}
                                />
                                <Route
                                    path="ListParent"
                                    element={<AdminParentList />}
                                />
                            </Route>
                        </Route>

                        {/* end admin */}
                        <Route
                            path="/TeacherDashpored"
                            element={<TeacherDashpored />}
                        >
                            <Route index element={<Users />} />
                            <Route index path="teacher" element={<Users />} />
                        </Route>
                    </Route>
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;

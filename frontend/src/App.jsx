import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./api/ContextAuth";
import "./Bootstrap.min.css";
import Register from "./page/Register";
import Home from "./page/Home";
import Users from "./page/Users";
import Layout from "./router/Layout";
import Login from "./page/Login";
import SutedentDashpored from "./page/SutedentDashpored";
import AdminDashpored from "./page/AdminDashpored";
import TeacherDashpored from "./page/TeacherDashpored";
import ParentCreate from "./page/ParentCreate";
import ManageParent from "./page/ManageParent";
import ListParent from "./page/ListParent";

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
                                element={<ManageParent />}
                            >
                                <Route index element={<ListParent />} />
                                <Route
                                    path="ParentCreate"
                                    element={<ParentCreate />}
                                />
                                <Route
                                    path="ListParent"
                                    element={<ListParent />}
                                />
                            </Route>
                        </Route>

                        {/* end admin */}
                        <Route
                            path="/TeacherDashpored"
                            element={<TeacherDashpored />}
                        >
                            <Route index path="teacher" element={<Users />} />
                        </Route>
                    </Route>
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;

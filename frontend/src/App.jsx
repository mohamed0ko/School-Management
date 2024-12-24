import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./api/ContextAuth";
/* import "./Bootstrap.min.css"; */
import Register from "./page/Register";
import Home from "./page/Home";
import Users from "./page/Users";
import Layout from "./router/Layout";
import Login from "./page/Login";
import SutedentDashpored from "./page/SutedentDashpored";

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
                            <Route index path="student" element={<Users />} />
                        </Route>
                    </Route>
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;

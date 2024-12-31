import { createContext, useContext, useEffect, useState } from "react";
import { axiosClient } from "./axios";
import { useNavigate } from "react-router-dom";
import StudentsApi from "../servies/api/students/students";

export const AuthContext = createContext({
    user: {},
    authenticated: false,
    setUser: () => {},
    logout: () => {},
    setAuthenticated: () => {},
    setToken: () => {},
    login: (user) => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authenticated, _setAuthenticated] = useState(
        "true" === window.localStorage.getItem("AUTHENTICATED")
    );
    const login = async (user) => {
        await StudentsApi.getCsrfToken();
        return StudentsApi.login(user);
    };

    const logout = () => {
        setUser();
        setAuthenticated(false);
    };
    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", isAuthenticated);
    };
    const setToken = (token) => {
        window.localStorage.setItem("token", token);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                setToken,
                setAuthenticated,
                authenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

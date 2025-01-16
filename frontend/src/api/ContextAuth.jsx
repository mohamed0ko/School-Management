import { createContext, useContext, useState } from "react";
import UserApi from "../servies/api/User/UserApi";
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
        await UserApi.getCsrfToken();
        return UserApi.login(user);
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

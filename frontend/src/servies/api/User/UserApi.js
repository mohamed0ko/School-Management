import { axiosClient } from "../../../api/axios";

const UserApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL,
        });
    },
    login: async (user) => {
        return await axiosClient.post("/login", user);
    },
    logout: async () => {
        return await axiosClient.post("/logout");
    },

    getUser: async () => {
        return await axiosClient.get("/api/me");
    },
};
export default UserApi;

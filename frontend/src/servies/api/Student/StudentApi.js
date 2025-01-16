import { axiosClient } from "../../../api/axios";

const StudentApi = {
    all: async () => {
        return await axiosClient.get("/api/admin/student");
    },
    delete: async (id) => {
        return await axiosClient.delete(`/api/admin/student/${id}`);
    },
    create: async (payload) => {
        return await axiosClient.post("/api/admin/student", payload);
    },
    update: async (id, payload) => {
        return await axiosClient.put(`/api/admin/student/${id}`, payload);
    },
};
export default StudentApi;

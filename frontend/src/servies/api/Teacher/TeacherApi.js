import { axiosClient } from "../../../api/axios";

const TeacherApi = {
    all: async () => {
        return await axiosClient.get("/api/admin/teacher");
    },
    create: async (payload) => {
        return await axiosClient.post("/api/admin/teacher", payload);
    },
    delete: async (id) => {
        return await axiosClient.delete(`/api/admin/teacher/${id}`);
    },
    update: async (id, payload) => {
        return await axiosClient.put(`/api/admin/teacher/${id}`, payload);
    },
};
export default TeacherApi;

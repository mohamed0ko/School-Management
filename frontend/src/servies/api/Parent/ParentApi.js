import { axiosClient } from "../../../api/axios";

const ParentApi = {
    create: async (payload) => {
        return await axiosClient.post("/api/admin/parent", payload);
    },

    all: async () => {
        return await axiosClient.get("/api/admin/parent");
    },
    update: async (id, payload) => {
        return await axiosClient.put(`/api/admin/parent/${id}`, payload);
    },
    delete: async (id) => {
        return await axiosClient.delete(`/api/admin/parent/${id}`);
    },
};
export default ParentApi;

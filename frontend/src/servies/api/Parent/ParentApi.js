import { axiosClient } from "../../../api/axios";

const ParentApi = {
    create: async (payload) => {
        return await axiosClient.post("/api/admin/parent", payload);
    },

    all: async (columns = []) => {
        return await axiosClient.get("/api/admin/parent");
        params: {
            columns: columns;
        }
    },
    update: async (id, payload) => {
        return await axiosClient.put(`/api/admin/parent/${id}`, payload);
    },
    delete: async (id) => {
        return await axiosClient.delete(`/api/admin/parent/${id}`);
    },
};
export default ParentApi;

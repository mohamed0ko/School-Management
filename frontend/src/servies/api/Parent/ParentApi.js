import { axiosClient } from "../../../api/axios";

const ParentApi = {
    create: async (payload) => {
        return await axiosClient.post("/api/admin/parent", payload);
    },
    all: async () => {
        return await axiosClient.get("/api/admin/parent");
    },
    delete: async (id) => {
        return await axiosClient.delete(`/api/admin/parent/${id}`);
    },
};
export default ParentApi;

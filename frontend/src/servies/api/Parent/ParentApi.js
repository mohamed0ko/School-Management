import { axiosClient } from "../../../api/axios";

const ParentApi = {
    create: async (payload) => {
        return await axiosClient.post("/api/admin/parent", payload);
    },
    all: async () => {
        return await axiosClient.get("/api/admin/parent");
    },
};
export default ParentApi;

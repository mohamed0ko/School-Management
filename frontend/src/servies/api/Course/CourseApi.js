import { axiosClient } from "../../../api/axios";

const CourseApi = {
    all: async () => {
        return await axiosClient.get("api/admin/course");
    },
    create: async (payload) => {
        return await axiosClient.post("api/admin/course", payload);
    },
    update: async (id, payload) => {
        return await axiosClient.put(`api/admin/course/${id}`, payload);
    },
    delete: async (id) => {
        return await axiosClient.delete(`api/admin/course/${id}`);
    },
};
export default CourseApi;

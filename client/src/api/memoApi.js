import { axiosClient } from "./axiosClient";

const memoApi = {
  create: () => axiosClient.post("memo"),
  getAll: () => axiosClient.get("memo"),
  getOne: (memoId) => axiosClient.get(`memo/${memoId}`),
  update: (memoId, param) => axiosClient.put(`memo/${memoId}`, param),
  delete: (memoId) => axiosClient.delete(`memo/${memoId}`),
};

export default memoApi;

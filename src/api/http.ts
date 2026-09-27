import axios, { type AxiosInstance } from "axios";

export const linktreeClient = (): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
  });
};

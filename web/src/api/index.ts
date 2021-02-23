import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  validateStatus: (status: number) => status >= 200 && status < 530,
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://negobot.com.br",
  validateStatus: false,
});

export default api;

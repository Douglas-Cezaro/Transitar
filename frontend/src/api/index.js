import axios from "axios";

const api = axios.create({
  baseURL: "http://negobot.com.br/",
});

export default api;

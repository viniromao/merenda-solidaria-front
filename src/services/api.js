import axios from "axios";

const api = axios.create({
  baseURL: "https://appmerenda.herokuapp.com/",
});

export default api;

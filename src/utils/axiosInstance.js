import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // 👈 important to send cookies automatically
});

export default axiosInstance;

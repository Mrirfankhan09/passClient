import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://passserver.onrender.com",
  withCredentials: true, // 👈 important to send cookies automatically
});

export default axiosInstance;

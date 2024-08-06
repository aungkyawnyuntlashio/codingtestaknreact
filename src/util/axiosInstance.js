import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("codingtesttoken");
    if (token) {
      config.headers["x-access-token"] = token || '';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("codingtesttoken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
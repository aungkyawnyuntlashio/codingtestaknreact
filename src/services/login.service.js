import axiosInstance from "../util/axiosInstance";

export const loginService = async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
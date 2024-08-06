import axiosInstance from "../util/axiosInstance";

export const createPostService = async (data) => {
  try {
    const response = await axiosInstance.post("/post", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPostService = async () => {
  try {
    const response = await axiosInstance.get("/post");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updatePostService = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/post/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePostService = async (id) => {
    try {
      const response = await axiosInstance.delete(`/post/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

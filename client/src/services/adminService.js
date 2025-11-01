import { axiosInstance } from "../axios/axiosinstance";

// Update product
export const updateProduct = (productId, formData) => {
  return axiosInstance.put(`/product/update/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};


export const verifyUser = () => {
  return axiosInstance.get("/auth/check");
};

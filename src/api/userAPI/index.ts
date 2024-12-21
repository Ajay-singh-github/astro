import { api } from "../../config/axiosConfig";
import { defineCancelApiObject } from "../../utils/axiosUtils";
const cancelApiObject = defineCancelApiObject(api);
export const USERS = {
  Login: async (data: any, cancel = false) => {
    const response = await api.request({
      url: "users/login",
      method: "POST",
      data: {
        email: data.email,
        password: data.password,
      },
      signal: cancel
        ? cancelApiObject.PostLogin.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  SignUp: async (data: any, cancel = false) => {
    const response = await api.request({
      url: "users/signup",
      method: "POST",
      data: data,
      signal: cancel
        ? cancelApiObject.PostLogin.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  ForgotPassword: async (data: any, cancel = false) => {
    const response = await api.request({
      url: "users/login",
      method: "POST",
      data: { email: data.email },
      signal: cancel
        ? cancelApiObject.PostLogin.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  GetUsers: async (cancel = false) => {
    const response = await api.request({
      url: "/users/getAllUsers",
      method: "GET",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.Get.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },

  QUERY: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/users/search?query=${data.query}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.UpdateProfile.handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },

  GetUserByID: async (data: any, cancel = false) => {
    console.log(data);
    const response = await api.request({
      url: `/users/${data}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.GetById.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  UpdateProfile: async (data: any, cancel = false) => {
    console.log(data);
    const response = await api.request({
      url: `/users/update-profile?userId=${data.id}`,
      method: "POST",
      data: data.form,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.GetById.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  Update: async (data: any, cancel = false) => {
    console.log(data);
    const response = await api.request({
      url: `/users/update?userId=${data.id}`,
      method: "PATCH",
      data: data,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.GetById.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  Delete: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/users/delete?id=${data}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
      signal: cancel
        ? cancelApiObject.Delete.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};


export const VITE_API_KEY="9d50bf50-1a92-507d-b96f-f49bde06999f"

// server side processing

"use client";
import { login, register, whoami } from "../api/auth";
import { setAuthToken, setUserData } from "../cookie";
export const handleRegister = async (formData: any) => {
  try {
    //how data sent from component to backend api
    const res = await register(formData);
    //component return logic
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: "Registration Successful",
      };
    }
    return { success: false, message: res.message || "Registration Failed" };
  } catch (err: Error | any) {
    return { success: false, message: err.message || "Registration Failed" };
  }
};

export const handleLogin = async (formData: any) => {
  try {
    //how data sent from component to backend api
    const res = await login(formData);
    //component return logic
    if (res.success) {
      await setAuthToken(res.token);
      await setUserData(res.data);
      return {
        success: true,
        data: res.data,
        message: "Login Successful",
      };
    }
    return { success: false, message: res.message || "Login Failed" };
  } catch (err: Error | any) {
    return { success: false, message: err.message || "Login Failed" };
  }
};

export const handleWhoAmI = async () => {
  try {
    const res = await whoami();
    if (res.success) {
      return { success: true, data: res.data };
    }
    return { success: false, message: res.message || "Failed to fetch user" };
  } catch (err: Error | any) {
    return { success: false, message: err.message || "Failed to fetch user" };
  }
};

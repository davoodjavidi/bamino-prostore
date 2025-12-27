import { email } from "zod";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "ProStore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_NAME || "A Modern Eccommerce Store";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000/";

export const signInDefaultValues = {
  email: "admin@gmail.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

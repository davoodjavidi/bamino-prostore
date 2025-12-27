"use server";

import { headers } from "next/headers";
import { auth } from "../auth/auth";
import { signInFormSchema, signUpFormSchema } from "../validators";

// sign in
export async function SignIn(prevState: unknown, formData: FormData) {
  const user = signInFormSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const { email, password } = user;
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
        callbackURL: "http://localhost:3000/",
      },
    });
    return { success: true, message: "ورود با موفقیت انجام شد" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "اطلاعات وارد شده صحیح نیست" };
  }
}

// sign-up
export async function SignUp(prevState: unknown, formData: FormData) {
  const user = signUpFormSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const { name, email, password } = user;

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: "http://localhost:3000/",
      },
    });
    return { success: true, message: "ثبت نام با موفقیت انجام شد" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "مشکلی در ثبت نام شما بوجود آمد" };
  }
}

// sign-out
export async function SignOut() {
  await auth.api.signOut({
    // This endpoint requires session cookies.
    headers: await headers(),
  });
}

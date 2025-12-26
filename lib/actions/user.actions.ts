"use server";

import { headers } from "next/headers";
import { auth } from "../auth/auth";
import { signInFormSchema } from "../validators";

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
        callbackURL: "http://localhost:3000/signINNNNN",
      },
    });
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Invalid Email or Password" };
  }
}

// sign-out
export async function SignOut() {
  await auth.api.signOut({
    // This endpoint requires session cookies.
    headers: await headers(),
  });
}

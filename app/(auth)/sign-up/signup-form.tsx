"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignIn, SignUp } from "@/lib/actions/user.actions";
import { signUpDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";

const SignUpForm = () => {
  const [data, action, pending] = useActionState(SignUp, {
    success: false,
    message: "",
  });

  return (
    <form action={action}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="mb-2">
            نام و نام خانوادگی
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={signUpDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">
            آدرس ایمیل
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signUpDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2">
            رمز عبور
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signUpDefaultValues.password}
          />
        </div>
        <div>
          <Button variant="default" className="w-full" disabled={pending}>
            {pending ? "در حال ثبت نام" : "ثبت نام"}
          </Button>
        </div>

        {data && !data.success && (
          <p className="text-destructive text-center text-sm">{data.message}</p>
        )}
        <div className="text-sm text-muted-foreground flex justify-around items-center">
          <span>حساب کاربری ندارید؟</span>
          <Button asChild variant="link">
            <Link href="/sign-up" className="text-sm" target="_self">
              ثبت نام کنید
            </Link>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

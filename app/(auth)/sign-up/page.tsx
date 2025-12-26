import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./signup-form";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader className="space-y-2">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt={`${APP_NAME} logo`}
              priority={true}
            />
          </Link>
          <CardTitle className="text-center">ثبت نام</CardTitle>
          <CardDescription className="text-center">
            اطلاعات خود را برای ثبت نام وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        height={48}
        width={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 text-center w-1/3">
        <h1 className="text-2xl font-bold mb-4">تو بیراهه رفتی!</h1>
        <p className="text-destructive">صفحه مورد نظرت یافت نشد</p>
        <Button variant="outline" asChild className="mt-4">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </Button>
      </div>
    </div>
  );
}

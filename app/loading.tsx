import { Spinner } from "@/components/ui/spinner";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/logo.svg"
        height={30}
        width={30}
        alt={APP_NAME}
        className="animate-bounce"
      />
      {/* <Spinner className="size-8 text-yellow-500" /> */}
    </div>
  );
}

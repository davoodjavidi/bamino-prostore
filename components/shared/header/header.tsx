import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start space-x-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={38}
              width={38}
              priority={true}
            />
            <div className="flex flex-col">
              <span className="text-md font-bold sm:text-lg">{APP_NAME}</span>
              <span className="text-xs mr-2 font-semibold text-foreground/60">
                نماد کیفیت و اعتماد
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;

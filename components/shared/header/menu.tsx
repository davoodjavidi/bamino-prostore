import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

export default function Menu() {
  return (
    <div>
      <nav className="hidden md:flex w-full gap-1">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>منو</SheetTitle>
              <SheetDescription>این توضیح منو است</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col p-5 space-y-4">
              <Button variant="link">تماس بگیرید</Button>
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart /> سبد خرید
                </Link>
              </Button>
              <UserButton />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

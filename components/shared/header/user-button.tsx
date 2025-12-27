import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOut } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth/auth";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { UserIcon } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const UserButton = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const getInitials = session?.user.name
    .trim()
    .split(" ")
    .map((w) => w[0] || "")
    .join("");

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> ورود
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{getInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm">{session.user.name}</span>
            <span className="text-xs text-muted-foreground">
              {session.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-0">
          <form action={SignOut}>
            <Button variant="ghost" className="p-0" size="sm">
              خروج
            </Button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

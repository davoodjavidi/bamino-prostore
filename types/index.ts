import { z } from "zod";
import { insertProductSchmea } from "@/lib/validators";
import { Prisma } from "@/app/generated/prisma/client";

export type Product = z.infer<typeof insertProductSchmea> & {
  id: string;
  rating: Prisma.Decimal;
  createdAt: Date;
};

"use server";

import prisma from "../prisma";
import { convertToPlainObject } from "../utils";

// get latest 4 products from products table
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}

// get single product by slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
  });
  return product;
}

import { z } from "zod";

// schema for inserrting product
export const insertProductSchmea = z.object({
  name: z.string().min(3, "نام حداقل باید ۳ کاراکتر باشد"),
  slug: z.string().min(3, "اسلاگ حداقل باید ۳ کاراکتر باشد"),
  category: z.string().min(3, "دسته بندی را به درستی وارد کنید"),
  brand: z.string().min(3, "برند را به درستی وارد کنید"),
  description: z.string().min(3, "توضیحات را به درستی وارد کنید"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "product must have an image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: z.coerce.number(),
});

// schema for user sign-in
export const signInFormSchema = z.object({
  email: z.email("آدرس ایمیل صحیح نیست"),
  password: z.string().min(6, "پسوورد باید حداقل ۶ کاراکتر باشد"),
});

// schema for user sign-up
export const signUpFormSchema = z.object({
  name: z.string().min(4, "نام و نام خانوادگی باید حداقل ۴ کاراکتر باشد"),
  email: z.email("آدرس ایمیل صحیح نیست"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

import type { Metadata } from "next";
import { peydaFont } from "@/lib/fonts";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    template: "%s | Prostore",
    default: APP_NAME, // a default is required when creating a template
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${peydaFont.className}  antialiased`}>{children}</body>
    </html>
  );
}

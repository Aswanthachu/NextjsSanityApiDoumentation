import { SideBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "KKS API Docs",
  description: "This is the website for KKS Capitals Api documentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex" suppressHydrationWarning={true}>
          <SideBar />
          <div className="w-full ml-[250px]" suppressHydrationWarning={true}>{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Header from './header';
import "./bootstrap.css";
import "./global.css";

export const metadata: Metadata = {
  title: "TDW",
  description: "TDW Website in Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="nonStckyHdr">
      <div className="ps-page ps-layout">
        {children}
        </div>
      </body>
    </html>
  );
}

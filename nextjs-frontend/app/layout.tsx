import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReadioPlayer from "./readio-components/essentials/readio-player";
import { ReadioMainProvider } from "./hooks/playingContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Readio",
  description: "Created by Itwela Ibomu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>    
        <html lang="en" className="">
          <ReadioMainProvider>
            <body className={inter.className}>{children}</body>
          </ReadioMainProvider>
        </html>
    </>
  );
}

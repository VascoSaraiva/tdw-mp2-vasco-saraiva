import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Provider from "@/components/authentication/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelling App",
  description: "Create and share travel itineraries and place recomendations.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>

      </body>
    </html>
  );
}

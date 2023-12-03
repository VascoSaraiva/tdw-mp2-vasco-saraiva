import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Provider from "@/components/auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelling App",
  description: "Create and share travel itineraries and place recomendations.",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600"],
  variable: "--font-poppins",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

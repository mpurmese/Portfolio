import { Inter } from "next/font/google";
import "@/css/globals.css"
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehmet Pürmeşe",
  description: "Mehmet Pürmeşe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  
          <Header />
          {children}
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify online store",
  description: "Shopify online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header />
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
          </div>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

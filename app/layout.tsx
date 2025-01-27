import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WalletProvider } from './WalletProvider';
import ContextComponent from "@/app/utilities";
import { headers } from "next/headers";

// Define fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Fipcoin",
  description: "Fipcoin",
};

// Function to get cookies
function getCookies() {
  const headersData = headers(); // Fetch headers on the server-side
  return headersData.get("cookie") || null;
}

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get cookies using the server-side function
  const cookies = getCookies(); // Fetch cookies here

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletProvider cookies={cookies}>
          <ContextComponent>
            {children}
          </ContextComponent>
        </WalletProvider>
      </body>
    </html>
  );
}

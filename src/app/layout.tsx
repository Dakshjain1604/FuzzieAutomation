
import type { Metadata } from "next";
import { ThemeProvider } from "../Providers/theme-provider"
import { DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({
  subsets: ["latin"],
});

const geistMono = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuzzie ",
  description: "Automates your work with fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}

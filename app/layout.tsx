import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";

const prompt = localFont({
  src: [
    {
      path: "./fonts/Prompt-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Prompt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Clote",
  description: "Note course work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={prompt.variable}
      >
        {children}
      </body>
    </html>
  );
}

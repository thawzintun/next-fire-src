"use client";
import NavBar from "./_components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className={inter.className}>
                <AuthContextProvider>
                    <NavBar />
                    {children}
                </AuthContextProvider>
            </body>
        </html>
    );
}

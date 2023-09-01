"use client";
import Image from "next/image";
import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ImgSlide from "../_components/ImgSlide";
import LoginForm from "../_components/LoginForm";
import PasswordResetForm from "../_components/PasswordResetForm";

const page = () => {
    return (
        <section className=" w-full flex flex-col mt-10 items-center justify-center">
            <div className="border-2 grid grid-cols-5 rounded-md w-2/3 mb-6">
                <div className="px-10 py-12 col-start-2 col-span-3 flex flex-col text-center">
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="mb-7 "
                        width={100}
                        height={24}
                        priority
                    />
                    <div className="text-start mb-8">
                        <h1 className="font-medium text-2xl">
                            Send Password Reset Link
                        </h1>
                    </div>
                    <PasswordResetForm />
                </div>
            </div>
        </section>
    );
};

export default page;

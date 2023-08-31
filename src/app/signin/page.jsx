"use client";
import Image from "next/image";
import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import ImgSlide from "../_components/ImgSlide";
import LoginForm from "../_components/LoginForm";

const page = () => {
    return (
        <section className=" w-full flex flex-col mt-10 items-center justify-center">
            <div className="border-2 grid grid-cols-5 rounded-md w-2/3 mb-6">
                <Splide
                    options={{
                        autoplay: true,
                        type: "loop",
                        interval: 4000,
                        pauseOnHover: false,
                        fixedHeight: "600px",
                    }}
                    className="border-r-2 col-span-3"
                >
                    <ImgSlide />
                </Splide>
                <div className="px-10 py-12 col-span-2 flex flex-col text-center">
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="mb-7 "
                        width={100}
                        height={24}
                        priority
                    />
                    <div className="text-start mb-8">
                        <h1 className="font-medium text-2xl">Sign In</h1>
                    </div>
                    <LoginForm />
                </div>
            </div>
            <div className="flex">
                <p>
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-400">
                        Sign Up Now
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default page;

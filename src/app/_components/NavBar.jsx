import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-5 border-b-2">
            <div className=" relative flex place-items-center before:absolute ">
                <Link href={"/"}>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className=""
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </div>
            <div className="z-10 font-mono text-sm">
                <div className="">
                    <Link
                        href={"/signin"}
                        className="border-2 border-blue-500 px-3 py-2 text-md rounded-md text-blue-500"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

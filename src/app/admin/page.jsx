"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import logOut from "@/firebase/auth/signout";
function Page() {
    const { user } = useAuthContext();
    const router = useRouter();

    React.useEffect(() => {
        if (user == null) router.push("/");
    }, [user]);

    const logoutHandler = async () => {
        const { result, error } = await logOut();
        if (error) {
            return console.log(error);
        }
    };
    return (
        <>
            <h1>Successfully LoggedIn.</h1>
            <button onClick={logoutHandler}>Log Out</button>
        </>
    );
}

export default Page;

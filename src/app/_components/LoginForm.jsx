import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/admin");
    };
    return (
        <>
            <form onSubmit={handleForm} className="flex flex-col gap-8">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-2 py-2 outline outline-slate-200 focus:outline-none bg-slate-50 rounded-sm"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="px-2 py-2 outline outline-slate-200 focus:outline-none bg-slate-50 rounded-sm"
                />
                <button
                    type="submit"
                    className="px-2 py-3 bg-blue-500 text-white rounded-md"
                >
                    Login
                </button>
            </form>
            <Link href={"/resetpassword"} className="my-6 text-blue-400">
                Forgot Password?
            </Link>
            <hr className="mb-6" />
            <p className="mb-1">Sign in using</p>
            <div className="flex gap-3 justify-center">
                <div className="border rounded-md p-3 w-fit">
                    <img src="/Google.svg" width={20} alt="Google" />
                </div>
                <div className="bg-[#039BE5] border rounded-md p-3 w-fit">
                    <img src="/facebook.svg" width={20} alt="Facebook" />
                </div>
            </div>
        </>
    );
};

export default LoginForm;

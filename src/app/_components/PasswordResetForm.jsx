import React from "react";
import { useRouter } from "next/navigation";
import passwordReset from "@/firebase/auth/passwordreset";

const PasswordResetForm = () => {
    const [email, setEmail] = React.useState("");
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await passwordReset(email);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/signin");
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
                <button
                    type="submit"
                    className="px-2 py-3 bg-blue-500 text-white rounded-md"
                >
                    Send
                </button>
            </form>
        </>
    );
};

export default PasswordResetForm;

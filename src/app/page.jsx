import Image from "next/image";

export default function Home() {
    return (
        <main className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <section className="">
                <Image
                    className=""
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={200}
                    height={37}
                    priority
                />
            </section>
        </main>
    );
}

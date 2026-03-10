import Image from "next/image";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
    <Header />
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-700 dark:text-white sm:text-7xl">
          Welcome to <span className="text-blue-600">Jenkins</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 dark:text-gray-300">
          App version: 1.0.2
        </p>
      </main>
    </div>
    </>
  );
}

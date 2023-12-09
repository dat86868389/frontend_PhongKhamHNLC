import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/layouts/pages/user-screen/HomePage";

export default function Home() {
  return (
    <main className="bg-slate-400">
      <HomePage />
    </main>
  );
}

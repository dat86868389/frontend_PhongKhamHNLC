import Image from "next/image";
import LayoutUser from "@/layouts/components/LayoutUser";
import { Inter } from "next/font/google";
import HomePage from "@/layouts/pages/user-screen/HomePage";

export default function Home() {
  return (
      <HomePage />
  );
}

Home.getLayout = function getLayout(page) {
  return <LayoutUser>{page}</LayoutUser>;
};

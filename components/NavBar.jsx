"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className=" sticky w-full container mx-auto z-10 md:p-0 px-10 ">
      <nav className="w-full  py-4 flex justify-between items-center">
        <Link
          href={"/"}
          className=" flex justify-center items-center cursor-pointer"
        >
          <Image src={"/logo.svg"} alt={"logo"} width={118} height={18} />
        </Link>
        <CustomButton
          title={"Sign In"}
          hover={"hover:bg-[#3b3c98] hover:text-white"}
          styleContainer={
            "py-1 px-4  rounded-full bg-primary-blue text-white  text-white"
          }
          btnType={"button"}
        />
      </nav>
    </header>
  );
};

export default NavBar;

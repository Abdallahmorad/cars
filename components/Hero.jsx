"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className=" container mx-auto xl:flex xl:justify-between">
      <div className=" pt-36  xl:w-[48%]">
        <h1 className=" text-[60px] font-bold ">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className=" text-[28px] text-gray-500">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* custom button */}
        <CustomButton
          btnType="button"
          title="ExPlore Cars"
          styleContainer="py-2 px-4 bg-[#2b59fb] text-white rounded-full mt-2"
          handleClick={handleScroll}
        />
      </div>
      {/* images */}
      <div className=" flex xl:w-[48%] overflow-hidden ">
        <div className="relative w-full  h-[590px] flex justify-end items-end ">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            sizes="
            (max-width: 768px) 100vw"
            priority
          />
          <div className=" absolute top-[-10px] right-[-120px]   w-full h-full xl:h-[1100px] xl:top-[-350px] xl:w-[1000px] xl:right-[-400px] z-[-1]">
            <Image
              src="/hero-bg.png"
              alt="hero"
              fill
              className=" object-contain"
              sizes="
            (max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

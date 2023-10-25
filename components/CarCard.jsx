"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarModal from "./CarModal";
import { generateImageUrl } from "@/utils";

const CarCard = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card bg-[#f4f9fe] w-full p-3  rounded-lg relative">
      <h2 className=" text-xl capitalize">
        {car.make} {car.model}{" "}
      </h2>
      <p className="flex gap-1 my-2">
        <span className=" self-start">$</span>
        <span className=" font-extrabold text-2xl">54</span>
        <span className=" self-end">/day</span>
      </p>

      <div className=" relative w-full flex justify-center h-40">
        <Image
          src={generateImageUrl(car)}
          alt="car model"
          fill
          priority
          className=" object-contain"
          sizes="
            (max-width: 768px) 100vw"
        />
      </div>

      <div className=" flex justify-between items-center my-3">
        <div className=" flex flex-col justify-center items-center gap-1 ">
          <Image src={"/steering-wheel.svg"} alt="" width={20} height={20} />
          <div>{car.transmission === "a" ? "Automatic" : "Manual"}</div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-1 ">
          <Image src={"/tire.svg"} alt="" width={20} height={20} />
          <div>{car.drive.toUpperCase()}</div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-1 ">
          <Image
            src={"/gas.svg"}
            alt=""
            width={20}
            height={20}
            className=" object-contain w-auto h-auto"
            sizes="
            (max-width: 768px) 100vw"
          />
          <div>{car.city_mpg} MPG</div>
        </div>
      </div>

      <div className="btn absolute bottom-[26px] left-0 w-full">
        <CustomButton
          title={"View More"}
          styleContainer={
            "bg-primary-blue text-white py-3 px-4 rounded-full w-full text-center"
          }
          btnType={"button"}
          handleClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <CarModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      )}
    </div>
  );
};

export default CarCard;

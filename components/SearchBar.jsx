"use client";
import React, { useState } from "react";
import SearchManuFracturer from "./SearchManuFracturer";
import Image from "next/image";


const SearchButton = ({ otherClasses }) => {
  return (
    <button
      type="submit"
      className={` absolute top-1 right-2 ${otherClasses} `}
    >
      <Image
        src={"/magnifying-glass.svg"}
        alt="search"
        width={30}
        height={30}
        className="object-contain"
      />
    </button>
  );
};
const SearchBar = ({setManuFracturer,setModel}) => {
  const [searchModel, setSearchModel] = useState("");
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert(" please provide some input");
    }

    setModel(searchModel);
    setManuFracturer(searchManufacturer);

  };

  // const updateSearchParam = (model, manuFracturer) => {
  //   const searchParam = new URLSearchParams(window.location.search);

  //   if (model) {
  //     searchParam.set("model", model);
  //   } else {
  //     searchParam.delete("model");
  //   }

  //   if (manuFracturer) {
  //     searchParam.set("manuFracturer", manuFracturer);
  //   } else {
  //     searchParam.delete("manuFracturer");
  //   }

  //   const newPathname = `${window.location.pathname}?${searchParam.toString()}`;
  //   router.push(newPathname);
  // };
  return (
    <form onSubmit={handleSearch} className="md:flex w-full items-center">
      <div>
        <SearchManuFracturer
          manuFracturer={searchManufacturer}
          setManuFracturer={setSearchManufacturer}
        />
      </div>
      <div className="relative ">
        <Image
          src={"/model-icon.png"}
          alt="model-s"
          width={25}
          height={25}
          className="object-contain  absolute top-2 left-2 w-[20px] h-[20px]  "
        />
        <input
          type="text"
          className=" bg-[#fbfbfb] p-2 w-full focus:outline-none rounded-e-lg px-10 "
          placeholder="Tiguan"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;

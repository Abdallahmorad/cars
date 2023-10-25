"use client";
import { manufacturers } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";

const SearchManuFracturer = ({ manuFracturer, setManuFracturer }) => {
  const [query, setQuery] = useState("");

  const filteredManuFactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div>
      <Combobox value={manuFracturer} onChange={setManuFracturer}>
        <div className="relative w-full my-4">
          <Combobox.Button className="absolute top-[10px] left-2 ">
            <Image src={"/car-logo.svg"} alt="" width={20} height={20} />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Volkswagen"
            className={
              "  bg-[#fbfbfb] px-10 h-full focus:outline-none p-2 w-full  rounded-s-lg"
            }
            displayValue={(car) => car}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className={"p-2 bg-gray-100  absolute left-0 top-10 z-10 w-full"}>
              {filteredManuFactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "bg-white"
                    }`
                  }
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManuFracturer;

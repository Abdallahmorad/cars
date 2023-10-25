"use client";
import { generateImageUrl } from "@/utils";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const CarModal = ({ isOpen, closeModal, car }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md relative transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="  flex justify-end absolute top-3 z-20 right-3 ">
                    <button
                      type="button"
                      className="inline-flex justify-center w-[35px] h-[35px] text-sm rounded-full border border-transparent bg-blue-100 p-2  font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <Image
                        src={"/close.svg"}
                        alt="close"
                        className="object-contain"
                        width={40}
                        height={40}
                      />
                    </button>
                  </div>
                  {/* single image */}
                  <div className=" relative w-full flex justify-center h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={generateImageUrl(car)}
                      alt="car model"
                      fill
                      priority
                      className=" object-contain"
                    />
                  </div>
                  {/* multiple image */}
                  <div className="w-full flex  justify-between  items-center h-24 rounded-lg">
                    <div className="relative w-[30%]  h-full">
                      <Image
                        src={generateImageUrl(car, "29")}
                        alt="steering wheel"
                        fill
                        priority
                        className=" object-contain"
                        sizes=""
                      />
                    </div>
                    <div className=" relative w-[30%]  h-full">
                      <Image
                        src={generateImageUrl(car, "33")}
                        alt="steering wheel"
                        fill
                        priority
                        className=" object-contain"
                        sizes="
                        "
                      />
                    </div>
                    <div className=" relative w-[30%]  h-full">
                      <Image
                        src={generateImageUrl(car, "13")}
                        alt="steering wheel"
                        fill
                        priority
                        className=" object-contain"
                        sizes=""
                      />
                    </div>
                  </div>
                  <div className=" flex flex-1 flex-col gap-2 ">
                    <h2 className=" text-2xl font-semibold">
                      {car.make} {car.model}
                    </h2>
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex  justify-between my-2 text-gray-500"
                      >
                        <h4 className=" capitalize">{key}</h4>
                        <p className=" capitalize">{value}</p>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarModal;

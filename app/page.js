"use client";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manuFracturer, setManuFracturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //limit state
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const cars = await fetchCars({
          manufacturer: manuFracturer || "",
          year: year || 2022,
          fuel: fuel || "",
          limit: limit || 10,
          model: model || "",
        });
        setAllCars(cars);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getCars();
  }, [fuel, limit, manuFracturer, model, year]);

  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });
  console.log(allCars);
  // const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="md:p-0 p-10 container mx-auto ">
      <Hero />
      <div className=" p-3">
        <h1 className=" text-3xl ">Car Catalogue</h1>
        <p className=" text-gray-400 my-2">Explore The Cars Ypu Might Like </p>
        <div className=" md:flex justify-between items-center">
          <SearchBar setManuFracturer={setManuFracturer} setModel={setModel} />
          <div className=" flex gap-4 items-center">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars ?(
          <>
            <section className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4  ">
              {allCars?.map((car) => (
                <CarCard key={car.class} car={car} />
              ))}
            </section>

            <ShowMore
              pageNumber={limit / 10}
              IsNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </>
        ) : (
          <>
            <h2 className=" text-xl bg-red-400 p-2 text-white rounded-lg my-4">
              Oops , no results
            </h2>
            <h2 className=" text-xl bg-red-400 p-2 text-white rounded-lg my-4">
              {allCars?.message}
            </h2>
          </>
        )}
      </div>
    </main>
  );
}

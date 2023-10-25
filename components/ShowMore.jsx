"use client";

import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, setLimit }) => {

  const router = useRouter();
  const handleUpdateParam = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <button
      type="button"
      className=" bg-primary-blue my-6 text-white py-2 px-4 rounded-full w-fit ml-auto mr-auto block "
      onClick={handleUpdateParam}
    >
      show More
    </button>
  );
};

export default ShowMore;

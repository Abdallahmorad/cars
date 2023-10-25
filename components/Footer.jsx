import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-[#f4f9fe]">
    <footer className="flex flex-wrap  gap-[100px]  container mx-auto  p-10  md:p-2">
      {/* logo */}
      <div>
        <Link href={"/"} className=" cursor-pointer">
          <Image src={"/logo.svg"} alt={"logo"} width={118} height={18} sizes="" />
        </Link>
        <p className=" text-gray-400 my-3 mx-2">
          Car Hub 2023 <br />
          All rights reserved &copy;
        </p>
      </div>

      {/* links */}
      <div className=" md:flex flex-1 mb-[-100px] justify-evenly  items-center">
        {/* col */}
        {footerLinks.map((link) => (
          <div key={link.title} className=" flex flex-col gap-[20px] md:text-left text-center">
            <h3 className=" text-xl font-semibold">{link.title}</h3>
            <ul className=" ml-2 ">
              {link.links.map((item) => (
                <li key={item.title} className=" my-4">
                  <Link
                    className=" text-gray-400 font-semibold"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* lower footer */}
      <div className=" flex justify-between items-center w-full py-4">
        <p className=" text-gray-400 my-3 mx-2">Car Hub 2023</p>
        <p className=" text-gray-400 my-3 mx-2">Policy && Privacy</p>
        <p className=" text-gray-400 my-3 mx-2">All rights reserved &copy;</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

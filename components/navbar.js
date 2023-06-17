import React ,{ useState}from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { HiMenu,HiX } from "react-icons/hi";
export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <>
      <div className="w-screen h-{80px} bg-red mt-5 mb-10 bg-transparent fixed ">
        <div className="flex items-center sm:justify-around justify-between w-full h-full px-2">
          <Image src={logo} width={50} height={50} className="ml-5"></Image>
          <ul className="hidden md:flex  sm:justify-between text-white font-bold text-lg sm:items-center sm:space-x-7 ">
            <li className="cursor-pointer hover:underline decoration-2 decoration-white underline-offset-8">
              Exchange
            </li>
            <li className="cursor-pointer hover:underline decoration-2 decoration-white underline-offset-8">
              Songs
            </li>
            <li className="cursor-pointer hover:underline decoration-2 decoration-white underline-offset-8">
              Pool
            </li>

          <input
            className=" border-2  border-gray-300 bg-transparent placeholder:text-white text-white h-10 px-5 pr-16 rounded-lg text-base focus:outline-none"
            type="text"
            autoComplete="off"
            name="search"
            placeholder="Search Songs"
            />

          <button className="  bg-blue-500 p-2 text-white rounded-lg font-[9px]">
            Connect Wallet
          </button>
            </ul>
          <div
          className="flex px-4 md:hidden"
          onClick={() => {
            setMenuIcon(!menuIcon);
          }}
        >
          {!menuIcon ? (
            <HiMenu className="w-10 h-10 text-white" />
          ) : (
            <HiX className="w-10 h-10 text-white" />
          )}
        </div>
        </div>
        <ul
          className={
            !menuIcon
              ? "hidden"
              : "absolute bg-transparent p-3 space-y-3   w-full flex flex-col items-center   text-white font-bold text-lg   md:hidden"
          }
        >
           <li className="cursor-pointer">
              Exchange
            </li>
            <li className="cursor-pointer ">
              Songs
            </li>
            <li className="cursor-pointer ">
              Pool
            </li>
            <input
            className=" border-2  border-gray-300 bg-transparent placeholder:text-white text-white h-10 px-5 pr-16 rounded-lg text-base focus:outline-none"
            type="text"
            autoComplete="off"
            name="search"
            placeholder="Search Songs"
            />
            <button className="  bg-blue-500 p-2 text-white rounded-lg font-[9px]">
            Connect Wallet
          </button>
        </ul>
       
      </div>
    </>
  );
}

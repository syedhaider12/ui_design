import React,{useState} from "react";
import { AiOutlineSync } from "react-icons/ai";
function Exchanger() {
  const [value,setValue]=useState('MUD')
  const [value1,setValue1]=useState('BTX')
  const swapHandle=()=>{
    const aTemp = value
    const bTemp = value1
    setValue(bTemp)
    setValue1(aTemp)
  }
  return (
    <>
      <div className="  grid  rounded-lg place-content-center min-h-screen px-5 ">
        <div className=" max-w-sm mx-auto  px-8 sm:mt-10 rounded-lg py-6 bg-black bg-opacity-50  text-center  ">
          <div className="flex items-center my-3  justify-between">
            <h3 className="text-2xl font-bold text-white text-center">
              Music Exchanger
            </h3>
            
          </div>
          <div className="p-2  mb-[-5px] bg-gray-800 rounded-lg">

          <div className="flex   items-center  space-x-2 justify-between">
            <input
              className=" w-1/3 py-2.5 placeholder:text-white text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700  focus:ring-0 focus:border-gray-200 peer    focus:outline-none"
              type="text"
              autoComplete="off"
              name="num"
              placeholder="0.0"
              />
            
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              className=" py-2.5 px-0  text-sm text-center text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={value} onChange={(event)=>{  setValue(event.target.value);}}>
              <option selected className="bg-black ">{value}</option>
              <option value="MUD" className="bg-black ">MUD</option>
              <option value="ZAR" className="bg-black ">ZAR</option>
              <option value="ETH" className="bg-black ">ETH</option>
              <option value="BTX" className="bg-black ">BTX</option>
            </select>
          </div>
          <div className="flex items-center justify-end mt-2 text-white">
            <h1>Balance : $0.0</h1>
          </div>
          </div>
          <button className="p-1 rounded-full bg-blue-500 text-white " onClick={swapHandle}><AiOutlineSync ></AiOutlineSync></button>
          <div className="p-2  mt-[-5px] bg-gray-800 rounded-lg">
          <div className="flex items-center  space-x-2 justify-between">
          <input
              className=" w-1/3 py-2.5 placeholder:text-white text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700  focus:ring-0 focus:border-gray-200 peer    focus:outline-none"
              type="text"
              autoComplete="off"
              name="num1s"
              placeholder="0.0"
            />
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              className=" py-2.5 px-0  text-sm text-center text-white bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0  peer"
              value={value1} onChange={(event)=>{  setValue1(event.target.value);}}>
              <option selected className="bg-black ">{value1}</option>
             
              <option value="MUD" className="bg-black ">MUD</option>
              <option value="ZAR" className="bg-black ">ZAR</option>
              <option value="ETH" className="bg-black ">ETH</option>
              <option value="BTX" className="bg-black ">BTX</option>
            </select>
          </div>
          <div className="flex items-center justify-end mt-2 text-white">
            <h1>Balance : $0.0</h1>
          </div>
          </div>
          <button className="bg-blue-500 mt-5 w-full text-white rounded-lg p-2" onClick={swapHandle}>
           
            Change
          </button>
        </div>
      </div>
    </>
  );
}

export default Exchanger;

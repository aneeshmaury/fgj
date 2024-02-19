import { Input } from 'postcss'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
export default function Nav() {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
     <div className="text-4xl font-medium">MySHop</div>
     <div className="relative w-full max-w-[500px]">
      <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product.."/>
      < FaSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>
     </div>
     <div className="flex gap-4 ">
      <div className="border border-gray-500 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px]">
                <FaRegUser/>
      </div>
      <div className="border relative border-gray-500 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px]">
                <FaCartArrowDown/>
      </div>

     </div>
      </div>
    </div>
  )
}

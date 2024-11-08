import React from "react";
import './styling/Header.css'
export default function Header(){
    return(
        <>
           <header className="flex text-white">
                <div className="w-full h-24 flex items-center justify-center bg-black">
                   <div className="flex flex-row items-center mx-20 w-full justify-between">
                        <div className="flex flex-row gap-2 text-2xl my-5 justify-start">
                            <h1>Abstract</h1>
                            <h1> |</h1>
                            <button className="hover:border-b-2 border-white">Help Center</button>
                        </div>
                        <div className="flex items-center h-[50px] gap-5 w-[900px] justify-end">
                            <a href="" className="border-2 border-white text-2xl px-6 py-2 rounded-lg font-normal bg-[#191a1b]">Submit a request</a>
                            <a href="" className="bg-[#4C5FD5] text-2xl text-white px-8 py-2 rounded-lg hover:bg-white hover:text-black">Sign In</a>
                        </div>
                   </div>
                </div>
           </header>
        </>
    )
}
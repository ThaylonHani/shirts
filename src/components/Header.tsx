'use client';

import { useState } from "react";
import { BsBag, BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export function Header() {

    const [input, setInput] = useState(false);

    return (
        <header className="flex items-center justify-between p-4 border-b border-b-white transition-all duration-200 ease-in relative">
        <nav className=" flex bg-white w-fit  text-black transition-all duration-200 ease-in border rounded-full" >
                <BsSearch onClick={() => setInput(!input)} className="text-2xl border border-white  rounded-full w-fit p-1 hover:text-[#e5d5fe] transition-all duration-200 ease-in" />
          <input type="text" className="self-center rounded-full transition-all duration-200 ease-in border border-black focus:outline-none text-center" style={{ width: input ? '100%' : "0px",opacity: !input ? '0' : '1'}} />
        </nav>
        <h3 className="absolute left-0 right-0 w-1/2 text-center mx-auto" style={{ opacity: input ? '0' : "1"}}>
          {!input ? 'Ecologyclothes' : false }
        </h3>
        <section className="flex gap-4">
          <FaUserCircle className="text-2xl hover:text-[#e5d5fe] transition-all duration-200 " />
          <BsBag className="text-2xl hover:text-[#e5d5fe] transition-all duration-200"/>
        </section>
      </header>
    )
}

import { TiLocation } from "react-icons/ti";
import {BsFacebook,BsInstagram,BsGoogle} from "react-icons/bs";

export function Footer() {
    return ( 
        <footer className='flex sm:absolute left-0 right-0 bottom-0   justify-between p-4'>
        <div className='flex items-center justify-center align-middle'>
          <TiLocation className="text-2xl " /> 
          <p>Brasil</p>
        </div>     
        <section className="flex flex-col w-1/2 items-center text-center sm:w-fit sm:gap-2 sm:flex-row">
          <p>1 ponto extra para quem compartilhar. </p>
          <div className='flex gap-x-2'>
            <BsFacebook  className="hover:text-[#e5d5fe] transition-all duration-200"/>
            <BsInstagram className="hover:text-[#e5d5fe] transition-all duration-200" />
            <BsGoogle className="hover:text-[#e5d5fe] transition-all duration-200"/>
          </div>
        </section>
      </footer>
    )
}
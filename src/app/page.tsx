import ShirtCards from '@/components/ShirtsCards';
import Image from 'next/image';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    
    <div className="relative h-max min-h-screen max-w-screen sm:overflow-hidden text-white">
    

      <Header/>

       <div className="w-1/2 h-full bg-[var(--Green)] absolute  top-0 bottom-0 -z-10  " />          
        <div className="w-1/2 h-full bg-[var(--Beige)] absolute right-0 top-0 bottom-0 -z-10 " />  
     
    <div className="flex flex-col h-fit  sm:flex-row sm:mx-auto sm:justify-between ">
        
      <section className="flex flex-col gap-4 py-4 text-center w-10/12  items-center self-center r sm:w-1/2   ">
        <h1 className="text-2xl font-bold ">
        Roupas de graça, Ajude o meio ambiente !
        </h1>
        <p className=''>
          Peças de roupas de graça por quilo de plástico, para cada quilo de plástico você ganha pontos e com esse pontos pode adquirir peças de roupas.
        </p>
        <button className="font-bold text-[var(--Green)] bg-[#e5d5fe]  p-2 relative w-44  rounded-sm border-b-2 border-r-2 before:shadow-sm before:shadow-[#e5d5fe] before:w-full before:-bottom-1 before:left-1 before:h-full  before:rounded-sm before:p-2 before:absolute hover:opacity-70 transition-all duration-200  ">
          Ver produtos
        </button>
           
      </section>

      <img src="/redHairedWoman.png" alt="" className="w-96  rounded-lg self-center sm:w-full" />

      <ShirtCards />
      <Footer />
    </div>
      
      </div>


  )
}

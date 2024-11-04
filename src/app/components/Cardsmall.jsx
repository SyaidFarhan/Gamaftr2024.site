// pages/MobileTimeline.js
import React from 'react';

const Cardsmall = () => {
  return (
    <div className="sm:hidden" id='ticket1'>
    <div className="flex flex-col sm:flex-row mx-auto min-h-screen items-center justify-center bg-[#010b19] gap-4 xl:pt-60 md:pb-12 lg:my-[10px] relative">
       <img className="absolute z-30 lg:-translate-x-[40px] scale-[400%] max-w-[1220px] md:translate-y-[300px]" alt="hero" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/awanasap%20(2)%20(1).png?raw=true" />


      <div className="text-5xl font-spacegrotesk font-extrabold text-white rounded-2xl border-[4px] border-space2 bg-red-400 shadow-xl shadow-space2 xl:text-8xl p-4 lg:py-0 xl:p-4 pl-10mr-[180px] relative z-40 text-border-space2 ">TICKET</div>
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40 ">
        <div
          className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-gray-800 rounded-xl shadow-[0px_0px_20px_#FFC100]">
            <div className="flex flex-col justify-between h-full">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] rounded-xl shadow-[0px_0px_20px_#ff0000]' />
              <h1 className="block pb-5 mt-auto text-4xl font-montserrat font-bold leading-5 text-[#FFC100]  xl:text-5xl">Try Out</h1>
              <div className="dropdown dropdown-right md:mt-2">
                <button className="border-3 text-space1 hover:hover:shadow-[0px_0px_20px_#FFC100] border-space2 hover:bg-space1 hover:text-space2 btn btn-primary bg-space2"><a href="https://bit.ly/PRESALE2GAMAFTR24" className='font-bold font-spacegrotesk'>Daftar</a></button>
                
  {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='https://daisyui.com/components/dropdown/'>Pekanbaru</a></li>
    <li><a>Duri</a></li>
    <li><a>Dumai</a></li>
  </ul> */}
</div>
            </div>
          </div>
          {/* isi gamaftr ticket */}
        </div>
      </div>

      {/* Bedah kampus */}
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40">
        <div
          className="relative w-full h-full transition-all duration-500 scale-90 shadow-xl">
          <div className="absolute inset-0 z-40 p-8 bg-gray-800 rounded-xl shadow-[0px_0px_20px_#FFC100]">
            <div className="flex flex-col justify-between h-full">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[350px] shadow-[0px_0px_20px_#4040a1] rounded-xl' />
              <h1 className="block pb-5 mt-auto text-4xl font-montserrat font-bold text-[#FFC100]  xl:text-5xl">Bedah Kampus</h1>
              <div className="dropdown dropdown-right md:mt-2">
                <button className="border-3 text-space1 hover:hover:shadow-[0px_0px_20px_#FFC100] border-space2 hover:bg-space1 hover:text-space2 btn btn-primary bg-space2"><a href="https://bit.ly/PRESALE2GAMAFTR24" className='font-bold font-spacegrotesk'>Daftar</a></button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cardsmall;

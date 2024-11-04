// pages/MobileTimeline.js
import React from 'react';

const Ticket = () => {
  return (
    <div className="hidden sm:block" id='ticket1'>
    <div className="flex flex-col sm:flex-row mx-auto min-h-screen items-center justify-center bg-[#010b19] gap-4 xl:pt-60 md:pb-12 lg:my-[10px] relative">
       <img className="absolute z-10 lg:-translate-x-[40px] scale-[200%] 2xl:max-w-[1900px] md:translate-y-[300px]" alt="hero" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/awanasap.png?raw=true" />


      <div className="text-5xl font-spacegrotesk font-extrabold text-white rounded-2xl border-[4px] border-space2 bg-red-400 shadow-xl shadow-space2 xl:text-8xl p-4 lg:py-0 xl:p-4 pl-10mr-[180px] relative z-40 text-border-space2 ">TICKET</div>
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40 ">
        <div
          className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] scale-90">
          <div className="absolute inset-0 z-40 p-8 bg-gray-800 rounded-xl">
            <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center pt-10">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[95%] lg:md:max-w-[95%]  vm:max-w-[95%] xl:md:max-w-[100%] shadow-[0px_0px_20px_#ff0000] sm:max-w-[95%] rounded-lg' />
            </div>
              <h1 className="block pb-5 mt-auto text-4xl font-montserrat font-bold leading-5 text-[#FFC100]  xl:text-5xl">Try Out</h1>
            </div>
          </div>
          {/* isi gamaftr ticket */}
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-[#FFC100] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]  z-40" id='ticketweb'>
            <div className="flex flex-col justify-between h-full ">
        <div className=" lg:mb-0 xl:mb-8 sm:mb-1 md:mb-1">
            <h1 className="  md:mb-0 lg:mb-0 font-bold  xl:mb-4 text-[13px] md:text-[13px] sm:text-[8px] sm:mb-0  lg:text-2xl">Pekanbaru</h1>
            <ul>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Hari, tanggal:</strong> Sabtu & Minggu, 20 - 21 Januari 2024</li>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Waktu pelaksanaan:</strong> 07.30 - Selesai</li>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Lokasi:</strong> MAN 2 Pekanbaru </li>
            </ul>
        </div>

        <div className="lg:mb-0 xl:mb-8 sm:mb-1 md:mb-1">
            <h1 className=" font-bold sm:mb-0 md:mb-0 lg:mb-0 xl:mb-4 text-[13px] md:text-[13px]  lg:text-2xl sm:text-[8px]">Duri</h1>
            <ul>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Hari, tanggal:</strong> Sabtu, 21 Januari 2024</li>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Waktu pelaksanaan:</strong> 07.30 - Selesai</li>
                <li className='text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]'><strong>Lokasi:</strong> SMA Negeri 2 Mandau</li>
            </ul>
        </div>

        <div className=" lg:mb-0 xl:mb-8 sm:mb-1 md:mb-1">
            <h1 className=" font-bold sm:mb-0 md:mb-0 sm:text-[8px] lg:mb-0 xl:mb-4 text-[13px] md:text-[13px]  lg:text-2xl">Dumai</h1>
            <ul>
                <l className="text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px] " ><strong>Hari, tanggal:</strong> Minggu, 20 Januari 2024</l>
                <li className="text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]" ><strong>Waktu pelaksanaan:</strong> 07.30 - Selesai</li>
                <li className="text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px]" ><strong>Lokasi:</strong> SMA Negeri 2 Dumai</li>
            </ul>
        </div>
              <div className="mt-auto space-y-4 ">
                <div className="flex items-center justify-between gap-4 mt-auto lg:pb-2">
                <div className="dropdown dropdown-right md:mt-2">
                <button className="border-none text-space2 shadow-[0px_0px_20px_#ff0000] hover:bg-blue-950 hover:text-white btn btn-primary bg-space1"><a href="https://bit.ly/PRESALE2GAMAFTR24" className='font-bold font-spacegrotesk'>Daftar</a></button>
                
  {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='https://daisyui.com/components/dropdown/'>Pekanbaru</a></li>
    <li><a>Duri</a></li>
    <li><a>Dumai</a></li>
  </ul> */}
</div>
                {/* <h1 className="mb-2 text-6xl">14k</h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bedah kampus */}
      <div className="group h-96 w-80 xl:h-[575px] xl:w-[450px] [perspective:1000px] relative z-40">
        <div
          className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] scale-90">
          <div className="absolute inset-0 z-40 p-8 bg-gray-800 rounded-xl">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-center pt-10">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/1704419489494.jpg?raw=true" alt="Shoes" className='md:max-w-[95%] lg:md:max-w-[95%]  vm:max-w-[95%] xl:md:max-w-[100%] shadow-[0px_0px_20px_#4040a1]  sm:max-w-[95%] rounded-lg' />
            </div>
              <h1 className="block pb-5 mt-auto text-4xl font-montserrat font-bold text-[#FFC100]  xl:text-5xl">Bedah Kampus</h1>
            </div>
          </div>
          <div className="absolute z-40 inset-0 h-full w-full rounded-xl bg-[#FFC100]  p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]" id='ticketweb'>
            <div className="flex flex-col justify-between h-full">
            <div className=" lg:mb-0 xl:mb-8 sm:mb-1 md:mb-1">
            <h1 className=" font-bold mb-4 sm:mb-0  lg:mb-0 xl:mb-4 text-[13px] md:text-[13px]  lg:text-2xl sm:text-[10px]"></h1>
            <ul>
                <li className='text-[10px] sm:text-[8px]  md:text-[10px] lg:text-[14px]'><strong>Hari, tanggal:</strong> Minggu, 28 Januari 2024</li>
                <li className='text-[10px] sm:text-[8px]  md:text-[10px] lg:text-[14px]'><strong>Waktu pelaksanaan:</strong> 07.30 - Selesai</li>
            </ul>
        </div>
              <div className="gap-4 mt-auto">
              <button className="border-none text-space2 shadow-[0px_0px_20px_#ff0000] hover:bg-blue-950 hover:text-white btn btn-primary bg-space1"><a href="https://bit.ly/PRESALE2GAMAFTR24" className='font-bold font-spacegrotesk'>Daftar</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ticket;

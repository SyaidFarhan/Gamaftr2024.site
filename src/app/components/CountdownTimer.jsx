// pages/CountdownTimer.js
"use client";
import React, { useEffect } from 'react';

const CountdownTimer = () => {
  useEffect(() => {
    // JavaScript for Countdown Timer
    const countdownElement = document.getElementById('countdown');
    
    // Provide date components individually or use a universally recognized format
    const targetDate = new Date(2024, 0, 28, 7, 30, 0).getTime();
  
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
    
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
      const countdownHTML = `
        <div class="flex flex-row gap-8 md:gap-6 px-4">
            <div class="py-6 text-center text-[#FFC100] border-l-3 pr-5">
                <p class="text-xl font-spacegrotesk font-semibold leading-6 md:text-4xl xl:text-7xl">${days}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Hari</p>
            </div>
            <div class="py-6 text-center text-[#FFC100] border-r-3">
                <p class="text-xl font-spacegrotesk font-semibold leading-6 md:text-4xl xl:text-7xl">: ${hours}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Jam</p>
            </div>
            <div class="py-6 text-center text-[#FFC100] border-r-3">
                <p class="text-xl font-spacegrotesk font-semibold leading-6 md:text-4xl xl:text-7xl">: ${minutes}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Menit</p>
            </div>
            <div class="py-6 text-center text-[#FFC100] border-r-3">
                <p class="text-xl font-spacegrotesk font-semibold leading-6 md:text-4xl xl:text-7xl">: ${seconds}</p>
                <p class="mt-2 text-xl md:text-3xl xl:text-7xl">Detik</p>
            </div>
        </div>
      `;
    
      countdownElement.innerHTML = countdownHTML;
    }
    
  
    // Call the function initially and set an interval for continuous updates
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
  
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
   // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="relative flex items-center justify-center w-ful mx-5 bg-[#010b19] md:h-screen count md:pt-10 timeline lg:px-2 gap-6 xl:ml-5 mb-5 pb-16">
      <div className="absolute inset-y-0 left-0 z-40 flex items-center w-2/3 md:w-full rocket xl:mr-3 lg:ml-7">
      <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/Property%201=Default.png?raw=true" alt="" className='absolute left-0 z-10 md:translate-x-[400px]  lg:translate-x-[600px] xl:translate-x-[800px] -translate-y-[100px] scale-75' />
        <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/marsbig.png?raw=true" alt="Logo" className="absolute z-30 left-[-620px] scale-75 mars animate-spiral" /> {/* Add the negative margin */}
      </div>
      <div className="relative z-40 md:items-center md:flex">
        <div className="flex items-center justify-center w-full text-center text-space1">
          <h1 className="text-3xl font-bold font-montserrat md:px-10 md:text-7xl lg:text-6xl xl:text-7xl text-border-space2">Bedah Kampus</h1>
        </div>
        <div className="relative z-40 flex items-center justify-center w-full mx-auto  border-[4px] border-space2 bg-space1 relative-20 rounded-2xl shadow-[0px_0px_20px_#FFC100] scale-90">
          <div className="text-5xl font-bold font-spacegrotesk text-space1 font-space md:text-sm md:px-5 md:text-border-red-500"  id="countdown"></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

// pages/MobileTimeline.js
import React from 'react';

const MobileTimeline = () => {
  return (
    <div className="py-4 text-white bg-[#010b19] md:hidden">
      <div className="container relative mx-auto my-12 md:flex-row md:my-24">
      <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/marsbig.png?raw=true" alt="Alt Text" className='absolute z-10 translate-x-10 translate-y-20 md:hidden'/>
        <div className="px-[60PX] md:w-1/2 md:px-8 relative">
          <div className="flex justify-center">
        <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/luncur%20(2)%20(3)%20(1).png?raw=true" alt="" className="absolute z-20 -translate-y-[1000px] vm:-translate-y-[900px] sm:-translate-y-[900px] md:-translate-y-[1000px]  scale-[75%]" />
        </div>
        <div className="text-5xl font-spacegrotesk font-extrabold text-white rounded-2xl border-[4px] border-space2 bg-red-400 shadow-xl shadow-space2 xl:text-8xl py-4 pl-10mr-[180px] relative z-40 text-border-space2 text-center">TIMELINE</div>
        </div>
        <div className="relative z-40 md:w-1/2">
          <div className="container mx-auto">
            <div className="p-4 overflow-hidden">
              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-blue-950 border-space2 rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-yellow-300 font-spacegrotesk md:text-2xl">7 Januari 2024</p>
                  <h4 className="mb-3 text-xl font-extrabold font-spacegrotesk md:text-6xl">Opening</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-blue-950 border-space2 rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-yellow-300 font-spacegrotesk md:text-2xl">8-19 Januari 2024</p>
                  <h4 className="mb-3 text-xl font-extrabold font-spacegrotesk md:text-6xl">Roadshow</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-blue-950 border-space2 rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-yellow-300 font-spacegrotesk md:text-2xl">20-21 Januari 2024</p>
                  <h4 className="mb-3 text-xl font-extrabold font-spacegrotesk md:text-6xl">Try Out</h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 mobile-timeline-item">
                <div className="w-1/2 px-1 py-2 text-center border-4 bg-blue-950 border-space2 rounded-3xl">
                  <p className="mb-3 text-lg font-bold text-yellow-300 font-spacegrotesk md:text-2xl">28 Januari 2024</p>
                  <h4 className="mb-3 text-xl font-extrabold font-spacegrotesk md:text-6xl">Bedah Kampus</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline;

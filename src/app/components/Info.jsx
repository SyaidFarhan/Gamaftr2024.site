import React from 'react';

const Info = () => {
  return (
    <div className="w-full lg:pt-10 md:pt-60 xl:pt-60" id='info1'>
      <div className="md:hidden relative z-40 my-20 bg-[#010b19]/4 ">
        <div className="relative w-full px-4 pt-5 text-center text-white">
          <img loading="lazy"src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/planettt-08%201.png?raw=true" alt="Alt Text" className='absolute z-10 -translate-x-10'/>
          <img loading="lazy"src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/planettt-08%201.png?raw=true" alt="Alt Text" className='absolute z-10 rotate-180 -translate-y-[400px] sm:translate-x-10 translate-x-3'/>
        </div>

        <div className="relative w-full p-4 translate-y-[200px]">
          <h1 className="relative z-40 text-xl font-bold text-center text-white rounded-2xl bg-space1 md:text-2xl lg:text-4xl xl:text-6xl ">Gadjah Mada Flies To Riau</h1>
          <p className="relative z-40 leading-relaxed text-justify text-white font-spacegrotesk lg:text-2xl bg-space1">
          merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA di Provinsi Riau. GAMAFTR diinsiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau. GAMAFTR terdiri dari beberapa rangkaian acara seperti roadshow, try out, dan acara puncaknya adalah bedah kampus di Pekanbaru.
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center h-screen p-4 md:pt-80 bg-[#010b19] mx-auto gap-20 2xl:container about relative">
        <div className="items-center justify-center w-1/2 px-8 text-white">
          <div className="relative z-40 flex justify-center w-full h-0 overflow-hidden scale-100 rounded-lg aspect-w-16 aspect-h-9" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/tkyk7WDAaEI?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        <img loading="lazy"src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/luncur%20(1).png?raw=true" alt="" className="absolute z-10 translate-x-[248px] xl:translate-y-[1000px] md:translate-y-[600px] lg:translate-y-[500px] xl:scale-[75%] md:scale-[50%] sm:scale-[80%] lg:scale-[60%] hidden md:block " />
        <div className="container relative z-40 w-1/2 p-4 mx-auto overflow-hidden  bg-red-400 border-[10px] shadow-2xl border-space2 shadow-space2 rounded-xl ">
          <h1 className="mb-4 text-xl font-bold text-white font-montserrat md:text-xl sm:text-lg lg:text-4xl xl:text-6xl lg:text-border-space2">Gadjah Mada Flies To Riau</h1>
          <p className="font-semibold leading-relaxed text-justify text-white font-spacegrotesk md:text-md sm:text-sm lg:text-xl">Merupakan program kerja tahunan KEMARIGAMA (Keluarga Mahasiswa Riau Gadjah Mada) yang setiap tahunnya sudah mengunjungi lebih dari 50 SMA di Provinsi Riau. GAMAFTR diinsiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau.</p>
        </div>
        <img loading="lazy"className="absolute z-20 -translate-y-[30px] scale-[90%] -translate-x-3  sm:scale-[140%] overflow-x-hidden" alt="hero" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/Group%2049%20(2).png?raw=true" />
      </div>
     
    </div>
  );
};

export default Info;

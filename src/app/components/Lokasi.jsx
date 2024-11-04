// pages/MobileTimeline.js
import React from 'react';

const Lokasi = () => {
  return (
   <div className="relative z-30 flex justify-center mx-auto pt-36 md:mt-5 font-inter " id='event'>
    <div className="sm:border-[3px] sm:shadow-[0px_0px_20px_#FFC100] sm:bg-red-400 sm:shadow-space2 sm:border-space2 sm:rounded-full relative z-40 md:-translate-y-[100px] lg:-translate-y-[200px] max-w-[1280px]">
    <div className="absolute z-40 right-[0%] bottom-[0%] -translate-x-1/2 sm:hidden translate-y-1/2">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/batu%20angkasa.PNG?raw=true" alt="" className="" /> </div>
            <div className="absolute z-40 left-[0%] bottom-[0%] translate-x-1/3 sm:hidden translate-y-1/2">
            <img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Group%2050.png?raw=true" alt="" className="" /> </div>

    <h1 className="hidden sm:pt-10  text-3xl font-extrabold text-white s,:text-center sm:flex sm:justify-center font-spacegrotesk md:text-5xl text lg:text-7xl md:pt-5 md:text-border-space2">Rangkaian Acara</h1>
    <div className="justify-center scale-75 xl:scale-75 sm:scale-[70%]  lg:scale-[60%] md:scale-[45%] md:-translate-y-[50px]  sm:-translate-y-[30px] sm:flex sm:flex-row-2 sm:gap-6 sm:grid-flow-col">
    <div className="md:w-1/2 md:px-8 sm:hidden scale-100 text-7xl font-spacegrotesk font-extrabold text-white rounded-2xl border-[4px] border-space2 bg-red-400 shadow-xl shadow-space2 xl:text-8xl p-4 lg:py-0 xl:p-4 pl-10mr-[180px] relative z-40 text-border-space2 text-center">EVENTS</div>
    <div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] bg-base-100 hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2 object-cover">
  <figure><img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/B1E05FA5-AF30-4C05-BAAD-43E32A54EC66%20(1)%20(1)%20(1).jpg?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-space2 font-spacegrotesk">Opening</h2>
     <p className='text-xl sm:text-sm md:text-sm'>Simbolisasi pembukaan rangkaian kegiatan GAMAFTR 2024</p>
    <div className="justify-end card-actions">
      <button className="border-none btn btn-primary bg-space2 text-space1"><a href="https://maps.app.goo.gl/DCNn5CtsmSXnPymQ9?g_st=ic">Lokasi</a></button>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>See All</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="md:text-[10px] xl:text-lg font-bold">Opening</h3>
    <p className="py-4"> Simbolisasi pembukaan rangkaian kegiatan GAMAFTR 2024 sebagai langkah awal untuk menyapa seluruh siswa/i yang ada di Provinsi Riau</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">Event Information</h1>
            <ul>
                <li><strong>Lokasi:</strong> Car Free Day, Jl. Sudirman</li>
                <li><strong>Tanggal:</strong> 7 Januari 2024</li>
                <li><strong>Waktu:</strong> 07.00 - 09.00</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* roadshow */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] bg-base-100 hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2">
  <figure><img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/DSC05718-1%20(1)%20(1)%20(1).jpg?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-space2 font-spacegrotesk">Roadshow</h2>
     <p className='text-xl sm:text-sm md:text-sm'>Rangkaian sosialisasi ke SMA/SMK/MA</p>
    <div className="justify-end card-actions">
      <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>See All</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="md:text-[10px] xl:text-lg font-bold">Roadshow</h3>
    <p className="py-4"> Rangkaian sosialisasi ke SMA/SMK/MA/Sederajat di Provinsi RIau yang akan dilaksanakan secara luring maupun daring dimana akan diikuti oleh siswa/i kelas 12</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">Event Information</h1>
            <ul>
                <li><strong>Lokasi:</strong> 45+ SMA/SMK/MA, Online/Offline</li>
                <li><strong>Tanggal:</strong> 8-19 Januari 2024</li>
                <li><strong>Waktu:</strong> -</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* Tryout */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] bg-base-100 hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2">
  <figure><img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/IMG_3165-min%20(2)%20(1)%20(1).png?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-space2 font-spacegrotesk">Try Out</h2>
     <p className='text-xl sm:text-sm md:text-sm'> GAMAFTR 2024 menyediakan wadah bagi siswa/i di Provinsi Riau yang ingin mempersiapkan diri masuk Perguruan Tinggi</p>
    <div className="justify-end card-actions">
    <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className="border-none btn btn-primary bg-space2 text-space1">Lokasi</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='https://maps.app.goo.gl/bbtERxCf86KVU3bh9'>Pekanbaru</a></li>
    <li><a href='https://maps.app.goo.gl/p92DtTRYTEaXPsPT8'>Duri</a></li>
    <li ><a href='https://maps.app.goo.gl/NBi4vTxm2My8aCGr8'>Dumai</a></li>
  </ul>
</div>
      <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>See All</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h3 className="md:text-[10px] xl:text-lg font-bold">Try Out</h3>
    <p className="py-4 w-sm"> GAMAFTR 2024 menyediakan wadah bagi siswa/i di Provinsi Riau yang ingin mempersiapkan diri masuk Perguruan Tinggi serta menguji kemampuannya yang akan didukung oleh platform edukasi terbaik</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">Event Information</h1>
            <ul className='mb-2'>
                <li><strong>Lokasi:</strong> MAN 2 Pekanbaru</li>
                <li><strong>Tanggal:</strong> 20-21 Januari 2024</li>
                <li><strong>Waktu:</strong> 07.30 - Selesai</li>
            </ul>
            <ul className='mb-2'>
                <li><strong>Lokasi:</strong> SMAN 2 Mandau</li>
                <li><strong>Tanggal:</strong> 21 Januari 2024</li>
                <li><strong>Waktu:</strong> 07.30 - Selesai</li>
            </ul>
            <ul className='mb-2'>
                <li><strong>Lokasi:</strong> SMAN 2 Dumai</li>
                <li><strong>Tanggal:</strong> 20 Januari 2024</li>
                <li><strong>Waktu:</strong> 07.30 - Selesai</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* bedah kampus */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] bg-base-100 hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2">
  <figure><img src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/IMG_20230128_090157.jpg?raw=true" alt="Shoes" className='md:max-w-[350px]' /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-space2 font-spacegrotesk">Bedah Kampus</h2>
     <p className='text-xl sm:text-sm md:text-sm'> Penutupan rangkaian kegiatan GAMAFTR 2024 </p>
    <div className="justify-end card-actions">
      <a href="#">
      <button className="border-none btn btn-primary bg-space2 text-space1">Lokasi</button>
      </a>
      <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>See All</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <h3 className="md:text-[10px] xl:text-lg font-bold">Bedah Kampus</h3>
    <p className="py-4">Penutupan rangkaian kegiatan GAMAFTR 2024 yang akan mendatangkan Guest Star serta penampilan dari mahasiswa UGM sebagai puncak acara</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">Event Information</h1>
            <ul>
                <li><strong>Lokasi:</strong> </li>
                <li><strong>Tanggal:</strong> 28 Januari 2024</li>
                <li><strong>Waktu:</strong> 07.30 - Selesai</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
    </div>
    </div>
   </div>
  );
};

export default Lokasi;

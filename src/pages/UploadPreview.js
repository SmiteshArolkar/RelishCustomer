import { useRouter } from 'next/router'
import React from 'react'

const UploadPreview = () => {
    const router=useRouter();
    const CallLocationPage=()=>{
        console.log("Call Router page")
        router.replace("/SetLocationPage")
    }
    return (
        <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
        >
           <div className='h-[2rem] w-[2rem] bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[4rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Upload Your Photo Profile
             </h1>
             <p className="w-[239px] h-[44px] absolute top-[8rem] left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             This data will be displayed in your account profile for security
            </p>
            </div>
            <div className='text-black absolute h-[13rem] rounded-xl w-[12rem]  top-[290px] flex flex-row justify-end left-[90px]'
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715762873/Photo_yeqpeg.png')"}}
            >
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715764926/Close_Icon_cglmo3.png' alt='closeIcon' className='mt-[2vh] h-[4vh] w-[5vw]'/>
            </div>
            <div className='flex flex-col h-screen items-center mb-[5rem] justify-end '>
            <button type='button' className=' w-[9.5rem] h-[3rem] 
              rounded-[15px] mt-[2rem]  font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={CallLocationPage}>Next</button>
            </div>
        </div>
      )
}

export default UploadPreview

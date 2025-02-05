import { useRouter } from 'next/router'
import React from 'react'

const PaymentMethod = () => {
   const router=useRouter();
   const callUploadPhoto=()=>{
         router.replace("/UploadPhotoPage")
   }
    return (
        <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
        >
           <div className='h-8 w-8 bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[4rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Payment Method
             </h1>
             <p className="w-60 h-11 absolute top-28 left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             This data will be displayed in your account profile for security
            </p>
               <div className='flex flex-row items-center'>
                    <div
                    className="mt-12 text-[#3B3B3B] flex justify-center items-center h-[4rem] rounded-xl outline-none shadow-xl p-4 w-[287px]   w-45 h-17 absolute top-[12rem] 
                    font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] 
                    " >
                     <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715752425/paypal-2_1_1_rnqjwr.png' alt='payPall' className='h-[23px] w-[86px]'/>
                    </div>
                    <div className="mt-28 text-[#3B3B3B] flex justify-center items-center h-[4rem] rounded-xl outline-none shadow-xl p-4 w-[287px]   w-45 h-17 absolute top-[12rem] 
                    font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] " >
                     <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715752973/visa_1_1_iprx16.png' alt='Visa' className='h-[60px] w-[60px]'/>
                    </div>
                    <div className="mt-48 text-[#3B3B3B] flex justify-center items-center h-16 rounded-xl outline-none shadow-xl p-4 w-[287px]   w-45 h-17 absolute top-[12rem] 
                    font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] " >
                     <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715753245/Payoneer_logo_1_oghtje.png' alt='Payonner' className='h-[32px] w-[83px]'/>
                    </div>
               </div>
            </div>
            <div className='flex flex-col h-screen items-center mb-20 justify-end '>
            <button className=' w-36 h-12 
                 mt-8 rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={callUploadPhoto}>Next</button>
            </div>
        </div>
      )
}

export default PaymentMethod

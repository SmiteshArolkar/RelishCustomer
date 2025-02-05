import React from 'react'
import Menubar from './components/Menubar'
import RestaurentItem from './components/RestaurentItem'

const RestaurentList=[{id:1,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png',name:'Vegan Resto',time:'12 Mins'},{id:2,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png',name:'Healthy Food',time:'8 Mins'},{id:3,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png',name:'Good Food',time:'12 Mins'},{id:4,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png',name:'Biryani By Kilo',time:'8 Mins'},{id:5,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png',name:'Smart Resto',time:'8 Mins'}]

const ExploreRestaurent = () => {
  return (
    <div className='min-h-screen pb-24 h-auto opacity-10 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"10"}}
    >
      <Menubar/>
        <div className='flex justify-around mt-16'>
            <h1 className='h-20 w-56  text-[#09051C] ml-8  text-[31px] font-semibold  leading-[40.62px] text-left'>Find Your Favorite Food</h1>
            <div className='h-12 w-12 ml-10 mt-2 bg-[white] mr-4 flex justify-center items-center shadow-2xl rounded-[10px]'>
               <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715921424/Icon_Notifiaction_v9ors7.png' alt='NotificationIcon' className='w-5  h-6'/>
            </div>
          </div>
      <div className='flex justify-around'>
       <div className='w-72 h-12 bg-gray-300 ml-8 mt-4 shadow-xl flex flex-row rounded-[15px]'>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715922443/Icon_Search_uxt5zj.png' alt='searchIcon' className='h-4 ml-2 w-4 mt-4 '/>
         <input type='text' placeholder='What do you want to order?' className='absolute outline-none text-[#B2AC88] font-montserrat text-[12px] font-normal leading-[14.63px] tracking-[0.5px] text-left bg-gray-300 left-16 h-12 w-52'/>
        </div>
        <div className='flex justify-center items-center mt-4 left-72 mr-4 ml-4 shadow-2xl bg-[#f2ebbf] w-12 opacity-30 rounded-2xl h-12 top-44'>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715927823/Filter_xky0jt.png' alt='filterIcon' className='h-6 w-6' />
        </div>
      </div>
     <div className='w-[100%] mt-8 '>
     <h1 className='text-[#09051C] font-montserrat text-[15px] font-bold leading-[19.65px] text-left ml-8'>Popular Restaurant</h1>
     </div>
     <ul className='list-none flex justify-center flex-wrap '>
      {
        RestaurentList.map((each)=>(
          <RestaurentItem cartItem={each} key={each.id}/>
        ))
      }
     </ul>
    </div>
  )
}

export default ExploreRestaurent
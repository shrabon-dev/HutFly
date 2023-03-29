import React from 'react'
import ProductPart from '../part/product'

export default function DealsAndOffer() {
  return (
    <div>
       <div className='container py-20'>
          <div className='tablet:c-flex !items-stretch '>
            {/* ====== Counter Start ===== */}
            <div className='border tablet:w-[30%] h-auto border-gray-300 rounded-l-md p-6 box-border border-r-0'>
               <h4 className='heading text-text'>Deals and offers</h4>
               <h4 className='heading !text-base text-[#8b8b8b]'>Hygiene equipments</h4>
                <div className='mt-6 '>
                  <span className='p !leading-normal tablet:!text-[13px] mobile:text-[8px] mx-1 !font-medium text-white tablet:w-16 mobile:w-12 p-2 inline-block bg-gray-600 text-center rounded-lg '>05 <span className='block'>Days</span> </span>
                  <span className='p !leading-normal tablet:!text-[13px] mobile:text-[8px] mx-1 !font-medium text-white tablet:w-16 mobile:w-12 p-2 inline-block bg-gray-600 text-center rounded-lg '>25 <span className='block'>Hours</span> </span>
                  <span className='p !leading-normal tablet:!text-[13px] mobile:text-[8px] mx-1 !font-medium text-white tablet:w-16 mobile:w-12 p-2 inline-block bg-gray-600 text-center rounded-lg '>18 <span className='block'>Minutes</span> </span>
                  <span className='p !leading-normal tablet:!text-[13px] mobile:text-[8px] mx-1 !font-medium text-white tablet:w-16 mobile:w-12 p-2 inline-block bg-gray-600 text-center rounded-lg '>24 <span className='block'>Seconds</span> </span>
                </div>
            </div>
            {/* ====== Counter End ===== */}
            {/* ====== Product Start ===== */}
            <div className='tablet:w-[70%] border c-flex flex-wrap p-4 rounded-r-md border-gray-300 box-border'>
             <ProductPart img={'./images/product/p.jpg'} price={'14%'} text={'Smart Watch'}/>
             <ProductPart img={'./images/product/p2.png'} price={'16%'} text={'Panjabi'}/>
             <ProductPart img={'./images/product/p3.jpg'} price={'35%'} text={'Dell laptop'}/>
             <ProductPart img={'./images/product/p4.jpg'} price={'15%'} text={'T-Shirt'}/>
             <ProductPart img={'./images/product/p5.jpg'} price={'20%'} text={'Monitor'}/>
            </div>
            {/* ====== Product End ===== */}
          </div>
       </div>
    </div>
  )
}

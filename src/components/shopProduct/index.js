import React, { useEffect, useState } from 'react'
import AllProduct from '../product'
import SearchFilter from '../searchFilter'
import { RiLayoutGridFill } from 'react-icons/ri';
import { FaThList } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function ShopProduct() {
  let [searchFilter,setSearchFilter] = useState(false)
  let [deviceWidth,setDeviceWidth] = useState(window.innerWidth)
  
  useEffect(()=>{
    function handleResize(){
      setDeviceWidth(window.innerWidth);
     }

     window.addEventListener('resize',handleResize)

     return () => {
      window.removeEventListener('resize', handleResize);
    };
 
    },[])
    useEffect(()=>{
      if(deviceWidth>599){
        setSearchFilter(true)
      }
    })
  return (
    <div className='container'>
        <div className='smtablet:c-flex !items-stretch mt-5'>
        {searchFilter &&  <div className='bg-gray-200 smtablet:w-1/5 mobile:w-full left-0 z-[9999] smtablet:h-auto mobile:h-[500px] smtablet:relative mobile:fixed bottom-0 scroll-m-0 overflow-y-scroll'>
            <p  className='p c-flex px-5 text-[#ffffff] z-50 !items-end py-2 bg-main '><span>Search Filter</span> 
            {deviceWidth<600 &&
            <span ><AiOutlineCloseCircle onClick={()=>setSearchFilter(!searchFilter)}/></span> }
            </p>
           <SearchFilter/>
            </div> }
            <div className='tablet:w-4/5 mobile:w-full pl-5'>
              <p className='text-right smtablet:hidden p pb-1'><span onClick={()=>setSearchFilter(!searchFilter)}>Filter</span></p>
              <div className='border-y border-gray-300 py-2 c-flex mb-5'>
                 <p className='p !text-sm !font-bold text-text'><span className='!font-normal'>12,911 items</span> in Mobile accessory  </p>
                  <span>
                    <span className='mr-2 cursor-pointer hover:text-main duration-300 ease-in-out text-HalfColor !text-lg'><RiLayoutGridFill className="inline-block"/></span>
                    <span className='pl-2 cursor-pointer hover:text-main duration-300 ease-in-out text-HalfColor !text-lg border-l border-gray-300'><FaThList className="inline-block "/></span>
                  </span>
              </div>
              {/* All product component start */}
              <AllProduct/>
              {/* All product component end */}
            </div>
        </div>
    </div>
  )
}

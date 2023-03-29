import React from 'react'
import { BsFillEyeFill } from 'react-icons/bs';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function ShopProductGrid(props) {
  return (
    <>
      <div className='smtablet:w-full  smtablet:c-flex mobile:inline-block card border border-gray-200 mb-3 hover:shadow-lg duration-300 ease-in-out p-2 relative'>
        <span className='absolute top-5 right-10 cursor-pointer text-2xl hover:text-main duration-300 ease-in-out'><AiOutlineHeart className='inline-block'/></span>
        {/* product image start */}
        <div className='smtablet:w-1/5'>
            <img className='w-full block ' src={props.img}/>
        </div>
        {/* product image end */}
        {/* product Deatails start */}
        <div className='smtablet:w-4/5 px-5'>
            <h2 className='p tablet:!text-lg mobile:text-sm tablet:pt-0 mobile:pt-3 text-text !font-medium'>{props.name}</h2>
            <h4 className='p pt-2 tablet:!text-xl  text-text !font-bold'>${props.d_price ? props.d_price : props.r_price} <del className='tablet:pl-0 mobile:!pl-3 !text-sm tablet:!text-xl mobile:text-xs text-gray-400 !font-bold'>{props.d_price && "$"+props.r_price}</del> </h4>
            <div className='py-1'>
              <span className='text-[#FF9017] tablet:!text-sm  mobile:text-xs'><AiFillStar className='inline-block'/><AiFillStar className='inline-block'/><AiFillStar className='inline-block'/><AiFillStar className='inline-block'/><AiFillStar className='inline-block'/>
              <span className='p inline-block tablet:!text-sm  mobile:text-xs text-HalfColor pl-1'>5</span>
              </span>
              <span className='p tablet:inline-block !text-sm  tablet:!text-sm  mobile:!text-xs text-[#8B96A5] tablet:pl-10 mobile:pl-1'>Order {props.totalOrder}</span>
              <span className='p !text-sm  tablet:!text-sm tablet:inline-block  mobile:!text-xs text-main tablet:pl-10 mobile:pl-2'>{props.sphingType}</span>
            </div>
            <p className='p !text-sm text-[#505050] !font-normal  tablet:!text-sm  mobile:!text-xs tablet:block mobile:hidden'>{props.info}</p>
            <Link to={'/add-to-card'} className='p tablet:pt-5 inline-block !text-sm text-main hover:text-text duration-300 ease-in-out'>View Details <BsFillEyeFill className='!inline tablet:ml-2 mobile:ml-1 tablet:!text-2xl mobile:text-lg'/></Link>
        </div>
        {/* product Deatails end */}
      </div>
    </>
  )
}

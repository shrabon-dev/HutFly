import React from 'react'
import { AiOutlineHeart,AiFillEye } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function RecommendedGrid(props) {
  return (
         <>
        <div className='tablet:w-[23%] mobile:w-[45%] border border-gray-300 p-3 font-inter rounded-lg group'>
                    {/* Image part Start */}
                     <div className='w-full block tablet:h-52 smtablet:h-48 overflow-hidden '>
                        <picture>
                            <img className='w-full h-full block group-hover:scale-125 scale-100 duration-300 ease-in-out' src={props.img} alt='product image'/>
                        </picture>
                     </div>
                    {/* Image part End */}
                    {/* Price and name start */}
                    <div className='pt-10 '>
                        <p className='tablet:p mobile:text-base pb-2 !font-bold text-text'>{props.name}</p>
                        <div className='c-flex'>
                          <p className='p text-text'>${props.price}</p>
                           {/* <span><AiOutlineHeart/></span>
                           <span><BsCartCheck/></span> */}
                           <Link to={props.productLink}><span className='p-1 group-hover:opacity-100 opacity-0 inline-block rounded-sm text-HalfColor hover:text-main duration-500 ease-in-out cursor-pointer text-lg'><AiFillEye/></span></Link>
                          {/* <span className='flex justify-between rounded-lg overflow-hidden bg-main text-white'>
                             <button className='w-10 text-center  bg-[#0e7cd1] p-1 p !text-xl cursor-pointer'>-</button>
                             <span className='text-center p-1 p !text-base '>Add</span>
                             <button className='w-10 text-center  bg-[#0e7cd1] p-1 p !text-xl cursor-pointer'>+</button>
                          </span> */}
                        </div>
                    </div>
                    {/* Price and name end */}
        </div>
    </>
  )
}

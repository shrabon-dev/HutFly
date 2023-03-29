import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'

export default function SaveProduct(props) {
  return (
    <>
   <div className='tablet:w-[23%] mobile:w-[45%] border border-gray-300 p-3 font-inter rounded-lg group'>
                    {/* Image part Start */}
                     <div className='w-full block tablet:h-52 mobile:h-32 overflow-hidden '>
                        <picture>
                            <img className='w-full h-full block group-hover:scale-125 scale-100 duration-300 ease-in-out' src={props.img} alt='product image'/>
                        </picture>
                     </div>
                    {/* Image part End */}
                    {/* Price and name start */}
                    <div className='pt-10 '>
                        <p className='tablet:p mobile:text-xs pb-2 !font-bold text-text'>{props.name}</p>
                        <div className='c-flex'>
                          <p className='p text-text tablet:text-base mobile:text-sm'>${props.price}</p>
                           {/* <span><AiOutlineHeart/></span>
                           <span><BsCartCheck/></span> */}
                           <a href={props.productLink}><span className='p-1 p group-hover:opacity-100 opacity-0 inline-block rounded-sm text-main hover:text-main duration-500 ease-in-out cursor-pointer tablet:w-auto mobile:w-full mobile:text-xs'><BsCartPlusFill className="inline"/> Move to cart</span></a>
                        </div>
                    </div>
                    {/* Price and name end */}
        </div>
    </>
  )
}

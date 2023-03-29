import React from 'react'

export default function ProductPart(props) {
  
  return (
    <>
        <a href='#' className='tablet:w-1/5 mobile:w-1/2 inline-block tablet:mb-0 mobile:mb-10'>
            <div className='w-full group'>
                <div className='overflow-hidden tablet:w-36 mobile:w-full h-32 box-border c-flex border-gray-300 mb-2 border'>
                    <img className='w-full group-hover:scale-125 ease-in-out duration-300 block scale-100' src={props.img} alt='product image'/>
                </div>
                <div className='text-center'>
                  <p className='p mb-2'>{props.text}</p>
                  <p className='p bg-red-200 py-1 rounded-full inline-block m-auto px-4 text-red-700'>{props.price}</p>
                </div>
            </div>
        </a>
    </>
  )
}

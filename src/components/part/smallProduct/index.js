import React from 'react'

export default function SmallProductGrid(props) {
  return (
    <>
        <a href='#' className='tablet:w-1/4'>
            <div className='w-full c-flex !items-start group p-5 box-border border-l border-t border-gray-300 '>
                <div className=' w-[104px]'>
                    <p className='p !text-xl mb-2 !font-medium'>{props.text}</p>
                    <p className='p !text-sm !font-medium py-1 rounded-full inline-block m-auto text-HalfColor'>From <span className='block'>$ {props.price}</span></p>
                </div>
                <div className='overflow-hidden w-[80px] h-24 text-right block box-border c-flex'>
                    <img className='w-full group-hover:scale-125 ml-auto h-auto ease-in-out duration-300 block scale-100' src={props.img} alt='product image'/>
                </div>
            </div>
        </a>
    </>
  )
}

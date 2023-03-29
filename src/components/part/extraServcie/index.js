import React from 'react'
import { TbHandClick } from 'react-icons/tb';

export default function ExtraServiceGrid(props) {
  return (
          <div className='tablet:w-[23%] mobile:w-[45%] border border-gray-300 rounded-t-lg overflow-hidden'>
              <div className='image w-full relative'>
              <span className='w-full h-full bg-[#0000006c] absolute top-0'></span>
              <picture>
                <img className='w-full block ' src={props.img} alt={props.img}/>
              </picture>
                <a href={props.url} className='w-10 h-10 bg-main absolute bottom-0 right-5 translate-y-1/2 border-4 border-white rounded-full inline-flex justify-center items-center text-white '><TbHandClick /></a>
              </div>
              <div className='p-3 '>
                <h6 className='p !text-lg !font-medium py-2 pr-10'>{props.name}</h6>
              </div>
          </div> 
        )
}

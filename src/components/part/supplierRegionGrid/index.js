import React from 'react'
import { TbHandClick } from 'react-icons/tb';

export default function SupplierRegionGrid(props) {
  return (
          <div className='tablet:w-1/6 mobile:w-[45%]'>
              <div className='image w-full'>
                <a href={props.url} className='c-flex'>
                  <picture>
                    <img className='w-10 block ' src={props.img} alt={props.img}/>
                  </picture>
                  <div className='p-3 '>
                    <h6 className='p tablet:!text-lg mobile:text-base !font-medium'>{props.name}</h6>
                    <h6 className='p tablet:!text-sm mobile:text-xs !font-normal pt-1'>{props.name}</h6>
                  </div>
                </a>
              </div>
        
          </div> 
        )
}

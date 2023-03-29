import React from 'react'
import { TfiAngleRight } from 'react-icons/tfi';

export default function Breadcrumb (props) {
  return (
    <>
        <div className='container'>
            <p className='p tablet:!text-sm mobile:text-xs text-HalfColor'>
                <a href='#' className='hover:text-main duration-300 ease-in-out'><span>Home <TfiAngleRight className='inline-block'/> </span></a>
                <a href='#' className='hover:text-main duration-300 ease-in-out'><span>Clothings <TfiAngleRight className='inline-block'/> </span></a>
                <a href='#' className='hover:text-main duration-300 ease-in-out'><span>Men’s wear <TfiAngleRight className='inline-block'/> </span></a>
                <a href='#' className='hover:text-main duration-300 ease-in-out'><span>{props.currentPage}</span></a>
            </p>
        </div>
    </>
  )
}

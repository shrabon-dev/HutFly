import React from 'react'
import { BsSearch } from 'react-icons/bs';
import ExtraServiceGrid from '../part/extraServcie';

export default function ExtraService() {
  return (
    <div className='container py-10'>
         <h3 className='p !text-2xl !font-bold pb-5'>Our extra services</h3>
        <div className='c-flex gap-3 flex-wrap'>
            {/* extra servces Start */}
             <ExtraServiceGrid img={'./images/extraService/image 104.png' } name={'ABC Product'} url={'www.blog.com'}/>
             <ExtraServiceGrid img={'./images/extraService/image 106.png' } name={'EFD Product'} url={'www.blog.com'}/>
             <ExtraServiceGrid img={'./images/extraService/image 107.png' } name={'KJL Product'} url={'www.blog.com'}/>
             <ExtraServiceGrid img={'./images/extraService/image 108.png' } name={'NMJ Product'} url={'www.blog.com'}/>          
            {/* extra servces End */}
        </div>
    </div>
  )
}

import React from 'react'
import SupplierRegionGrid from '../part/supplierRegionGrid'


export default function SupplierRegion() {
  return (
    <div className='container py-10'>
    <h3 className='p !text-2xl !font-bold pb-5'>Suppliers by region</h3>
         <div className='c-flex tablet:gap-3 flex-wrap'>
            {/* extra servces Start */}
                <SupplierRegionGrid img={'./images/country/icon.png' } name={'ABC Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c2.png' } name={'EFD Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c3.jfif' } name={'KJL Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c4.png' } name={'NMJ Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c5.png' } name={'ABC Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c7.png' } name={'EFD Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c6.jfif' } name={'KJL Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c4.png' } name={'NMJ Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/c2.png' } name={'KJL Product'} url={'www.blog.com'}/>
                <SupplierRegionGrid img={'./images/country/icon.png' } name={'NMJ Product'} url={'www.blog.com'}/>
            {/* extra servces End */}
          </div>
    </div>
  )
}

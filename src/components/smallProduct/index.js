import React from 'react'
import SmallProductGrid from '../part/smallProduct'

export default function SmallProduct() {
  return (
    <div>
        {/* Small Product Start */}
          <div className='container py-10'> 
             <div className='tablet:c-flex mobile:block flex-wrap !items-stretch border border-gray-300 rounded-md'>
                   <div className='tablet:w-1/4 bg-cover bg-no-repeat bg-center p-10' style={{ backgroundImage: "url(./images/smallProduct/banner2.png)"}}>
                      <h2 className='p !font-bold !text-3xl text-text mb-6'>Home and outdoor</h2>
                      <a className='a-button  mt-5' href='#'>Source Now</a>
                   </div>
                   <div className='tablet:w-3/4 mobile:block'>
                       <div className='row_one tablet:c-flex mobile:block flex-wrap w-full'>
                        <SmallProductGrid img={'./images/product/c (4).jpg'} price={'100'} text={'Punjabi'}/>
                        <SmallProductGrid img={'./images/product/c (5).jpg'} price={'314'} text={'PC'}/>
                        <SmallProductGrid img={'./images/product/c (6).jpg'} price={'124'} text={'Desktop'}/>
                        <SmallProductGrid img={'./images/product/c (7).jpg'} price={'14'} text={'Shirt'}/>
                       </div>
                       <div className='row_one  tablet:c-flex mobile:block flex-wrap w-full'>        
                        <SmallProductGrid img={'./images/product/c (2).jpg'} price={'314'} text={'PC'}/>
                        <SmallProductGrid img={'./images/product/c (1).jpg'} price={'14'} text={'Shirt'}/>
                        <SmallProductGrid img={'./images/product/c (5).jpg'} price={'100'} text={'Punjabi'}/>
                        <SmallProductGrid img={'./images/product/c (11).jpg'} price={'124'} text={'Desktop'}/>
                       </div>
                   </div>
             </div>
          </div>
        {/* Small Product End */}
    </div>
  )
}

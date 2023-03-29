import React from 'react'
import RecommendedGrid from '../part/recommended'

export default function RelatedProduct() {
  return (
    <>
     <div className='container pb-32'>
        {/* realted product start */}
          <div>
              <h3 className='p !text-lg text-text !font-semibold py-5'>Related Product</h3>
          </div>
          <div className='c-flex gap-4 flex-wrap'>
            <RecommendedGrid img={'./images/product/c (7).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>      
            <RecommendedGrid img={'./images/product/c (1).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
            <RecommendedGrid img={'./images/product/c (2).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
            <RecommendedGrid img={'./images/product/c (3).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/> 
          </div>
        {/* realted product end */}
     </div>
    </>
  )
}

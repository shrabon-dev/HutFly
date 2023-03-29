import React from 'react'
import SaveProduct from '../part/saveProduct'

export default function SaveForLater() {
  return (
    <>
    <div className='container'>
        <div>
            <h6 className='p !text-xl text-text !font-semibold pb-5'>Save For Later</h6>
            {/* Save Product start */}
             <div className='c-flex gap-4 flex-wrap pb-10'>
                <SaveProduct img={'./images/product/c (1).png' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (1).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (2).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (3).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (4).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (5).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (6).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
                <SaveProduct img={'./images/product/c (7).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'www.product.com'}/>
             </div>
            {/* Save Product end */}
        </div>
    </div>
    </>
  )
}

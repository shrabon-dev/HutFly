import React from 'react'
import { AiOutlineHeart,AiFillEye } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import RecommendedGrid from '../part/recommended';

export default function Recommended() {
  return (
    <div>
        <div className='container py-10'>
            <h3 className='p !text-2xl !font-bold pb-5'>Recommended Product</h3>
             <div className='c-flex gap-4 flex-wrap'>
            {/* Product Grid Start */}
                <RecommendedGrid img={'./images/product/c (1).png' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (1).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (2).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (3).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (4).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (5).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (6).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
                <RecommendedGrid img={'./images/product/c (7).jpg' } name={'STANLEY STPP7502 750W 2mm Planer'} price={'25.00'} productLink={'/add-to-card'}/>
            {/* Product Grid End */}
             </div>
        </div>
    </div>
  )
}

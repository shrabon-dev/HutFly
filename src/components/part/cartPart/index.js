import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function CartPart(props) {
  return (
    <>
        <div>
            <div className='tablet:c-flex !items-stretch !justify-start gap-3 border-b pt-4'>
                <div className='c-flex tablet:w-3/5'>
                    <div className='tablet:w-1/3 mobile:w-1/2 mobile:block'><picture><img className='w-full block' src={props.img} alt='country'/></picture></div>
                    <div className='tablet:w-2/3 mobile:w-1/2 pl-5'>
                        <h4 className='p !font-semibold laptop:!text-lg mobile:text-xs'>{props.name}</h4>
                        <p className='p text-HalfColor pt-1'>
                            <span className='p tablet:!text-sm mobile:text-xs text-HalfColor pr-2'>Size:  <span className='!text-main'>{props.size}</span> </span>
                            <span className='p tablet:!text-sm mobile:text-xs text-HalfColor pr-2'>Color:  <span className='!text-main'>{props.color}</span> </span>
                            <span className='p tablet:!text-sm mobile:text-xs text-HalfColor pr-2'>Material:  <span className='!text-main'>{props.material}</span></span>
                            <span className='p tablet:!text-sm mobile:text-xs text-HalfColor pr-2'>Seller: <span className='!text-main'>{props.saller}</span></span>
                        </p>
                    </div>
                </div>
                <div className='tablet:w-2/5 laptop:pl-10 tablet:pl-0 mobile:pl-5 c-flex !items-stretch'>
                  <div className=''>
                        <div>
                            <span className='p text-text tablet:!text-base mobile:text-sm !font-semibold'>Total :</span>
                            <span className='p text-HalfColor tablet:!text-base mobile:text-sm !font-semibold pl-2'>{props.total}</span>
                        </div>
                        <div className='pt-2'>
                            <span className='p text-text tablet:!text-base mobile:text-sm !font-semibold'>Qty :</span>
                            <span className='p text-HalfColor tablet:!text-base mobile:text-sm !font-semibold pl-2'>
                                <button className='p p-3 w-10 h-10 border rounded-md c-flex laptop:!text-2xl tablet:!text-xl hover:bg-gray-400 duration-300 ease-in-out !items-center !justify-center !inline-flex laptop:mr-2'>-</button>
                                <input type={'number'} value={props.qty} className="laptop:w-[70px]  tablet:w-14 mobile:w-16 h-10 border outline-none laptop:p-3 tablet:p-2 mobile:p-1 !border-gray-300 rounded p"/>
                                <button className='p p-3 w-10 h-10 border rounded-md c-flex laptop:!text-2xl tablet:!text-xl hover:bg-gray-400 duration-300 ease-in-out !items-center !justify-center !inline-flex laptop:ml-2'>+</button>
                            </span>
                        </div>
                  </div>
                  <div>
                     <button className='p  w-10 h-10  text-red-600 rounded-md c-flex !text-xl hover:bg-red-200 duration-300 ease-in-out !items-center !justify-center !inline-flex ml-2'> <RiDeleteBinLine className="inline"/> </button>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

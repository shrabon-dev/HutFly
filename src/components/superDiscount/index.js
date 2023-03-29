import React from 'react'

export default function SuperDiscount() {
  return (
    <>
        <div className='container !mb-12'>
            <div className='w-full bg-main rounded-lg p-5 c-flex after:content-[""] relative after:w-1/3 after:rotate-6 after:h-40 after:z-10 z-0 after:right-0 overflow-hidden after:absolute  after:bg-[#005ADE] '>
                <div className='w-2/3'>
                    <h6 className='p smtablet:!text-2xl mobile:text-base text-white !font-medium'>Super discount on more than 100 USD</h6>
                    <p className='p mobile:text-xs text-white'>Have you ever finally just write dummy info</p>
                </div>
                <div className='w-1/3 z-20 text-right'>
                    <a href='#' className='smtablet:p-2 mobile:p-1 rounded-lg bg-yellow-500 text-white'>Shop Now</a>
                </div>
            </div>
        </div>
    </>
  )
}

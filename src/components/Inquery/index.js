import React from 'react'

export default function Inquery() {
  return (
    <>
        <div className='container py-10'>
             <div className='bg-no-repeat bg-cover' style={{ backgroundImage:"url(../images/inquery/i.png)" }}>
                  <div className='bg-gradient-to-r from-[#3086F2] to-[#3794f18a] tablet:p-10 mobile:p-5 rounded-lg'>
                    <div className='tablet:c-flex mobile:block !items-start'>
                        <div className='tablet:w-1/3'>
                            <h6 className='p !text-3xl !font-bold text-white leading-loose'>An easy way to send requests to all suppliers</h6>
                            <p className='p !text-sm pt-4 text-white leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        {/* Inquery Form Start */}
                         <div className='tablet:w-2/3'>
                               <form className='tablet:w-3/5 bg-white tablet:p-7 mobile:p-3 rounded-lg ml-auto tablet:mt-0 mobile:mt-5'>
                                <h6 className='p !text-lg !text-text !font-bold'>Send quote to suppliers</h6>
                                <div>
                                    <label className='p text-text !text-base mt-2'>
                                        What item you need?
                                    </label>
                                   <input  className='border-b p-2 focus:outline-none border-gray-300 block' />
                                </div>
                                <div className='mt-4'>
                                    <label className='p text-text !text-base'>
                                        Quantity
                                    </label>
                                    <select  className='border-b p-2 focus:outline-none border-gray-300 ml-5' >
                                        <option>1 pcs</option>
                                        <option>5 pcs</option>
                                        <option>10 pcs</option>
                                    </select>
                                </div>
                                 <button className='inputButtonCss !py-2 mt-10 !rounded-lg'>Send Inquery</button>

                               </form>
                         </div>
                        {/* Inquery Form End */}
                    </div>
                  </div>
             </div>
        </div>
    </>
  )
}

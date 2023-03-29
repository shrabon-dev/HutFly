import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'

export default function NewsLetter() {
  return (
    <div className='bg-gradient-to-r  from-[#0062ad] to-main w-full py-16 text-center'>
        <div className='container'>
            <h4 className='text-white p !text-4xl !font-bold '>Subscribe on our newsletter</h4>
            <p className='text-[#d1d1d1] p py-2'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <form className='c-flex !justify-center mt-5'>
                <label className='p c-flex p-2 -mr-10 !h-12 rounded-l-lg  text-HalfColor z-30'> <AiOutlineMail className='inline-block' /></label>
                <input className='inputCss tablet:!w-96 mobile:w-52 !pl-10 !rounded-lg !h-12 border-none z-10' type={'email'} placeholder={'Mail here...'}/>
                <button className='p py-2 tablet:px-4 mobile:px-2 rounded-lg !h-12  bg-gradient-to-t  from-[#0062ad] to-main ml-6 text-white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

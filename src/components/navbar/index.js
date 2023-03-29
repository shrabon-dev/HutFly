import React from 'react'
import Header from '../header'
import MenuBar from '../menubar'

export default function Navbar() {
  return (
    <div className='sticky top-0 pt-5 bg-white z-[999999999]'>
      <div className='container'>
        <Header/>
        <MenuBar/>
      </div>
    </div>
  )
}

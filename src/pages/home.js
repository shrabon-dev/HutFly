import React from 'react'
import Banner from '../components/banner'
import DealsAndOffer from '../components/deals'
import ExtraService from '../components/extraService'
import Footer from '../components/footer'
import Header from '../components/header'
import Inquery from '../components/Inquery'
import Navbar from '../components/navbar'
import NewsLetter from '../components/newsletter'
import Recommended from '../components/Recommended'
import SmallProduct from '../components/smallProduct'
import SmallProductTwo from '../components/smallProductTwo'
import SupplierRegion from '../components/supplier'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <DealsAndOffer/>
        <SmallProduct/>
        <SmallProductTwo/>
        <Inquery/>
        <Recommended/>
        <ExtraService/>
        <SupplierRegion/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

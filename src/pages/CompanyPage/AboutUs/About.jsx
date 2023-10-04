import React from 'react'
import { Header } from '../../../components/Header/Header'
import { Footer } from '../../../components/Footer/Footer'
import { AboutHero } from './Components/AboutHero'
import { AboutBody } from './Components/AboutBody'

const AboutPage = () => {
  return (
    <div>
        <Header/>
        <AboutHero/>
        <AboutBody/>
        <Footer/>
    </div>
  )
}

export default AboutPage
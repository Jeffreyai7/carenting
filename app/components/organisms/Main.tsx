import React from 'react'
import Logistics from '../molecules/Logistics'
import Faq from '../molecules/Faq'
import DownloadApp from './DownloadApp'
import Chooseus from '../molecules/Chooseus'
import Fleet from '../molecules/Fleet'
import Hero from '../molecules/hero'

const MainContent = () => {
  return (
    <main>
        <Hero/>
        <Logistics/>
        <Fleet/>
        <Chooseus/>
        <Faq/>
        <DownloadApp/>
    </main>
  )
}

export default MainContent;
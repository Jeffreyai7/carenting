import React from 'react'
import NavBar from '../organisms/NavBar'
import Footer from '../organisms/Footer';

interface Template{
    children: React.ReactNode;
  };

const Maintemplate = ({children}: Template) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Maintemplate
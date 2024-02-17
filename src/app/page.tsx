import React from 'react'
import NavBar from './header/NavBar';
import Landing from './Container/Landing'
import Marquee from './Container/Marque'
import Details from './Container/Details'
function page() {
  return (
    <div className='w-full h-screen text-white bg-zinc-900'>
        <NavBar/>
        <Landing/>
        <Marquee/>
        <Details/>
        
        

    </div>
  )
}

export default page
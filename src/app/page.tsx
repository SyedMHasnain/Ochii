import React from 'react'
import NavBar from './header/NavBar';
import Landing from './Container/Landing'
import Marquee from './Container/Marque'
function page() {
  return (
    <div className='w-full h-screen text-white bg-zinc-900'>
        <NavBar/>
        <Landing/>
        <Marquee/>
        

    </div>
  )
}

export default page
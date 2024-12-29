import React from 'react'

const Navbar = () => {
  return (
    (<div className='mt-4 z-50 p-2 h-10 w-full fixed top-0 flex justify-center items-center bg-transparent'>
        <div className="absolute top-0 lg:h-12 lg:w-36 md:h-12 md:w-36 sm:h-8 sm:w-24">
        <img
          src="/Assets/logo.png"
          alt="logo"
          className="lg:h-12 lg:w-36 md:h-12 md:w-36 sm:h-8 sm:w-24"
        />
      </div>
    </div>)
  )
}

export default Navbar
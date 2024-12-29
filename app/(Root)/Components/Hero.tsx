import React from 'react'

const Hero = () => {
  return (
    <div className=" h-[280px] w-full flex flex-col justify-center bg-cover items-start text-white p-1 lg:h-[430px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1731902062648-260a1b5067a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D)'}}>
        <h1 className='text-xl ml-4 lg:font-bold sm:font-extrabold text-black'>
            Movie Name
        </h1>
        <p className='text-black sm:text-[12px] sm:max-w-[250px] sm:font-extralight lg:font-normal lg:text-[16px] lg:mt-3 lg:max-w-[550px] ml-4 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus tempora facilis impedit consequuntur provident 
            adipisci a? Fuga optio ad est. Reiciendis quasi in 
        </p>
        <div className='flex flex-row mt-4 ml-4 gap-1'>
            <button className='btn'>
                Play
            </button>
            <button className='btn'>
                Add to Watchlist
            </button>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Link from 'next/link'

const Paralx = ({heading,text}: {heading: string,text: string}) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/*Dark overlay on background */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2] '/>
      
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
          
        <h2 className='text-5xl font-bold'>{heading}</h2>
          
        <p className='py-5 text-xl'>{text}</p>
          
        <Link href="/contact">
          <button className='px-8 py-2 border'>random button</button>
        </Link>
          
      </div>  
    </div>
  )
}

export default Paralx
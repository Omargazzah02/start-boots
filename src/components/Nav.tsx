import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <nav  className='flex justify-between  bg-white  fixed top-0 left-0 w-full z-50 '  >
            <div  className="flex  justify-around  items-center w-[50%]" >
<Link href ="/">
<img src="/images/logo.png" alt="" className='w-60' />
</Link>       
         <a href="" className=' text-gray-600'>Themes</a>
          <a href="" className=' text-gray-600'>Templlates</a>
          <a href="" className=' text-gray-600'>Bundles</a>
          <a href="" className=' text-gray-600'>Forms</a>
          <a href="" className=' text-gray-600'>Resources</a>

   




            </div>

      


            <div  className="flex  justify-between  items-center w-[15%]   pr-11 text-gray-600">
    
          <a href="">Blog</a>
          <button   className='bg-[#DD3D31]  w-20 h-10 rounded-md text-white hover:bg-[#BB3026]'>Login</button>
         
</div>



            
        </nav>
    )
}

export default Nav

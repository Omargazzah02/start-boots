import Link from 'next/link'
import React from 'react'

function Themes() {
    return (
        <div className='w-full h-full flex lg:flex-wrap  gap-4  lg:justify-center items-center  flex-col  lg:flex-row  '>




          
<div className='lg:w-[30%] h-44 w-[90%]  mt-48 '>
<Link href="/theme">

                <img src="images/themes/sb-admin-pro.jpg" alt=""  className='rounded-3xl  shadow-md hover:shadow-lg hover:-translate-y-1 transition transform duration-300 hover:cursor-pointer ' />
    </Link>
            <br />
              <div className='flex justify-between '>

                <div>
                    <p>SB Admin Pro</p>
                    <p className="text-gray-500">A free Bootstrap admin theme                    </p>
                </div>
                <div>
                    <p className='bg-green-100 text-green-600 text-center rounded-xl'>Free </p>
                    <p>5,423</p>
                </div>
              </div>

            </div>



                      
            <div className='lg:w-[30%] h-44 w-[90%]  mt-48 '>
<Link href="/theme">

                <img src="images/themes/freelancer.jpg" alt=""  className='rounded-3xl  shadow-md hover:shadow-lg hover:-translate-y-1 transition transform duration-300 hover:cursor-pointer ' />
    </Link>
            <br />
              <div className='flex justify-between '>

                <div>
                    <p>Freelancer                    </p>
                    <p className="text-gray-500">A free Bootstrap admin theme                    </p>
                </div>
                <div>
                    <p className='bg-green-100 text-green-600 text-center rounded-xl'>Free </p>
                    <p>1,232,558</p>
                </div>
              </div>

            </div>


                      
            <div className='lg:w-[30%] h-44 w-[90%]  mt-48 '>
<Link href="/theme">

                <img src="images/themes/creative.jpg" alt=""  className='rounded-3xl  shadow-md hover:shadow-lg hover:-translate-y-1 transition transform duration-300 hover:cursor-pointer ' />
    </Link>
            <br />
              <div className='flex justify-between '>

                <div>
                    <p>Creative</p>
                    <p className="text-gray-500">A free Bootstrap admin theme                    </p>
                </div>
                <div>
                    <p className='bg-green-100 text-green-600 text-center rounded-xl'>Free </p>
                    <p>1,076,054</p>
                </div>
              </div>

            </div>
       






            
                             

    
                    





         
            
        </div>
    )
}

export default Themes

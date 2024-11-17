import React from 'react'

function Introduction() {
    return (
<div>
<div className='Intro flex  lg:pt-32 pt-28 px-16'>
            <div className='lg:w-[60%] w-full'>
                <h1 className='lg:text-4xl font-bold text-3xl '>
                Bootstrap themes, templates, and UI tools to help you <span className='text-[#DD3D31]'>start your next project!</span>
                </h1>
                <p className='text-lg'>
                Start Bootstrap creates free, open source, MIT license, Bootstrap themes, templates, and code snippets for you to use on any project, guides to help you learn more about designing and developing with the Bootstrap framework, and premium Bootstrap UI products.
                </p>
                <button   className='bg-[#DD3D31]  w-72 h-10 rounded-md text-white hover:bg-[#BB3026] mt-7'>Browse Templates & Themes </button>
                 </div>
            

        <img src="/images/tabs-photo.svg" alt="" className='w-[40%] hidden lg:block'  />

      
    </div>
    <hr className="my-4 border-gray-300  mx-auto w-[90%]"  />
    </div>


        
    )
}

export default Introduction

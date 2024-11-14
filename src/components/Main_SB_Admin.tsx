import Link from 'next/link'
import React from 'react'

function Main_SB_Admin() {
    return (
        <div className='w-full flex justify-center Intro  pt-32 px-16'>

            <div className='w-[70%] gap-2'>
                <img src="/images/photo-theme.png" alt=""  className='w-full'  />


                <h1 className='text-2x mt-7 text-2xl' >Description</h1>
<p className='text-gray-500'>SB Admin 2 is a free, open source, Bootstrap 4 based admin theme perfect for quickly creating dashboards and web applications. It's modern design style with subtle shadows and a card-based layout could be described as flat material, and is inspired by the principles of material design along with a simple, attractive color system.</p>
<h1 className='text-2x mt-7 text-2xl' >Features</h1>

<ul className="list-disc pl-6">
<li className="text-gray-500 ">A modern, material design inspired layout</li>
  <li className="text-gray-500 ">Focus on utility classes to minimize CSS bloat</li>
  <li className="text-gray-500 ">Custom card and button components</li>
  <li className="text-gray-500 ">Custom utility classes for extended functionality</li>
  <li className="text-gray-500 ">Layout built using flexbox for seamless responsive behavior</li>
  <li className="text-gray-500 ">Intuitive collapsable sidebar and top bar navigation structure</li>
  <li className="text-gray-500 ">Built using SASS for customization of Bootstrap default SASS variables</li>
  <li className="text-gray-500 ">Includes dependency management using npm</li>
  <li className="text-gray-500 ">Advanced workflow environment based on npm and Gulp with live reloading via browserSync</li>
  <li className="text-gray-500 ">Chart.js interactive responsive charts</li>
  <li className="text-gray-500 ">dataTables sortable, searchable tables</li>
  <li className="text-gray-500 ">Minimal use of jQuery and JavaScript to make it easier to rewrite using JS frameworks</li>
  <li className="text-gray-500 ">Latest Font Awesome 5 (free version)</li>

</ul>
            </div>

            <div className='w-[30%] m-8 gap-2 flex flex-col justify-center '>
        <h1 className='text-2xl'>SB Admin 2
        </h1>

        <p className='text-gray-500'>A free Bootstrap 4 admin theme built with HTML/CSS and a modern development workflow environment ready to use to build your next dashboard or web application</p>

<br /><br /><br />

<button className='bg-[#DD3D31] w-[90%] rounded-lg text-white h-14 p-4 '>Free Download</button>
<button className='bg-green-100 w-[90%] rounded-lg text-green-600 h-14'>Upgrade to Pro</button>
<img src="/images/tab1.png" alt="" />

<br />
<br />
<img src="/images/need-photo.png" alt=""  />

            </div>
            
        </div>
    )
}

export default Main_SB_Admin

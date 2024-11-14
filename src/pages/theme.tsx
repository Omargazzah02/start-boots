import Footer from '@/app/components/Footer'
import Main_SB_Admin from '@/app/components/Main_SB_Admin'
import Main_SB_Admin2 from '@/app/components/Main_SB_Admin2'
import Nav from '@/app/components/Nav'
import React from 'react'

function ThemeView() {
    return (
        <div>
            <Nav></Nav>


            <Main_SB_Admin></Main_SB_Admin>
            <br />
            <Main_SB_Admin2></Main_SB_Admin2>

            <Footer></Footer>
            
        </div>
    )
}

export default ThemeView

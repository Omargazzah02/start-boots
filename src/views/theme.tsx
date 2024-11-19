import Footer from '@/components/Footer'
import Main_SB_Admin from '@/components/Main_SB_Admin'
import Main_SB_Admin_Mob from '@/components/Main_SB_Admin-Mob'
import Main_SB_Admin2 from '@/components/Main_SB_Admin2'
import Nav from '@/components/Nav'
import React from 'react'

function ThemeView() {
    return (
        <div>


            <Main_SB_Admin></Main_SB_Admin>
            <br />
            <Main_SB_Admin2></Main_SB_Admin2>
            <Main_SB_Admin_Mob></Main_SB_Admin_Mob>

            
        </div>
    )
}

export default ThemeView

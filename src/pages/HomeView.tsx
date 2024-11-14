import Footer from '@/app/components/Footer'
import Introduction from '@/app/components/Introduction'
import Nav from '@/app/components/Nav'
import Themes from '@/app/components/Themes'
import React from 'react'

function HomeView() {
    return (
    <div>
        <Nav></Nav>
        <Introduction></Introduction>
        <Themes></Themes>

        <Footer></Footer>


    </div>
    )
}

export default HomeView

import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Nav from '@/components/Nav'
import Themes from '@/components/Themes'
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

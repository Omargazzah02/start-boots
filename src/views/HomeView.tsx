import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Event from '@/components/Events'
import Form from '@/components/LoginForm'



import React from 'react'
import AuthForm from '@/components/LoginForm'
import LoginForm from '@/components/LoginForm'

function HomeView() {
    return (
    <div className='w-full'>
       <Nav></Nav>
       <Event></Event>
    <Footer></Footer>


    </div>
    )
}

export default HomeView

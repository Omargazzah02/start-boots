import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Event from '@/components/Events'
import Form from '@/components/LoginForm'



import React from 'react'
import AuthForm from '@/components/LoginForm'
import LoginForm from '@/components/LoginForm'

function LoginView() {
    return (
    <div className='w-full'>
       <Nav></Nav>
      <LoginForm></LoginForm>
    <Footer></Footer>


    </div>
    )
}

export default LoginView

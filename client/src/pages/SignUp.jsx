import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'> 
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5"> 
        {/* left */}
        <div className="flex-1">
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Beginner's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is the Beginner's Demo page from One of the Beginner. 
            You Have Multiple Options to Sign In and Sign Up using Username,
            email and Password or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username' className='ml-2'/>
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' className='ml-2'/>
              <TextInput type='email' placeholder='Email' id='email' />
            </div>
            <div>
              <Label value='Your Password' className='ml-2'/>
              <TextInput type='text' placeholder='Password' id='pasword' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign UP
            </Button>
          </form>
          <div className='gap-2 text-sm mt-5 text-center'>
            <span>Have an account? </span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

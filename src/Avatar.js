import React from 'react'
import image from './assets/profile.JPG'
export default function Avatar() {
  return (
    <>

     <img className='m-auto rounded-full w-24 h-24 border-4 border-gray-300 object-cover ' src={`${image}`}/>
    </>
  )
}

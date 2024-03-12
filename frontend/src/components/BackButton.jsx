import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/'}) => {
  return (
    <div className='flex'>
        <link to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
        >
         <BsArrowLeft className='texrt-2xl' />
        </link>
    </div>
  )
}

export default BackButton

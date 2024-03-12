import React from 'react'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';

const BookModal = ({book, onClose}) => {   //2 props
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 justify-center items-center'
      onClick={onClose}>
        BookModal
        <div
        onClick={(event) => event.stopPropagtion()}
        className='w-[600px] ma-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
   > 
   <AiOutlineEdit
        className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' 
        onClick={onClose}/>
           <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear}</h2>
      <h4 className='my-2 text-gray-500'>
        {book._id}</h4>

      <div className='flex-justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl'/>
        <h2 className='my-1'>{book.title}</h2>
      </div>

      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl'/>
        <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Anything you want to show</p>
        <p className='my-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nulla fugiat asperiores cumque error repudiandae
            dolorum numquam maiores illum quis quae!
            Placeat deserunt delectus incidunt provident eum. Quis
            quidem aliquid repellendus assumenda natus quo fuga vel.
            Accusamus repellat optio sunt repudiandae necessitatibus 
            consectetur, fugit, voluptatibus sequi ex dolorem eveniet
            mollitia temporibus!
        </p>
   </div>
    </div>
  )
}

export default BookModal

import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';   //icons
import { BsINfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { set } from 'mongoose';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');  //table or card format

  useEffect(() =>{
    setLoading(true);
    axios
        .get('http://localhost:5555/books')
        .then((resonse) => {
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) =>{
          console.log(error);
          setLoading(false);
        })
  }, []);   //since the dependency array is empty =  effect should only run once after the initial render of the component
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' 
         onClick={() => setShowType('table')}>
          Table
        </button>
                   
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' 
         onClick={() => setShowType('card')}>
          Card
        </button>
      </div>      

      <div className='flex justify-between items-center'>
    <h1 className='text-3xl my-8'>Books List </h1>
    <link to='/books/create'>
      <MdOutlineAddBox className='text-sky-800 text-4xl'/>
    </link>
    </div>

      {loading ? 
        <Spinner/>       //agar showType =='table' then (<BooksTable/> otherwise <BooksCard/> ko call
       : showType==='table' ? (<BooksTable books={books}/>) : (<BooksCard books={books}/>)
        }
    </div>
  );
};

export default Home



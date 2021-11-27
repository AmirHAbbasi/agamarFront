import React from 'react'
import { useGlobalContext } from '../../ReqBookList'
import { Divider } from 'antd';
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
import './BookList.css';

const BookList = () => {
  const {books, loading} = useGlobalContext();
  console.log(books)
  
  if(loading){
    return <Loader />
  }
  if(books.length < 1){
    return (
      <div className="section"> 
        <Divider>نتیجه ای یافت نشد.</Divider>
      </div>
    )
  }
  return (
    <section className="section"> 
      <div className="section"> 
        <Divider>نتایج</Divider>
      </div>
      <div className="books-center">
        {books.map((item)=>{
            return <BookCard  key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default BookList

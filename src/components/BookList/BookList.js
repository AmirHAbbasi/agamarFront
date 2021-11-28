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
        <Divider>
          <h2>نتیجه ای یافت نشد.</h2>
        </Divider>
      </div>
    )
  }
  return (
    <section> 
      <div> 
      <Divider>
          <h2>نتایج</h2>
        </Divider>
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

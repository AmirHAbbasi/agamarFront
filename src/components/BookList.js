import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Divider, Pagination } from 'antd';
import BookCard from './BookCard';

const BookList = () => {
  const {books, loading} = useGlobalContext();
  //console.log(books)
  
  if(loading){
    return <Loading />
  }
  if(books.length < 1){
    return (
      <h2 className='section-title'>
        کتابی یافت نشد..
      </h2>
    )
  }
  return (
    <section className="section"> 
      <Divider >کتاب</Divider>
      <div className="cocktails-center">
      {books.map((item)=>{
          return <BookCard key={item.id}{...item}/>
        })}
      </div>
      <div className="cocktails-center">
      <Pagination defaultCurrent={1} total={50} />
      </div>
    </section>
  )
}

export default BookList
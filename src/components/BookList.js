import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Divider /*Pagination*/ } from 'antd';
import BookCard from './BookCard';
import 'Home.css'

const BookList = () => {
  const {books, loading} = useGlobalContext();
  console.log(books)
  
  const showResults = (results) => {
    
    return (
      <section className="section"> 
        <div className="section"> 
          <Divider>نتایج</Divider>
        </div>
        <div className="cocktails-center">
          {results.map((item)=>{
              return <BookCard key={item.id}{...item}/>
          })}
        </div>
      </section>
    )
  }
  
  if(loading){
    return <Loading />
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
      <div className="cocktails-center">
        {books.map((item)=>{
            return <BookCard key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default BookList

import React, { useState, useContext, useEffect } from 'react'
//import { useCallback } from 'react'

const url = 'http://127.0.0.1:8000/api/book-list/'
const AppContext = React.createContext()

const AppProvider = ({children}) => { 
  console.log("DS")
  console.log(children.props.results)
  console.log("DS")
  var [loading, setLoading] = useState(true)
  var [books, setBooks] = useState([])
  const showResults = () =>{console.log("HERE4")}
  console.log(children.props.reload)
  if(children.props.reload){
    loading=true
    console.log(children.props.results);
    var newBooks = children.props.results.map((item)=>{
      const {
        id, 
        title, 
        profile_image,
        publisher,
        author,
        created,
        buy,
        owner,
        price
      } = item;
      return{
        id: id, 
        name: title, 
        image: profile_image,
        publisher: publisher,
        author: author,
        date: created,
        type:buy,
        owner: owner,
        price: price
      }
  })
    books=newBooks;
    loading=false
  }
  const fetchBooks = async() => {
    setLoading(true)    
    try {
      
      const response = await fetch(`${url}`)
      const data = await response.json()
      
      if(data){
        
        var newBooks = data.map((item)=>{
            const {
              id, 
              title, 
              profile_image,
              publisher,
              author,
              created,
              buy,
              owner,
              price
            } = item;
            return{
              id: id, 
              name: title, 
              image: profile_image,
              publisher: publisher,
              author: author,
              date: created,
              type:buy,
              owner: owner,
              price: price
            }
        })
        
        
        setBooks(newBooks)
      }else{
      setBooks([])
    }
    setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchBooks()
  }, [])
  
  return <AppContext.Provider value={{
    loading,
    books
  }}
  >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

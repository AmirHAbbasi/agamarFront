import React, { useState, useContext, useEffect } from 'react'
//import { useCallback } from 'react'

const url = 'http://127.0.0.1:8000/api/book-list'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])

  const fetchBooks = async() => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      if(data){
        const newBooks = data.map((item)=>{
            const {
              id, 
              title, 
              profile_image,
              publisher,
              author
            } = item;
            return{
              id: id, 
              name: title, 
              image: profile_image,
              publisher: publisher,
              author: author
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

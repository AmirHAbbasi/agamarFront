import {useState, React} from 'react'
import { useGlobalContext } from '../../ReqBookList'
import { Divider } from 'antd';
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
//import buyModal from '../buyModal/buyModal'
import './BookList.css';
import axios from 'axios';




const BookList = ({onChat, serverAddress}) => {
  
  const {books, loading} = useGlobalContext();

  const [modalshow, setModalshow] = useState(true);
  const [book_information, setBookInfo] = useState({});
  
  const openBuyModal = (book_info) =>{
    setModalshow(true)
    setBookInfo(book_info)    
  }
  

  var fav_books = []
  var data = JSON.parse(localStorage.getItem("info"));
  if(data){
    console.log("data.access")
    console.log(data.access_token)
    console.log("data.access")
  axios.post(serverAddress+"/api/favourites/", {
      /*
      'Access-Control-Allow-Origin':'http://127.0.0.1:3000',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',   
      */ 
      'Authorization' : 'Bearer '+data.access_token,
  })
  .then(function (response) {

  console.log(response)
  //console.log(response.data);

  })

  .catch(function (error) {
  console.log("error:"+error);
  });
  }




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
    <>
    <section> 
      <div> 
      <Divider>
          <h2>نتایج</h2>
        </Divider>
      </div>
      <div className="books-center">
        {books.map((item)=>{
            return <BookCard onBuy={(book_info)=>{openBuyModal(book_info)}} key={item.id}{...item} onChat={(username)=>{ onChat(username) }}/>
        })}
      </div> 

      
    </section>
    
    </>
  )
}

export default BookList

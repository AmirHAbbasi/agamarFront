import {useState, React, createRef} from 'react'
import 'antd/dist/antd.css'
import { Tooltip, Card } from 'antd';
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import PublicProfile from "../publicprofile/publicprofile"
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

setTwoToneColor('#eb2f96');
getTwoToneColor(); // #eb2f96



const price_ret = (price) =>{
  if(price==0){return <h5  className='mt-2' style={{cursor:"auto"}}>رایگان</h5>}
  else{return <h5  className='mt-2' style={{cursor:"auto"}}>{price} تومان</h5>}
}





const BookCard = ({id, name, image, price, author, type, owner, onChat, onBuy}) => {
  const { Meta } = Card;
  const data = JSON.parse(localStorage.getItem("info"));
  var is_guest = 0
  const showBuyBook = (id, name, image, price, author, type, owner) =>{onBuy({id, name, image, price, author, type, owner})}
  if(data){}
  else{is_guest=1}

  const outlinedHeart = createRef();
  const InsidedHeart = createRef();

  const [count, setCount] = useState("transparent");

  const change_favourite = () =>{
    if(count=="transparent" && !is_guest){
      setCount("red")
      // USER LIKES THIS BOOK
    }
    else{
      setCount("transparent");
      // USER DOESNT LIKE THIS BOOK
    }
  }

  const opacity_elements=()=>{
    if(count=="transparent"){
      //InsidedHeart.style="opacity:0.5"
      //outlinedHeart.style="opacity:0.5"
    }
    else{

    }
  }

  const tyype = () => {
    if(type==0)
      return(
        <h2>فروشی</h2>
      )
    else{
      if(type==1){
        return(
          <h2>اجاره</h2>
        )
      }
      else{
        return(
          <h2>اهدایی</h2>
        )
      }
    }
  }

  const titleGenerator= (text) => {
    var fs=1
    var mr=0
    /*
    if(text.name.length>30){
      fs = 1-((text.name.length-50)*0.1)
      //mr=(text.name.length-50)*1
    }
    */
    fs = 1-((text.name.length)*0.01)
    mr=(text.name.length)*0.08
    var a = <h3 style={{overflow:"visible", overflowX: 'visible',overflowY: 'visible', transform:`scale(${fs},1.0)`, marginRight:`${-mr}vw`}}>{text.name}</h3>    
    return a
  }

  /*
  const handlcardclick = () => {

  }

  const handlfavoritclick = () => {

  }
  */

  return (
    <Card
    hoverable
    style={{maxWidth:"80vw", cursor:"auto"}}
    //onClick={}
    cover={
      <img
        style={{height: '70vh'}}
        alt={id}
        src={`${url}${image}`}
        
      />
    }
    actions={[
      <svg className="bookcardicon" onClick={()=>{change_favourite()}} viewBox="-1000 30 3000 896">
        <path ref={InsidedHeart} fill={count} d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
        <path ref={outlinedHeart} onMouseOver={()=>{opacity_elements()}} fill="red" d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
      </svg>,     
      
    <Tooltip title="افزودن به سبد خرید">
      <svg xmlns="http://www.w3.org/2000/svg"
      onClick={()=>{showBuyBook(id, name, image, price, author, type, owner)}}
       height="40px" viewBox="0 0 24 24" width="40px" className="basketicon" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    </Tooltip>,
    
      
      price_ret(price)
      
    ]}
  >
    <Meta
      //avatar={<Avatar src="" />}
      title={titleGenerator({name})}
      description={<p>{author}<br /></p>}
    />
    <div dir="rtl">
      <a style={{cursor:"text"}}>فروشنده : </a>
    <PublicProfile username={owner} onChat={(username)=>{ onChat(username) }}/>
    </div>
    <div className='mt-2'>{tyype()}</div>
    

  </Card>
  )
}

export default BookCard

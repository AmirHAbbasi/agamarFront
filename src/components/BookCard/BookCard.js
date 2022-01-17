import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd';
import { HeartFilled, HeartOutlined , getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import PublicProfile from "../publicprofile/publicprofile"
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

setTwoToneColor('#eb2f96');
getTwoToneColor(); // #eb2f96


const price_ret = (price) =>{
  if(price==0){return <h5  className='mt-2' style={{cursor:"auto"}}>رایگان</h5>}
  else{return <h5  className='mt-2' style={{cursor:"auto"}}>{price} تومان</h5>}
}

const BookCard = ({id, name, image, price, author, type, owner, onChat}) => {
  const { Meta } = Card;
  
  


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
    var a = <h4 style={{overflowX: 'hidden',overflowY: 'hidden'}}>{text.name}</h4>
    console.log(a)
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
      <HeartFilled onClick={null} id="fuckone" className='mt-2' size="large" key="heart" />,
      <div>{tyype()}</div>,
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

    
  </Card>
  )
}

export default BookCard

import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd';
import { HeartOutlined, getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import PublicProfile from "../publicprofile/publicprofile"
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

setTwoToneColor('#eb2f96');
getTwoToneColor(); // #eb2f96


const BookCard = ({id, name, image, price, author, type, owner, onChat}) => {
  const { Meta } = Card;
  
  


  const tyype = () => {
    if(type==0)
      return(
        <h2 style={{color:"red"}}>فروشی</h2>
      )
    else{
      if(type==1){
        return(
          <h2 style={{color:"blue"}}>اجاره</h2>
        )
      }
      else{
        return(
          <h2 style={{color:"green"}}>اهدایی</h2>
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
        style={{height: '350px'}}
        alt={id}
        src={`${url}${image}`}
        
      />
    }
    actions={[
      <HeartOutlined /*onClick={handlfavoritclick()}*/ id="fuckone" className='mt-2' twoToneColor="rgb(1,1,1)" fill="red" block="true" size="large" key="heart" />,
      <div>{tyype()}</div>,
      <h5 hidden={type==2} className='mt-2' style={{cursor:"auto"}}>{price} تومان</h5>,
    ]}
  >
    <Meta
      //avatar={<Avatar src="" />}
      title={titleGenerator({name})}
      description={<p>{author}<br /></p>}
    />
    
    <PublicProfile username={owner} onChat={(username)=>{ onChat(username) }}/>

    
  </Card>
  )
}

export default BookCard

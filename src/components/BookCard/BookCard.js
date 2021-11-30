import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

const BookCard = ({id, name, image, price, author, type}) => {
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

  /*
  const handlcardclick = () => {

  }

  const handlfavoritclick = () => {

  }
  */

  return (
    <Card
    hoverable
    //onClick={}
    cover={
      <img
        style={{height: 320}}
        alt={id}
        src={`${url}${image}`}
      />
    }
    actions={[
      <HeartOutlined /*onClick={handlfavoritclick()}*/ block="true" size="large" key="heart" />,
      <div>{tyype()}</div>,
      <h2>{price} تومان</h2>,
    ]}
  >
    <Meta
      //avatar={<Avatar src="" />}
      title={<h2>{name}</h2>}
      description={author}
    />
  </Card>
  )
}

export default BookCard

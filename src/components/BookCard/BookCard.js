import React from 'react'
import 'antd/dist/antd.css'
//import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
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

  const handlclick = () => {

  }

  return (
    <Card
    hoverable
    onClick={handlclick()}
    //style={{width: 200}}
    cover={
      <img
        style={{height: 320}}
        alt={id}
        src={`${url}${image}`}
      />
    }
    actions={[
      <HeartOutlined block="true" size="large" key="heart" />,
      <div>{tyype()}</div>,
      <h2>{price}</h2>,
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

//<Link to={``} className="btn btn-primary btn-details">جزئیات بیشتر</Link>
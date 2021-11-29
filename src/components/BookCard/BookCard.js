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
    if(type===0)
      return(
        <section>
            <h3 style={{color:"red"}}>فروشی</h3>
            <h2>{price}</h2>
          </section>
      )
    else{
      if(type===1){
        return(
          <section>
            <h3 style={{color:"blue"}}>اجاره</h3>
            <h2>{price}</h2>
          </section>
        )
      }
      else{
        return(
          <section>
            <h3 style={{color:"green"}}>اهدایی</h3>
            <h2>{price}</h2>
          </section>
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
      <HeartOutlined key="heart" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      //avatar={<Avatar src="" />}
      title={<h1>{name}</h1>}
      description={
        <div>
        <h2>{author}</h2>
        <div>{tyype()}</div>
        </div>
      }
    />
  </Card>
  )
}

export default BookCard

//<Link to={``} className="btn btn-primary btn-details">جزئیات بیشتر</Link>
import React from 'react'
import 'antd/dist/antd.css'
//import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

const BookCard = ({id, name, image, price, author}) => {
  const { Meta } = Card;
  return (
    <Card
    hoverable
    //style={{width: 200}}
    cover={
      <img
        style={{height: 300}}
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
        <h3>{price} تومان</h3>
        </div>
      }
    />
  </Card>
  )
}

export default BookCard

//<Link to={``} className="btn btn-primary btn-details">جزئیات بیشتر</Link>
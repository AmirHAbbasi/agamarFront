import React from 'react'
import 'antd/dist/antd.css'
//import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import './BookCard.css'

const url = 'http://127.0.0.1:8000'

const BookCard = ({id, name, image, publisher, author}) => {
  const { Meta } = Card;
  return (
    <Card
    hoverable
    //style={{width: 300}}
    cover={
      <img
        style={{height: 600}}
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
      title={name}
      description={author}
    />
  </Card>
  )
}

export default BookCard

//<Link to={``} className="btn btn-primary btn-details">جزئیات بیشتر</Link>
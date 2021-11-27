import React from 'react'
import 'antd/dist/antd.css'
//import { Link } from 'react-router-dom'
import { Card } from 'antd';

const url = 'http://127.0.0.1:8000'

const BookCard = ({id, name, image, publisher, author}) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      //style={{ width: 300 }}
      cover={<img alt={id} src={`${url}${image}`} />}
      >
      <Meta
        title={<h3>{name}</h3>}
        description={
          <div>
            <h4>{publisher}</h4>
            <p>{author}</p>
          </div>
        }
      />
    </Card>
  )
}

export default BookCard

//<Link to={``} className="btn btn-primary btn-details">جزئیات بیشتر</Link>
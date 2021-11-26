import React from 'react'
import 'antd/dist/antd.css'
import { Card, /*Avatar*/ } from 'antd';

const url = 'http://127.0.0.1:8000/api/book-list'

const BookCard = ({id, name, image, publisher, author}) => {
    const { Meta } = Card;
    return (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt={id} src={`${url}${image}`} />}
          >
          <Meta
            //avatar={<Avatar src={image} />}
            title={name}
            description={
              <div>
                <p>
                  {author}
                </p>
                <p>
                  {publisher}
                </p>
              </div>
            }
          />
        </Card>
      )
}

export default BookCard
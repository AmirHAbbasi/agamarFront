import React from 'react'
import 'antd/dist/antd.css'
import { Card, /*Avatar*/ } from 'antd';
import 'Home.css'

const BookCard = ({image, name, id, info}) => {
    const { Meta } = Card;
    return (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={id} src={image} />}
          >
          <Meta
            //avatar={<Avatar src={image} />}
            title={name}
            description={info}
          />
        </Card>
      )
}

export default BookCard

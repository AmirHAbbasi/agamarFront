import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import './Banner.css'

const Banner = () => {
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
      <section>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>بزرگترین مرجع اشتراک گذاری کتاب</h3>
          </div>
          <div>
            <h3 style={contentStyle}>فروش کتاب های شما</h3>
          </div>
          <div>
            <h3 style={contentStyle}>اهدای کتاب</h3>
          </div>
          <div>
            <h3 style={contentStyle}>اجاره کتاب با ضمانت</h3>
          </div>
    </Carousel>
    </section>
  )
}

export default Banner

import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import './Banner.css'

const Banner = () => {
  const contentStyle = {
      height: '200px',
      color: 'white',
      fontWeight:"bold",
      //backgroundImage:"attr(im)",
      //backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#FC74B5',
      backgroundImage:"url('http://127.0.0.1:3000/BannerImags/3.jpg')"
    };
  return (
    <section>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle} >بزرگترین مرجع اشتراک گذاری کتاب</h3>
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
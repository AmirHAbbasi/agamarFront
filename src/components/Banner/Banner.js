import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import Antdmodal from "../AdvancedSearch/antdmodal";
import './Banner.css'
import zIndex from '@mui/material/styles/zIndex';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.bannerHeight = "100vh";
    this.contentStyle = {
        color: 'white',
        fontWeight:"bold",
        height:this.bannerHeight,
        //backgroundImage:"attr(im)",
        //backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#FC74B5',
        backgroundImage:"url('http://127.0.0.1:3000/BannerImags/3.jpg')"
      };
    this.bannerFrame = {
       width:"100%",
       height:this.bannerHeight,
       zIndex:"-400"
       }

}


renderBanners = () => {
  const lis = ["jashnvareh",""];
  var i=Math.floor(Math.random()*10)%6;
  i = 1
  return lis.map(banner=>{i+=1;return <a href={"/events/"+banner} target="_blank">
                            <h3 style={{
                                     
                                     
                                     height:this.bannerHeight,   
                                     width:'auto',                                   
                                     backgroundRepeat: 'no-repeat',                                                                         
                                     lineHeight: '160px',
                                     textAlign: 'center',
                                     
                                     
                                     backgroundSize: 'cover',
                                     backgroundPositionX : "center",
                                     backgroundImage:"url('http://127.0.0.1:3000/BannerImags/"+i+".jpg')",
                                     
                            }} >
                              
                            </h3>
                            
                          </a>})

  /*
   <div style={this.contentStyle}>
          <h3 style={this.contentStyle} backgroundImage="url('http://127.0.0.1:3000/BannerImags/2.jpg')">بزرگترین مرجع اشتراک گذاری کتاب</h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>فروش کتاب های شما</h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>اهدای کتاب</h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>اجاره کتاب با ضمانت</h3>
        </div>
  */
}


render(){
  return (
    <>
      <Carousel style={this.bannerFrame} className="banner-frame">
        {this.renderBanners()}
        
      </Carousel>
        <Antdmodal serverAddress={this.props.serverAddress} onResult={(e) => {this.props.onResult(e)}}  vis={0} categories={this.props.categories} />
    </>
  )
}
}

export default Banner

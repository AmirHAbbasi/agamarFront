import {React,useState,useRef} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css'
import { Card, Tooltip, Avatar } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import './publicprof.css'

const url = 'http://127.0.0.1:8000/api/public-profile/'


const openChat=(thiss,username)=>{
  thiss(username)  
}
const PublicProfile = ({username, onChat}) => {
  const { Meta } = Card;
  const thiss = onChat;
  
  var [resp, setResp] = useState([])
  var [bool, setBool] = useState(true)

  //const response =  await fetch(`${url}${username}`)
  //const data = response.json()
  
  //console.log("resp")
  //console.log(resp)
  //console.log("resp")
  const fetch = () =>{
    if(bool){
    axios.get(`${url}${username}`).then(function(response){
      setResp(response.data.message) 
      setBool(false) 
    })
  }
    
  }

  if(bool){
  fetch()}

  const desc = () =>{
    if(resp.is_book_store){return <p>کتابفروشی</p>}
    else{return <p style={{textAlign: "right"}}>شخص حقیقی</p>}
  }

  console.log(`128.0.0.1:8000${resp.profile_image}`)

  return (
    <Tooltip trigger="click" zIndex={500} title={
                    <Card
                    dir="ltr"
                    id="cards"
                    loading={false}
                      title={<><Avatar src={`http://127.0.0.1:8000${resp.profile_image}`} style={{backgroundColor: '#fde3cf'}}>{resp.name}</Avatar>
                                 <a style={{cursor:"text"}} className='ml-2'>{resp.name}</a>                               
                                 
                            </>
                            }                      
                      style={{ width: 240 }}
                      
                      actions={[
                        <Tooltip title="chat"><WechatOutlined  onClick={()=>{openChat(thiss,username)}}/></Tooltip>,
                      ]}
                    >
                      <Meta title={<a>@{username}</a>} description={resp.email} />
                      <p className="mt-2">{resp.address}</p>
                      {desc()}
                    </Card>              
    }>
    <span style={{cursor:"pointer"}}>{username}</span>
    </Tooltip>

    
  
  )
}

export default PublicProfile

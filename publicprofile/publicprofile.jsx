import {React,useState,useRef} from 'react'
import axios from 'axios';
import 'antd/dist/antd.css'
import { Card, Tooltip, Avatar } from 'antd';
import { WechatOutlined, FormOutlined } from '@ant-design/icons';
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
  const getChatIcon = () =>{
    var data = JSON.parse(localStorage.getItem("info"));
    if(data && username==data.username){
      return <Tooltip title="edit profile"><FormOutlined twoToneColor="red" onClick={()=>{window.open("/profile");}}/></Tooltip>
      
    }
    else{
    return <Tooltip title="chat"><WechatOutlined twoToneColor="red" onClick={()=>{openChat(thiss,username)}}/></Tooltip>}
    }

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

  

  return (
    <Tooltip trigger="click" zIndex={500} id="a00sa"
     title={
      
                    <Card
                    dir="ltr"
                    id="cards"
                    loading={false}
                      title={<><Avatar src={`http://127.0.0.1:8000${resp.profile_image}`} style={{backgroundColor: '#fde3cf'}} >{resp.name}</Avatar>
                                 <a style={{cursor:"text", display: 'inline-grid'}} className='ml-2'><a style={{display: "inline-grid"}}>{resp.name}</a>
                                                             
                                 <small className="publicprof-username" style={{cursor:"text"}}>@{username}</small> </a>
                            </>
                            }                      
                      style={{ width: 240 }}
                      
                      actions={[
                        getChatIcon(),
                      ]}
                    >
                      <a>{resp.email}</a>
                      <p dir="rtl" style={{textAlign:"right"}} className="mt-2 mb-0">آدرس:</p>
                      <p className="mt-0">{resp.address}</p>
                      
                    </Card>              
    }>
    <span className='username-publicprof'>{username}</span>
    </Tooltip>

    
  
  )
}

export default PublicProfile

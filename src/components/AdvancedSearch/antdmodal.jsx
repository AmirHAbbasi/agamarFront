import React from 'react';
import { DatePicker, Modal, Input, Checkbox} from 'antd';
import Complete from "./autocomplete"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import 'antd/dist/antd.css' 
import "./advancedsearch.css" 


class Antdmodal extends React.Component {



  state = { visible: this.props.vis, 
            searchvalue : "",
            categ_visible : false,
            author_name : "",
            categories : this.props.categories,
            ad_type : ["فروش","اجاره","هدیه"],
            ad_date_from : "",
            ad_date_to : "",
            ad_price_min : "",
            ad_price_max : "",
            categories : this.props.categories,
            e : ["محدوده تاریخی سازگار نیست","هیچ دسته بندی انتخاب نشده!","هیچ نوع فروشی انتخاب نشده!","محدوده قیمتی درست انتخاب نشده"],
            errors : []
          };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
    this.showResults();
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  

  handleCategOk = e => {          
    console.log(this.state);
  }

  book_search_field = (a) =>{
    if(a){
    return <Input placeholder="جستجو کنید!" onChange={(e)=>{this.setState({searchvalue:e.target.value})}}  className="antd-text-field mr-sm-2 ml-1" name="q" defaultValue={this.state.searchvalue}  dir="rtl" addonAfter="نام کتاب" />
    }
    else{return <div />}
  }

  errorchecker = ()=>{if(this.state.errors.size>0){return true}return false}
  
  modal_footer = () => {
    console.log(this.state.errors)
    return <div dir="rtl" style={{textAlign:"left"}}>
              <a dir="rtl" style={{ marginLeft: "10%",cursor:"text",color:"red",maxWidth:"70%" }}>{this.state.e[this.state.errors.size-1]}</a>
              <button disabled={this.errorchecker()}
               onClick={this.handleOk} lang="fa" className="btn advanced-search-btn my-2 my-sm-0 ml-1 mt-1" >تائید</button>
            </div>
  }


  showResults = () => {

    const ref = this;
    
    //var buy = "";

    //this.state.ad_type.map(o=>{console.log(buy);return buy+=2-["فروش","اجاره","هدیه"].indexOf(o)});

    //console.log(buy.slice(0, -1));

    
    var buy = "["
    if(this.state.ad_type.indexOf("فروش")>-1){buy=buy+"1,"}
    else{buy=buy+"-1,"} 
    if(this.state.ad_type.indexOf("اجاره")>-1){buy=buy+"1,"}
    else{buy=buy+"-1,"}
    if(this.state.ad_type.indexOf("هدیه")>-1){buy=buy+"1]"}
    else{buy=buy+"-1]"}
    
    axios.post(this.props.serverAddress+"api/book-find-a/", {
              /*
              'Access-Control-Allow-Origin':'http://127.0.0.1:3000',
              'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
              'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',   
              */ 
              'title' : this.state.searchvalue,
              'author' : this.state.author_name,
              'ad_date_from' : this.state.ad_date_from,
              'ad_date_to' : this.state.ad_date_to,
              'ad_price_min' : this.state.ad_price_min,
              'ad_price_max' : this.state.ad_price_max, 
              //categories : this.state.categories,
              'buy' : buy,   // 0 : forosh ,1 : ejare ,2 : hedie             
    })
    .then(function (response) {
      ref.props.onResult(response.data);
      //console.log(response.data);
      
    })

    .catch(function (error) {
      console.log("error:"+error);
    });
    
    
    

  };


  raisePriceError = () =>{
    
  }
  noPriceError = () =>{

  }

  raiseError = (error_no) =>{
    //this.setState({errors:this.state.errors.add(error_no)})    
  }
  noError = (error_no) =>{
    //this.setState({errors:this.state.errors.delete(error_no)})    
  }

  

  render() {
    return (
      <>
      <Modal 
          className="antdmodalbg"
          zIndex={1500}
          centered
          footer={this.modal_footer()}
          destroyOnClose={false}
          title="جستجوی پیشرفته"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          bodyStyle={{
            backgroundColor: "rgb(243, 59, 89)"
            }} 
        >
          
        <div className="advancedsearchmodal">
          
          {this.book_search_field(0)}
          <Input autocomplete="off" placeholder="هر نویسنده" onChange={(e)=>{this.setState({author_name:e.target.value})}}  name="author" className="input-43 mr-sm-2 ml-1" dir="rtl" addonAfter="نام نویسنده" />
          <br /><br />
          
          <button lang="fa" disabled={!this.state.categories.length} onClick={() => {this.setState({categ_visible:true})}} className="btn advanced-search-btn my-2 my-sm-0 ml-1 mt-1" >انتخاب دسته بندی</button>
          
          <br /><br />
          <Checkbox.Group className="antd-checkbox-group" onChange={(e) => {this.state.ad_type=e}}  defaultValue={["فروش","اجاره","هدیه"]} options={["فروش","اجاره","هدیه"]}  />
          <br /><br />

          <div dir="rtl">  
            <p>تاریخ ثبت آگهی :</p>
            <DatePicker onChange={ (e) => {                                          
                                          try{ 
                                            if(this.state.ad_date_to && e._d>this.state.ad_date_to){this.raiseError(0)}
                                            else{
                                              this.noError(0)
                                            this.setState({ad_date_from:e._d})}
                                          } catch(e) {this.noError(0);this.setState({ad_date_from:""})}                                       
                                        }
                                        }
                                        disabledDate={(current)=> {
                                          let newDate = new Date()
                                          return current > moment(newDate, "Mon Nov 29 2021 22:24:22 GMT+0330");
                                        }}                                                       
            placeholder="از" />

            <DatePicker onChange={ (e) => {                                          
                                          try{ 
                                            if(e._d<this.state.ad_date_from){this.raiseError(0)}
                                            else{
                                              this.noError(0)
                                            this.setState({ad_date_to:e._d})}
                                          } catch(e) {this.noError(0);this.setState({ad_date_to:""})}                                       
                                        }
                                        }
                        disabledDate={(current)=> {
                                          let newDate = new Date()                                          
                                          return current > moment(newDate, "Mon Nov 29 2021 22:24:22 GMT+0330");
                                        }}
             className=" mr-1" placeholder="تا" />
          </div>  

          <br />
          <p dir="rtl">محدوده قیمت:</p>

          <Input type="number" onChange={ (e) => {
                                          
                                          if(this.state.ad_price_max && e.target.value>this.state.ad_price_max){this.raisePriceError()}
                                          else{this.noPriceError()}
                                          this.setState({ad_price_min:e.target.value})     
                                          console.log(this.state.ad_price_min)
                                          console.log(this.state.ad_price_max)                                     
                                        }
                                        
                                        }
          
           placeholder="کف قیمت" style={{width:"50%"}}  className="mr-sm-2 ml-1" name="minPrice"  dir="rtl" addonBefore="تومان" />
          <Input  type="number" onChange={ (e) => {
                                          
                                          if(this.state.ad_price_min && e.target.value<this.state.ad_price_min){this.raisePriceError()}
                                          else{this.noPriceError()}
                                          this.setState({ad_price_max:e.target.value})   
                                          console.log(this.state.ad_price_min)
                                          console.log(this.state.ad_price_max)                                       
                                        }
                                        }
          placeholder="سقف قیمت" style={{width:"50%"}}  className="mr-sm-2 ml-1" name="maxPrice"  dir="rtl" addonBefore="تومان" />
          
          
        </div>  
        </Modal>

        <Modal 
          zIndex={1500}
          
          footer={<div></div>}
          destroyOnClose={false}
          title="انتخاب دسته بندی ها"
          visible={this.state.categ_visible}
          onOk={this.handleCategOk}
          onCancel={() => {this.setState({categ_visible:false})}}
          bodyStyle={{
            backgroundColor: 'rgb(243, 59, 89)'
            }} 
        >

          <Checkbox.Group  onChange={(e) => {this.state.categories=e}}  options={this.props.categories} defaultValue={this.props.categories}  />

        </Modal>
        
        <div className="mt-1" style={{textAlign: 'center'}}>
        
           
        <Complete serverAddress={this.props.serverAddress}  lang="fa"  onChange={(e)=>{this.setState({searchvalue:e})}}   aria-label="Search"/>

          <br /><br />
          <button onClick={this.showModal} className="advanced-search-btn my-2 my-sm-0 ml-1 mt-1" >جستجوی پیشرفته</button>

          <button  lang="fa" disabled={!this.state.searchvalue} onClick={this.showResults} className="advanced-search-btn my-2 my-sm-0 ml-1 mt-1" >جستجو</button>
                    
         </div>
        
        
      </>
    );
  }
}
    

 

export default Antdmodal;
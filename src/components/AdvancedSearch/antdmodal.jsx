import React, { useState} from 'react';
import { DatePicker, Space, Cascader, Modal, Button, Input, AutoComplete, Select, InputNumber, Checkbox} from 'antd';
import "./advancedsearch.css"
import Complete from "./autocomplete"
import axios from 'axios';
import 'antd/dist/antd.css'  


class Antdmodal extends React.Component {
  state = { visible: this.props.vis, 
            searchvalue : "",
            categ_visible : false,
            author_name : "",
            excep_categories : [],
            excep_ad_categ : [],
            ad_date_from : "",
            ad_date_to : "",
            ad_price_min : "",
            ad_price_max : "",
            categories : this.props.categories,
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

  

  handleCategOk = e => {               ////////////////////////
    console.log(this.state);
  }

  

  modal_footer = () => {
    return <div style={{textAlign:"left"}}>
              <button onClick={this.handleOk} className="btn btn-outline-primary my-2 my-sm-0 ml-1">تائید</button>
            </div>
  }

  sendSearchReq = () =>{
      var data = {
        title : this.state.searchvalue,
        author_name : this.state.author_name,
        ad_date_from : this.state.ad_date_from,
        ad_date_to : this.state.ad_date_to,
        ad_price_min : this.state.ad_price_min,
        ad_price_max : this.state.ad_price_max,
      };
      console.log("data");
      console.log(data);
      this.props.onResult(data);
  }

  showResults = () =>{
    const data = this.sendSearchReq();
    this.props.onResult(data);
  }

  

  render() {
    return (
      <>
      <Modal 
          zIndex={1500}
          centered
          footer={this.modal_footer()}
          destroyOnClose={false}
          title="جستجوی پیشرفته"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          bodyStyle={{
            backgroundColor: 'blue'
            }} 
        >
          
        <div className="advancedsearchmodal">
          
          <Input placeholder="جستجو کنید!" onChange={(e)=>{this.setState({searchvalue:e.target.value})}}  className="mr-sm-2 ml-1" name="q" defaultValue={this.state.searchvalue}  dir="rtl" addonAfter="نام کتاب" />
          
          <Input placeholder="هر نویسنده" onChange={(e)=>{this.setState({author_name:e.target.value})}}  name="author" className="mr-sm-2 ml-1" dir="rtl" addonAfter="نام نویسنده" />
          <br /><br />
          <button  lang="fa" disabled={!this.state.categories.length} onClick={() => {this.setState({categ_visible:true})}} className="btn btn-primary my-2 my-sm-0 ml-1" >انتخاب دسته بندی</button>

          
          <br /><br />
          <Checkbox.Group  onChange={(e) => {this.state.excep_ad_categ=e}}  defaultValue={["فروش","اجاره","هدیه"]} options={["فروش","اجاره","هدیه"]}  />
          <br /><br />

          <div dir="rtl">  
            <p>تاریخ ثبت آگهی :</p>
            <DatePicker onChange={ (e) => {
                                          this.setState({ad_date_from:e._d})                                          
                                        }
                                        }
            placeholder="از" />

            <DatePicker onChange={ (e) => {
                                          this.setState({ad_date_to:e._d})                                          
                                        }
                                        }
             className=" mr-1" placeholder="تا" />
          </div>  

          <br />
          <p dir="rtl">رنج قیمتی:</p>

          <Input type="number" onChange={ (e) => {
                                          this.setState({ad_price_min:e.target.value})                                          
                                        }
                                        }
          
           placeholder="کف قیمت" style={{width:"50%"}}  className="mr-sm-2 ml-1" name="minPrice"  dir="rtl" addonBefore="تومان" />
          <Input  type="number" onChange={ (e) => {
                                          this.setState({ad_price_max:e.target.value})                                          
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
            backgroundColor: 'blue'
            }} 
        >

          <Checkbox.Group  onChange={(e) => {this.state.categories=e}}  options={this.props.categories} defaultValue={this.props.categories}  />

        </Modal>
        <div>
        
           
        <Complete lang="fa"  onChange={(e)=>{this.setState({searchvalue:e})}}   aria-label="Search"/>

          <br /><br />
          <button  lang="fa" onClick={this.showResults} className="btn btn-success my-2 my-sm-0 mr-1 mt-1" >جستجو</button>
          <button onClick={this.showModal} className="btn btn-success my-2 my-sm-0 ml-1 mt-1">جستجوی پیشرفته</button>
          
         </div>
        
        
      </>
    );
  }
}
    
    
 

export default Antdmodal;
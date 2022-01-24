import React, { useState} from 'react';
import { DatePicker, Space, Cascader, Modal, Button, Input, AutoComplete, Select, InputNumber, Checkbox} from 'antd';
import "./advancedsearch.css"
import Complete from "./autocomplete"
  


class Antdmodal extends React.Component {
  state = { visible: this.props.vis, 
            searchvalue : "",
            categ_visible : false,
            
          };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    
    this.setState({
      visible: false,
    });
  };

  componentWillReceiveProps = (nextProps, val) => {
    this.setState({searchvalue : val});
    this.showModal();
  };

  setValue = e =>{
    /** AutoComplete */
    
    this.setState({searchvalue : e.target.value});
  }

  handleCategOk = e => {
    console.log(e);
  }

  handleAutoComplete = e => {
        //["خری با پای برهنه", "donkies first!"]
  }

  modal_footer = () => {
    return <div style={{textAlign:"left"}}>
              <button onClick={this.handleOk} className="btn btn-outline-primary my-2 my-sm-0 ml-1">تائید</button>
            </div>
  }
  

  render() {
    return (
      <>
      <Modal 
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
          
          <Input placeholder="جستجو کنید!"   className="mr-sm-2 ml-1" name="q" defaultValue={this.state.searchvalue}  dir="rtl" addonAfter="نام کتاب" />
          
          <Input placeholder="هر نویسنده" defaultValue="dd"   name="author" className="mr-sm-2 ml-1" dir="rtl" addonAfter="نام نویسنده" />
          <br /><br />
          <button  lang="fa" onClick={() => {this.setState({categ_visible:true})}} className="btn btn-primary my-2 my-sm-0 ml-1" >انتخاب دسته بندی</button>

          
          <br /><br />
          <Checkbox.Group options={["فروش","اجاره","هدیه"]}  />
          <br /><br />

          <div dir="rtl">  
            <p>تاریخ ثبت آگهی :</p>
            <DatePicker  placeholder="از" />
            <DatePicker  className=" mr-1" placeholder="تا" />
          </div>  

          <br />
          <p dir="rtl">رنج قیمتی:</p>

          <Input type="number" placeholder="کف قیمت" style={{width:"50%"}}  className="mr-sm-2 ml-1" name="minPrice"  dir="rtl" addonBefore="تومان" />
          <Input  type="number" placeholder="سقف قیمت" style={{width:"50%"}}  className="mr-sm-2 ml-1" name="maxPrice"  dir="rtl" addonBefore="تومان" />
          

        </div>  
        </Modal>

        <Modal 
          
          destroyOnClose={false}
          title="انتخاب دسته بندی ها"
          visible={this.state.categ_visible}
          onOk={this.handleCategOk}
          onCancel={() => {this.setState({categ_visible:false})}}
          bodyStyle={{
            backgroundColor: 'blue'
            }} 
        >

          <Checkbox.Group options={["فروش","اجاره","هدیه"]}  />

        </Modal>
        <div><br />
        <form action="/search" dir="rtl" className="my-2 my-lg-0">
           
           <Complete dir="rtl" lang="fa" onChange={this.setValue} autoComplete="off" name="q" className="form-control mr-sm-2 ml-1" dir="rtl" aria-label="Search"/>
           <button  lang="fa" className="btn btn-outline-success my-2 my-sm-0 mr-1 mt-3" >جستجو</button>
         </form> 
         <button onClick={this.showModal} className="btn btn-outline-success my-2 my-sm-0 ml-1 mt-3">جستجوی پیشرفته</button>
         </div>
        
        
      </>
    );
  }
}
    
    
 

export default Antdmodal;
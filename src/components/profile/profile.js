import React, { Component } from "react";
import "./profile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

const regExp = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const regExpPass = RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
);
const regexpUser = RegExp(/^\w[\w.]{2,18}\w$/);


export default class profileDashboard extends Component {
    constructor() {
        super();
        this.state = {



            showHideImage: false,

            isError: {
                showHide: "",
                first_name: "",
                user_name: "",
                email: "",
                address: "",
                bPassword: [],
                bookOrPerson: "",
                phone: "",
                password: "",
                password2: "",
                bookOrPerson: "",
            },

            totalReactPackages: null,
            // this.props.state.user_info
            pImage: "https://bootdey.com/img/Content/avatar/avatar6.png",



            first_name: null,
            user_name: null,
            email: null,
            address: null,
            isBookStore: null,
            isPrivatePerson: null,
            phone: null,
            // first_name: "",
            // user_name: "",
            // email: "",
            // address: "",
            // isBookStore: false,
            // isPrivatePerson: true,
            // phone: "",
            oldPassword: "",
            password: "",
            password2: "",
            access: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitGeneral = this.submitGeneral.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
    }

    handleModalShowHide() {
        this.setState({ showHideImage: !this.state.showHideImage });
    }

    componentDidMount() {
        let item = JSON.parse(localStorage.getItem("info"));
        console.log("mounted", item);

        this.setState({ first_name: item.name });
        this.setState({ user_name: item.username });
        this.setState({ email: item.email });
        this.setState({ address: item.address });
        this.setState({ phone: item.phone_number });
        this.setState({ pImage: item.prof_image });
        // if(this.state.pImage)
        this.setState({ access: item.access_token });
        this.setState({ isBookStore: item.isBookStore });
        this.setState({ isPrivatePerson: item.isPrivatePerson });


    }


    handleInputChange(e) {
        e.preventDefault();

        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "first_name":
                isError.first_name =
                    value.length < 1 ? "!این فیلد نمی تواند خالی باشد" : "";
                break;
            case "user_name":
                isError.user_name = !regexpUser.test(value) ? "!نام کاربری نامعتبر" : "";
                console.log("regUser", regexpUser.test(value));
                if (value.length < 1) {
                    isError.user_name = "فیلد ضروری*";
                }
                break;
            case "address":
                isError.address =
                    value.length < 1 ? "!این فیلد نمی تواند خالی باشد" : "";
                break;
            case "phone":
                isError.phone =
                    value.length < 11 || value.length > 11
                        ? "!تلفن همراه معتبر نیست"
                        : "";
                break;
            case "email":
                isError.email = !regExp.test(value) ? "!آدرس ایمیل معتبر نیست" : "";
                if (value.length < 1) {
                    isError.email = "!این فیلد نمی تواند خالی باشد";
                }
                break;
            case "password":
                console.log("checkPass", regExpPass, "check", regExpPass.test(value));
                isError.password = !regExpPass.test(value) ? "!یک رمز عبور قوی تر انتخاب کنید" : "";
                if (value.length < 1) {
                    isError.password = "!این فیلد نمی تواند خالی باشد";
                }
                break;


            case "password2":
                isError.password2 =
                    value === this.state.password
                        ? ""
                        : "!رمز عبور به درستی تكرار نشده است";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value,
        });
        console.log(this.state);
    }



    submitPassword() {
        console.log("submitPassword function");
        let item = JSON.parse(localStorage.getItem("info"))
        let access = item.access_token;



        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`,
        }
        console.log("start request");
        const data = {
            oldPassword: this.state.oldPassword,
            password: this.state.password,
            password2: this.state.password2,
        }
        console.log(data);
        axios.patch('http://127.0.0.1:8000/api/change_password', data, { headers: headers, withCredentials: true }).then(
            res => {
                console.log("just after axios");
                if (res.data != null) {
                    console.log(res.data);
                    console.log("ok!!");
                    console.log("res:", res);

                } else {
                    console.log("failed to update");
                }
            }
        ).catch(error => {
            console.log("error is here", error);
            console.log("error.response.data.password", error.response.data.password);
            error.response.data.password.forEach(element => {
                if (element === "This password is too short. It must contain at least 8 characters.") {
                    this.state.isError.bPassword.push(<h5>.رمز عبور انتخابی بسیار كوتاه است، رمز عبور باید حداقل 8 كاراكتر باشد</h5>);
                    console.log("bpassword", this.state.isError.bPassword);
                    alert(".رمز عبور انتخابی بسیار كوتاه است، رمز عبور باید حداقل 8 كاراكتر باشد");
                }
                if (element === "This password is too common.") {
                    this.state.isError.bPassword.push(<h5>.رمز عبور ساده و قابل حدس است</h5>);
                    console.log("bpassword", this.state.isError.bPassword);
                    alert(".رمز عبور ساده و قابل حدس است");
                }
                if (element === "This password is entirely numeric.") {
                    this.state.isError.bPassword.push(<h5>.رمز عبور نباید تماما عدد باشد</h5>);
                    console.log("bpassword", this.state.isError.bPassword);
                    alert(".رمز عبور نباید تماما عدد باشد");
                }
                console.log("bpassword", this.state.isError.bPassword);

            });

            console.error(error.response);

        })

    }

    submitGeneral() {
        let item = JSON.parse(localStorage.getItem("info"))
        let access = item.access_token;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`,
        }

        const data = {
            username: this.state.user_name,
            name: this.state.first_name,
            email: this.state.email,
            phone_number: this.state.phone,
            address: this.state.address,
        }
        // console.log(data);
        axios.patch('http://127.0.0.1:8000/api/update-userInfo', data, { headers: headers, withCredentials: true }).then(
            res => {
                if (res.data != null) {
                    console.log(res);
                    // console.log(res.data.access);
                    alert(".تغییرات با موفقیت ذخیره شد");

                } else {
                    console.log("failed to update");
                }
            }
        ).catch(error => {
            console.log("error is here", error);
            console.error(error.response);
            alert(".مشکلی از سمت سرور پیش آمده است. لطفا شکیبا باشید");


        })



    }


    render() {
        let item = JSON.parse(localStorage.getItem("info"));
        const { isError } = this.state;
        return (
            <div style={{ backgroundColor: "#a83264" }}>
                <div class="container rounded bg-white mt-5 mb-5 bigPart">
                    <div class="row">


                        <div class="col-md-4">
                            <div class="p-3 py-5 title">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4>تغییر رمز عبور</h4>
                                </div>

                                <div class="col-md-12">
                                    <label class="labels">رمز عبور قبلی</label>
                                    <input
                                        type="password"
                                        name="oldPassword"
                                        onChange={this.handleInputChange}
                                        className="form-control2"
                                        placeholder=".رمز عبور قبلی خود را وارد كنید"
                                    />
                                    {/* <small className="text-danger inP">{isError.bPassword}</small> */}
                                </div>

                                <div class="col-md-12">
                                    <label class="labels">رمز عبور جدید
                                            {' '}
                                        {
                                            (isError.password.length === 0 && !((this.state.password === "")))
                                                ?
                                                (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        color="darkgreen"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                )
                                                : ''
                                        }
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={this.handleInputChange}
                                        className="form-control2"
                                        placeholder=".رمز عبور جدید خود را وارد نمایید"
                                    />
                                    <small className="text-danger inP">{!(this.state.password === "") ? isError.password : "فیلد ضروری*"}</small>
                                </div>

                                <div class="col-md-12">
                                    <label class="labels">رمز عبور قبلی
                                            {' '}
                                        {
                                            (isError.password2.length === 0 && !(this.state.password2 === ""))
                                                ?
                                                (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        color="darkgreen"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                )
                                                : ''
                                        }
                                    </label>
                                    <input
                                        type="password"
                                        name="password2"
                                        onChange={this.handleInputChange}
                                        className="form-control2"
                                        placeholder=".رمز عبور جدید خود را تكرار نمایید"
                                    />
                                    <small className="text-danger inP">{!(this.state.password2 === "") ? isError.password2 : "فیلد ضروری*"}</small>
                                </div>

                                {/* <div class="text-center">
                                    <small className="text-danger text-center">{this.state.isError.bPassword}</small>
                                </div> */}

                                <div class="mt-5 text-center">
                                    <button
                                        type="submit"
                                        style={
                                            { "background-color": "#811854" }}
                                        className="btn btn-primary px-4 border-0"
                                        onClick={() => this.submitPassword()}
                                        disabled={
                                            (
                                                this.state.password === ""
                                                || this.state.password2 === ""

                                                || this.state.isError.password.length > 0
                                                || this.state.isError.password2.length > 0
                                            )
                                                ?
                                                true
                                                :
                                                false
                                        }
                                    >
                                        تغییر رمز عبور
                                    </button>
                                </div>
                            </div>
                        </div>




                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">تغییر اطلاعات کاربری</h4>
                                </div>

                                <div class="row mt-3 title">
                                    <div class="col-md-12">
                                        <label class="labels">نام
                                        {' '}
                                            {
                                                (isError.first_name.length === 0 && !(this.state.first_name === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            onChange={this.handleInputChange}
                                            placeholder=".نام جدید را وارد كنید"
                                            value={this.state.first_name}
                                            class="form-control1"
                                        />
                                        <small className="text-danger inP">{!(this.state.first_name === "") ? isError.first_name : "فیلد ضروری*"}</small>

                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">نام کاربری
                                        {' '}
                                            {
                                                (isError.user_name.length === 0 && !(this.state.user_name === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''}
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            className="form-control1"
                                            placeholder=".یك نام كاربری جدید برای خود انتخاب كنید"
                                            value={this.state.user_name}
                                            // Value={this.state.user_name}
                                            onChange={this.handleInputChange}
                                        />
                                        <small className="text-danger inP">{!(this.state.user_name === "") ? isError.user_name : "فیلد ضروری*"}</small>

                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">ایمیل
                                        {' '}
                                            {
                                                (isError.email.length === 0 && !(this.state.email === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={this.handleInputChange}
                                            className="form-control1"
                                            placeholder=".یك پست الكترونیك جدید برای خود انتخاب كنید"
                                            value={this.state.email}
                                        />
                                        <small className="text-danger inP">{!(this.state.email === "") ? isError.email : "فیلد ضروری*"}</small>

                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">آدرس
                                            {' '}
                                            {
                                                (isError.address.length === 0 && !(this.state.address === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            onChange={this.handleInputChange}
                                            className="form-control1"
                                            placeholder=".آدرس جدید را وارد كنید"
                                            value={this.state.address}
                                        />
                                        <small className="text-danger inP">{!(this.state.address === "") ? isError.address : "فیلد ضروری*"}</small>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">شماره تماس
                                            {' '}
                                            {
                                                (isError.phone.length === 0 && !(this.state.phone === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </label>
                                        <input
                                            type="phone"
                                            name="phone"
                                            onChange={this.handleInputChange}
                                            className="form-control1"
                                            placeholder=".شماره تلفن همراه جدید را وارد كنید"
                                            value={this.state.phone}
                                        />
                                        <small className="text-danger inP">{!(this.state.phone === "") ? isError.phone : "فیلد ضروری*"}</small>
                                    </div>
                                </div>

                                <div class="mt-5 text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4 border-0"
                                        style={
                                            { "background-color": "#811854" }
                                        }
                                        onClick={() => this.submitGeneral()}
                                        disabled={
                                            (
                                                this.state.address === null
                                                || this.state.phone === null
                                                || this.state.email === null
                                                || this.state.user_name === null
                                                || this.state.first_name === null

                                                || this.state.isError.address.length > 0
                                                || this.state.isError.phone.length > 0
                                                || this.state.isError.email.length > 0
                                                || this.state.isError.user_name.length > 0
                                                || this.state.isError.first_name.length > 0
                                            )
                                                ?
                                                true
                                                :
                                                false
                                        }
                                    >
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-3 imgC  border-right">
                            <div class="col-12 col-sm-6 col-lg-3 imgBox">
                                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{ visible: true }, { "animationName": "fadeInUp" }}>

                                    <div class="advisor_thumb">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />

                                        <div class="social-info">
                                            <h5>
                                                {this.state.isBookStore === false ? "شخص حقیقی" : "كتابفروشی"}
                                            </h5>
                                        </div>
                                    </div>

                                    <div class="single_advisor_details_info">
                                        <h6>{this.state.first_name}</h6>
                                        <p class="designation">{this.state.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary px-4 border-0 imgButton"
                                    style={
                                        { "background-color": "#811854" }
                                    }
                                    onClick={() => this.handleModalShowHide()}
                                >
                                    تغییر عکس کاربری
                                </button>
                            </div>
                        </div>




                    </div>
                </div>




                <Modal backdrop="static" centered className="my-modal" show={this.state.showHideImage}>
                    <Modal.Body>
                        <h4>...این بخش به زودی به سایت اضافه می شود</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <div class="text-center">
                                <Button
                                    className="btn btn-primary px-4 border-0"
                                    style={
                                        { "background-color": "#811854" }
                                    }
                                >
                                    ذخیره
                                </Button>
                                {' '}
                                <Button
                                    className="btn btn-secondary border-0"
                                    onClick={() => this.handleModalShowHide()}
                                >
                                    خروج
                                </Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>


            </div>


        );
    }
}





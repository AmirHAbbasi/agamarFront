import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./signUp.css";


const regExp = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);


class signUp extends React.Component {
    constructor() {
        super();
        this.state = {
            showHide: true,
            errorLogin: "",
            first_name: "",
            user_name: "",
            email: "",
            address: "",
            bookOrPerson: "",
            phone: "",
            password: "",
            password2: "",
            isError: {
                showHide: "",
                first_name: "",
                user_name: "",
                email: "",
                address: "",
                bookOrPerson: "",
                phone: "",
                password: "",
                password2: "",
                bookOrPerson: "",
            },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "first_name":
                isError.first_name =
                    value.length < 1 ? "فیلد ضروری*" : "";
                break;
            case "user_name":
                isError.user_name =
                    value.length < 1 ? "فیلد ضروری*" : "";
                break;
            case "address":
                isError.address =
                    value.length < 1 ? "فیلد ضروری*" : "";
                break;
            case "phone":
                isError.phone =
                    value.length < 11 || value.length > 11
                        ? "!تلفن همراه نامعتبر"
                        : "";
                break;
            case "email":
                isError.email = !regExp.test(value) ? "!آدرس ایمیل نامعتبر" : "";
                if (value.length < 1) {
                    isError.email = "فیلد ضروری*";
                }
                break;
            case "password":
                isError.password =
                    value.length < 8 ? "!رمز عبور انتخابی خیلی كوتاه است" : "";
                break;
            case "password2":
                isError.password2 =
                    value === this.state.password
                        ? ""
                        : "!رمز عبور به درستی تكرار نشده است";
                break;
            case "bookOrPerson":
                isError.bookOrPerson =
                    value.length < 1 ? "!مشخص كردن نوع حساب كاربری الزامی می باشد" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value,
        });
        console.log(this.state);
    };



    submit = event => {
        let isFormValid = true;
        Object.values(this.state.isError).forEach((element) => {
            if (element.length > 0) {
                isFormValid = false;
            }
        });
        if (this.state.address.length < 1) {
            isFormValid = false;
            this.state.isError.address = "فیلد ضروری*";
        }
        if (this.state.password.length < 1) {
            isFormValid = false;
            this.state.isError.password = "فیلد ضروری*";
        }
        if (this.state.phone.length < 1) {
            isFormValid = false;
            this.state.isError.phone = "فیلد ضروری*";
        }
        if (this.state.email.length < 1) {
            isFormValid = false;
            this.state.isError.email = "فیلد ضروری*";
        }
        if (this.state.user_name.length < 1) {
            isFormValid = false;
            this.state.isError.user_name = "فیلد ضروری*";
        }
        if (this.state.first_name.length < 1) {
            isFormValid = false;
            this.state.isError.first_name = "فیلد ضروری*";
        }
        if (this.state.bookOrPerson.length < 1) {
            isFormValid = false;
            this.state.isError.bookOrPerson =
                "!مشخص كردن نوع حساب كاربری الزامی می باشد";
        }
        if (this.state.password2.length < 1) {
            isFormValid = false;
            this.state.isError.password2 = "فیلد ضروری*";
        }
        if (isFormValid === true) {

            let is_active_person = false;
            let is_shop = false;
            if (this.state.bookOrPerson === "person") {
                is_active_person = true;
            } else if (this.state.bookOrPerson === "library") is_shop = true;

            const headers = {
                'Content-Type': 'application/json',
            }
            console.log(this.state);
            const data = {
                username: this.state.user_name,
                name: this.state.first_name,
                password: this.state.password,
                email: this.state.email,
                phone_number: this.state.phone,
                address: this.state.address,
                is_book_store: is_shop,
                is_private_person: is_active_person,
            }

            axios.post('http://127.0.0.1:8000/api/register', data, { headers: headers, withCredentials: true }).then(
                res => {
                    if (res.data != null) {
                        console.log(res.data);
                        this.setState({
                            loggedIn: true,
                            returnedUsername: res.data.username
                        })

                        this.handleModalShowHide();
                    } else {
                        console.log("failed to log in");
                    }
                }

            ).catch(error => {
                // console.log(error.response.data.username);
                console.log("error is here");
                console.error(error.response);
                if (error.response.data.username.length > 0) {

                    this.setState({ errorLogin: ".نام كاربری وارد شده از قبل در سایت ثبت نام شده است" });
                }
                if (error.response.data.email.length > 0) {

                    this.setState({ errorLogin: ".ایمیل وارد شده از قبل در سایت ثبت نام شده است" });
                }
                else {
                    this.setState({ errorLogin: ".شماره تلفن وارد شده از قبل در سایت ثبت نام شده است" });
                }

            })



            console.log(this.state);
        } else {
            this.handleModalShowHideError();
            console.log(this.state);
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide });
    }




    render() {
        const { isError } = this.state;
        const { errorLogin } = this.state;
        return (
            <div>


                <Modal dialogClassName="modal-90w" backdrop="static" centered className="my-modal" show={this.state.showHide}>
                    <Modal.Body>
                        <div className="align-items-right text-right header">
                            <button
                                to={"/"}
                                href="#"
                                className="btn"
                                onClick={() => this.handleModalShowHide()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                                <Modal.Title></Modal.Title>
                            </button>
                        </div>
                        {/* <div className="container">
                            <div className="main-body"> */}
                        <div className="text-center" id="title">
                            <h4>ثبت نام</h4>
                            <small className="text-danger text-center">{errorLogin}</small>
                        </div>
                        <div className="row">

                            <div className="col-lg-6 card2">
                                <div className="card2 border-0">
                                    <div className="card-body1">
                                        {/* <img src="https://www.prattlibrary.org/assets/card/bookshelves-bright-colors.jpg" width="450px" height="870px" /> */}
                                        {/* <p>اینجا یک عکس قرار میگیرد</p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <form calssName="form-tag" onSubmit={() => { this.submit(); this.handleModalShowHide(); }}>


                                            <p className="labels">نام
                                            {' '}
                                                {
                                                    (isError.first_name.length === 0 && this.state.first_name.length)
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
                                            </p>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    name="first_name"
                                                    onChange={this.handleInputChange}
                                                    placeholder="لطفا نام شخص و یا کتابفروشی را وارد کنید"
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.first_name.length > 0 ? isError.first_name : "فیلد ضروری*"}</small>
                                            </div>



                                            <p className="labels">نام كاربری
                                            {' '}
                                                {
                                                    (isError.user_name.length === 0 && this.state.user_name.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="username"
                                                    type="text"
                                                    placeholder="لطفا یک نام کاربری برای خود انتخاب کنید"
                                                    name="user_name"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.user_name.length > 0 ? isError.user_name : "فیلد ضروری*"}</small>
                                            </div>




                                            <p className="labels">ایمیل
                                            {' '}
                                                {
                                                    (isError.email.length === 0 && this.state.email.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="لطفا آدرس پست الکترونیکی خود را وارد کنید"
                                                    name="email"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.email.length > 0 ? isError.email : "فیلد ضروری*"}</small>
                                            </div>


                                            <p className="labels">آدرس
                                            {' '}
                                                {
                                                    (isError.address.length === 0 && this.state.address.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder="لطفا آدرس شخص و یا کتابفروشی را وارد کنید"
                                                    name="address"
                                                    onChange={this.handleInputChange}
                                                />

                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.address.length > 0 ? isError.address : "فیلد ضروری*"}</small>
                                            </div>

                                            <p className="labels">شماره تماس
                                            {' '}
                                                {
                                                    (isError.phone.length === 0 && this.state.phone.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    placeholder="لطفا شماره تماس شخص و یا کتابفروشی را وارد کنید"
                                                    name="phone"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.phone.length > 0 ? isError.phone : "فیلد ضروری*"}</small>
                                            </div>


                                            <p className="labels">رمز عبور
                                            {' '}
                                                {
                                                    (isError.password.length === 0 && this.state.password.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    placeholder="لطفا یک رمز عبور قوی برای حساب خود انتخاب کنید"
                                                    name="password"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.password.length > 0 ? isError.password : "فیلد ضروری*"}</small>
                                            </div>




                                            <p className="labels">تکرار رمز عبور
                                            {' '}
                                                {
                                                    (isError.password2.length === 0 && this.state.password2.length)
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
                                            </p>
                                            <div className="form-group">
                                                <input
                                                    id="password2"
                                                    placeholder="لطفا رمز عبور انتخابي خود را دوباره تكرار كنيد"
                                                    type="password"
                                                    name="password2"
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="text-danger">{this.state.password2.length > 0 ? isError.password2 : "فیلد ضروری*"}</small>
                                            </div>



                                            <div className="radio text-right">
                                                <div>
                                                    <label>:نوع حساب كاربری خود را انتخاب كنید</label>
                                                </div>
                                                <label for="inlineRadio1">كتابفروشی</label>
                                                {' '}
                                                <input
                                                    type="radio"
                                                    name="bookOrPerson"
                                                    id="inlineRadio1"
                                                    value="library"
                                                    checked={this.state.bookOrPerson === "library"}
                                                    onChange={this.handleInputChange}
                                                />
                                                {'     '}
                                                <label for="inlineRadio1">شخص حقیقی</label>
                                                {' '}
                                                <input
                                                    type="radio"
                                                    name="bookOrPerson"
                                                    id="inlineRadio1"
                                                    value="person"
                                                    checked={this.state.bookOrPerson === "person"}
                                                    onChange={this.handleInputChange}
                                                />
                                                <br></br>
                                                <label for="password2" className="text-danger">{this.state.bookOrPerson.length > 0 ? isError.bookOrPerson : "!مشخص كردن نوع حساب كاربری الزامی می باشد"}</label>
                                            </div>
                                            <br></br>

                                            <br></br>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <div>
                                <p className="forgot-password text-right">
                                    قبلا ثبت نام کرده اید؟{" "}
                                    <a
                                        className="nav-link"
                                        to={"/ورود"}
                                        href="#"
                                        onClick={() => {
                                            this.handleModalShowHide();
                                        }}
                                    >
                                        ورود
                                                </a>
                                    {/* <small className="text-danger text-center">{errorLogin}</small> */}
                                </p>
                            </div>
                            <div class="text-center">
                                <Button
                                    style={
                                        { "background-color": "#811854" }
                                    }
                                    type="submit"
                                    to={"/ورود"}
                                    href="#"
                                    onClick={() => {
                                        this.submit();
                                    }}
                                    disabled={
                                        (
                                            this.state.address.length < 1
                                            || this.state.password.length < 1
                                            || this.state.phone.length < 1
                                            || this.state.email.length < 1
                                            || this.state.user_name.length < 1
                                            || this.state.first_name.length < 1
                                            || this.state.bookOrPerson.length < 1
                                            || this.state.password2.length < 1

                                            || this.state.isError.address.length > 0
                                            || this.state.isError.password.length > 0
                                            || this.state.isError.phone.length > 0
                                            || this.state.isError.email.length > 0
                                            || this.state.isError.user_name.length > 0
                                            || this.state.isError.first_name.length > 0
                                            || this.state.isError.bookOrPerson.length > 0
                                            || this.state.isError.password2.length > 0
                                        )
                                            ?
                                            true
                                            :
                                            false
                                    }
                                >
                                    ثبت نام
                                </Button>
                                {' '}
                                <Button
                                    to={"/"}
                                    href="#"
                                    className="btn btn-secondary"
                                    onClick={() => this.handleModalShowHide()}
                                >
                                    خروج
                                </Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

export default signUp;

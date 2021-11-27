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
            showHideError: false,
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
                    value.length < 1 ? "!فیلد ضروری*" : "";
                break;
            case "user_name":
                isError.user_name =
                    value.length < 1 ? "!فیلد ضروری*" : "";
                break;
            case "address":
                isError.address =
                    value.length < 1 ? "!فیلد ضروری*" : "";
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
                    isError.email = "!فیلد ضروری*";
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
            this.state.isError.password = ".فیلد ضروری*";
        }
        if (this.state.phone.length < 1) {
            isFormValid = false;
            this.state.isError.phone = ".فیلد ضروری*";
        }
        if (this.state.email.length < 1) {
            isFormValid = false;
            this.state.isError.email = ".فیلد ضروری*";
        }
        if (this.state.user_name.length < 1) {
            isFormValid = false;
            this.state.isError.user_name = ".فیلد ضروری*";
        }
        if (this.state.first_name.length < 1) {
            isFormValid = false;
            this.state.isError.first_name = ".فیلد ضروری*";
        }
        if (this.state.bookOrPerson.length < 1) {
            isFormValid = false;
            this.state.isError.bookOrPerson =
                "!مشخص كردن نوع حساب كاربری الزامی می باشد";
        }
        if (this.state.password2.length < 1) {
            isFormValid = false;
            this.state.isError.password2 = ".فیلد ضروری*";
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

    handleModalShowHideError() {
        this.setState({ showHideError: !this.state.showHideError });
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
                        </div>
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <img src="https://www.prattlibrary.org/assets/card/bookshelves-bright-colors.jpg" width="450px" height="870px" />
                                        {/* <p>اینجا یک عکس قرار میگیرد</p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <form calssName="form-tag" onSubmit={() => { this.submit(); this.handleModalShowHide(); }}>


                                            <p className="labels">نام</p>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    name="first_name"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label
                                                    for="lastname"
                                                    className={(isError.first_name.length === 0 && this.state.first_name.length > 0) ? "OK" : "text-danger"}
                                                >
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
                                                                    viewBox="0 0 16 16"
                                                                    stroke="currentColor"
                                                                    strokeWidth="4">
                                                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                </svg>
                                                            )
                                                            : isError.first_name
                                                    }
                                                </label>
                                            </div>

                                            <p className="labels">نام كاربری</p>

                                            <div className="form-group">

                                                <input
                                                    id="username"
                                                    type="text"
                                                    name="user_name"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="username" className={(isError.user_name.length === 0 && this.state.user_name.length > 0) ? "OK" : "text-danger"}>{(isError.user_name.length === 0 && this.state.user_name.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.user_name}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.user_name}</small> */}

                                            <p className="labels">ایمیل</p>
                                            <div className="form-group">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="email" className={(isError.email.length === 0 && this.state.email.length > 0) ? "OK" : "text-danger"}>{(isError.email.length === 0 && this.state.email.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.email}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.email}</small> */}

                                            <p className="labels">آدرس</p>
                                            <div className="form-group">
                                                <input
                                                    id="address"
                                                    type="text"
                                                    name="address"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="address" className={(isError.address.length === 0 && this.state.address.length > 0) ? "OK" : "text-danger"}>{(isError.address.length === 0 && this.state.address.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.address}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.address}</small> */}

                                            <p className="labels">شماره تماس</p>
                                            <div className="form-group">
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    name="phone"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="phone" className={(isError.phone.length === 0 && this.state.phone.length > 0) ? "OK" : "text-danger"}>{(isError.phone.length === 0 && this.state.phone.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.phone}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.phone}</small> */}

                                            <p className="labels">رمز عبور</p>
                                            <div className="form-group">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="password" className={(isError.password.length === 0 && this.state.password.length > 0) ? "OK" : "text-danger"}>{(isError.password.length === 0 && this.state.password.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.password}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.password}</small> */}
                                            <p className="labels">تکرار رمز عبور</p>
                                            <div className="form-group">
                                                <input
                                                    id="password2"
                                                    type="password"
                                                    name="password2"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="password2" className={(isError.password2.length === 0 && this.state.password2.length > 0) ? "OK" : "text-danger"}>{(isError.password2.length === 0 && this.state.password2.length) ? (
                                                    < svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-check2"
                                                        viewBox="0 0 16 16"
                                                        stroke="currentColor"
                                                        strokeWidth="4">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                ) : isError.password2}</label>
                                            </div>
                                            {/* <small className="text-danger text-right">{isError.password2}</small> */}



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
                                                <label for="password2" className="text-danger">{isError.bookOrPerson}</label>
                                            </div>
                                            <br></br>
                                            {/* <small className="text-danger text-right">{isError.bookOrPerson}</small> */}



                                            {/* <div className="form-group">
                                                        <div>
                                                            <label>:نوع حساب كاربری خود را انتخاب كنید</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="bookOrPerson"
                                                                id="inlineRadio1"
                                                                value="library"
                                                                checked={this.state.bookOrPerson === "library"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                كتابفروشی
            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="bookOrPerson"
                                                                id="inlineRadio2"
                                                                value="person"
                                                                checked={this.state.bookOrPerson === "person"}
                                                                onChange={this.handleInputChange}
                                                            />
                                                            <label className="form-check-label" htmlFor="inlineRadio2">
                                                                شخص حقیقی
            </label>
                                                        </div>{" "}
                                                    </div>
                                                    <small className="text-danger">{isError.bookOrPerson}</small> */}
                                            <br></br>
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
                                                <small className="text-danger text-center">{errorLogin}</small>
                                            </p>
                                            <div class="text-right">
                                                <Button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    to={"/ورود"}
                                                    href="#"
                                                    onClick={() => {
                                                        this.submit();
                                                    }}
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
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div>
                        </div> */}
                        {/* <div class="column">
                            <p>column</p>
                        </div>
                        <div class="column">
                            
                        </div> */}
                    </Modal.Body>
                    {/* <Modal.Footer>
                        
                    </Modal.Footer> */}
                </Modal>


                <Modal show={this.state.showHideError}>
                    <div className="text-center">
                        {/* <Modal.Header
              <Modal.Title></Modal.Title>
            </Modal.Header> */}
                        <Modal.Body>
                            <div className="align-items-right text-right">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => this.handleModalShowHideError()}
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
                            <div className="text-center">
                                <h5>شما فرم را به درستی تکمیل نکرده اید</h5>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button
                                type="button"
                                className="btn btn-secondary btn-lg btn-container-left btn-block"
                                onClick={() => this.handleModalShowHideError()}
                            >
                                فهمیدم
                            </button>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div >
        );
    }
}

export default signUp;

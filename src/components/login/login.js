import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./login.css";
import profile from "../profile/profile";
import signUp from "../signUp/signUp";


const regExp = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);


class login extends React.Component {
    constructor() {
        super();
        this.state = {
            showHide: true,
            errorLogin: "",
            user_name: "",
            password: "",
            postId: null,
            errorMessage: null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide });
    }


    getUserInfo(access, refresh) {
        console.log("getting user info");
        let info = {
            username: "",
            name: "",
            prof_image: "",
            access_token: access,
            refresh_token: refresh,
            email: "",
            phone_number: "",
            address: "",
            isBookStore: "",
            isPrivatePerson: ""
        }
        // console.log(access);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`,
        }
        axios.get('http://127.0.0.1:8000/api/userInfo', { headers: headers, withCredentials: true }).then(
            res => {
                console.log("start getting user info");
                if (res.data != null) {
                    // console.log(res.data.message);
                    info.username = res.data.message.username;
                    info.name = res.data.message.name;
                    info.prof_image = res.data.message.profile_image;
                    info.email = res.data.message.email;
                    info.phone_number = res.data.message.phone_number;
                    info.address = res.data.message.address;
                    info.isBookStore = res.data.message.is_book_store;
                    info.isPrivatePerson = res.data.message.is_private_person;
                    console.log("info:", info);
                    this.setState({
                        loggedIn: true,
                        returnedUsername: res.data.username
                    })
                    localStorage.setItem("info", JSON.stringify(info));
                    // let item = JSON.parse(localStorage.getItem("info"));
                    // console.log("item:");
                    // console.log(item);

                } else {
                    console.log("failed to log in");
                }
            }
        ).catch(error => {
            console.log("error in get info loop", error);
            console.error(error.response);

        })
        this.props.onSubmit(info);
    }


    submit = event => {

        console.log("اینجا");
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            "username": this.state.user_name,
            "password": this.state.password,
        }
        axios.post('http://127.0.0.1:8000/api/token', data, { headers: headers, withCredentials: true }).then(
            res => {
                if (res.data != null) {

                    console.log("res.data:", res.data);
                    // console.log(res.data.access);
                    this.setState({
                        loggedIn: true,
                        returnedUsername: res.data.username
                    })
                    this.getUserInfo(res.data.access, res.data.refresh);
                    this.handleModalShowHide();

                } else {
                    console.log("failed to log in");
                }
            }
        ).catch(error => {
            console.log("error is here", error);
            this.setState({ errorLogin: "!نام كاربری یا رمز عبور اشتباه است" });
            console.error(error.response);

        })

    };




    render() {
        const { errorLogin } = this.state;
        return (
            <Router>
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
                                <h4>ورود به حساب کاربری</h4>
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

                                                <p className="labels">نام كاربری</p>
                                                <div class="form-group text-left">
                                                    <input
                                                        id="username"
                                                        type="text"
                                                        placeholder="لطفا یک نام کاربری برای خود انتخاب کنید"
                                                        name="user_name"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </div>

                                                <p className="labels">رمز عبور</p>
                                                <div class="form-group text-left">
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        placeholder="لطفا یک رمز عبور خود را وارد نمایید"
                                                        name="password"
                                                        onChange={this.handleInputChange}
                                                    />
                                                </div>
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
                                        قبلا ثبت نام نکرده اید؟{" "}
                                        <Link
                                            className="nav-link"
                                            to={"/ثبت_نام"}
                                            href="#"
                                            onClick={() => {
                                                this.handleModalShowHide();
                                            }}
                                        >
                                            ثبت نام
                                        </Link>

                                    </p>
                                </div>
                                <div class="text-center">
                                    <Button
                                        className="btn btn-primary border-0"
                                        style={
                                            { "background-color": "#811854" }
                                        }
                                        type="submit"
                                        to={"/پروفایل_كاربری"}
                                        href="#"
                                        onClick={() => {
                                            this.submit();
                                        }}
                                        disabled={
                                            (
                                                this.state.password.length < 1
                                                || this.state.user_name.length < 1
                                            )
                                                ?
                                                true
                                                :
                                                false
                                        }
                                    >
                                        ورود به سایت
                                </Button>
                                    {' '}
                                    <Link
                                        to={"/"}
                                        href="#"
                                        className="btn btn-secondary"
                                        onClick={() => this.handleModalShowHide()}
                                    >
                                        خروج
                                </Link>
                                </div>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div >
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            {/* <Route exact path="/" component={Empty} /> */}
                            <Route path="/ثبت_نام" component={signUp} />
                            <Route path="/پروفایل_كاربری" component={profile} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default login;

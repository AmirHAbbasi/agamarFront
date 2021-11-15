import React from "react";
import { Button, Modal } from "react-bootstrap";
// import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Empty from "./empty";
import axios from "axios";

import login from "./login";

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
          value.length < 1 ? "!اين فيلد نمي تواند خالي باشد" : "";
        break;
      case "user_name":
        isError.user_name =
          value.length < 1 ? "!اين فيلد نمي تواند خالي باشد" : "";
        break;
      case "address":
        isError.address =
          value.length < 1 ? "!اين فيلد نمي تواند خالي باشد" : "";
        break;
      case "phone":
        isError.phone =
          value.length < 11 || value.length > 11
            ? "!تلفن همراه معتبر نيست"
            : "";
        break;
      case "email":
        isError.email = !regExp.test(value) ? "!آدرس ايميل معتبر نيست" : "";
        if (value.length < 1) {
          isError.email = "!اين فيلد نمي تواند خالي باشد";
        }
        break;
      case "password":
        isError.password =
          value.length < 6 ? "!رمز عبور انتخابي خيلي كوتاه است" : "";
        break;
      case "password2":
        isError.password2 =
          value === this.state.password
            ? ""
            : "!رمز عبور به درستي تكرار نشده است";
        break;
      case "bookOrPerson":
        isError.bookOrPerson =
          value.length < 1 ? "!مشخص كردن نوع حساب كاربري الزامي مي باشد" : "";
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
      this.state.isError.address = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.password.length < 1) {
      isFormValid = false;
      this.state.isError.password = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.phone.length < 1) {
      isFormValid = false;
      this.state.isError.phone = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.email.length < 1) {
      isFormValid = false;
      this.state.isError.email = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.user_name.length < 1) {
      isFormValid = false;
      this.state.isError.user_name = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.first_name.length < 1) {
      isFormValid = false;
      this.state.isError.first_name = ".اين فيلد نمي تواند خالي باشد";
    }
    if (this.state.bookOrPerson.length < 1) {
      isFormValid = false;
      this.state.isError.bookOrPerson =
        "!مشخص كردن نوع حساب كاربري الزامي مي باشد";
    }
    if (this.state.password2.length < 1) {
      isFormValid = false;
      this.state.isError.password2 = ".اين فيلد نمي تواند خالي باشد";
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
        console.log("error id=s here");
        console.error(error.response);
        if (error.response.data.username.length > 0) {

          this.setState({ errorLogin: ".نام كاربري وارد شده از قبل در سايت ثبت نام شده است" });
        }
        if (error.response.data.email.length > 0) {

          this.setState({ errorLogin: ".ايميل وارد شده از قبل در سايت ثبت نام شده است" });
        }
        else {
          this.setState({ errorLogin: ".شماره تلفن وارد شده از قبل در سايت ثبت نام شده است" });
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
      <Router>
        <div>
          <Modal show={this.state.showHide}>
            <Modal.Body>
              <div className="align-items-right text-right">
                <Link
                  type="button"
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
                </Link>
              </div>
              <h4 className="text-center">ثبت نام</h4>
              <form className="text-right" noValidate>
                <div className="form-group">
                  <label htmlFor="full_name">نام</label>
                  <input
                    type="text"
                    className={
                      isError.first_name.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    name="first_name"
                    onChange={this.handleInputChange}
                    placeholder="لطفا نام شخص و یا کتابفروشی را وارد کنید"
                  />
                  <small className="text-danger">{isError.first_name}</small>
                </div>

                <div className="form-group">
                  <label>نام کاربری</label>
                  <input
                    type="text"
                    className={
                      isError.user_name.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    name="user_name"
                    onChange={this.handleInputChange}
                    placeholder="لطفا یک نام کاربری برای خود انتخاب کنید"
                  />
                  <small className="text-danger">{isError.user_name}</small>
                </div>

                <div className="form-group">
                  <label>پست الکترونیکی</label>
                  <input
                    type="email"
                    className={
                      isError.email.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    name="email"
                    onChange={this.handleInputChange}
                    placeholder="لطفا آدرس پست الکترونیکی خود را وارد کنید"
                  />
                  <small className="text-danger">{isError.email}</small>
                </div>

                <div className="form-group">
                  <label>آدرس</label>
                  <input
                    type="text"
                    name="address"
                    onChange={this.handleInputChange}
                    className={
                      isError.address.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    placeholder="لطفا آدرس شخص و یا کتابفروشی را وارد کنید"
                  />
                  <small className="text-danger">{isError.address}</small>
                </div>

                <div className="form-group">
                  <label>تلفن همراه</label>
                  <input
                    type="phone"
                    className={
                      isError.phone.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    name="phone"
                    onChange={this.handleInputChange}
                    placeholder="لطفا شماره تماس شخص و یا کتابفروشی را وارد کنید"
                  />
                  <small className="text-danger">{isError.phone}</small>
                </div>

                <div className="form-group">
                  <label>رمز عبور</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    className={
                      isError.password.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    placeholder="لطفا یک رمز عبور قوی برای حساب خود انتخاب کنید"
                  />
                  <small className="text-danger">{isError.password}</small>
                </div>

                <div className="form-group">
                  <label>تكرار رمز عبور</label>
                  <input
                    type="password"
                    name="password2"
                    onChange={this.handleInputChange}
                    className={
                      isError.password2.length > 0
                        ? "is-invalid form-control text-right"
                        : "form-control text-right"
                    }
                    placeholder="لطفا رمز عبور انتخابي خود را دوباره تكرار كنيد"
                  />
                  <small className="text-danger">{isError.password2}</small>
                </div>

                <div className="form-group">
                  <div>
                    <label>:نوع حساب كاربري خود را انتخاب كنيد</label>
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
                      كتابفروشي
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
                      شخص حقيقي
                    </label>
                  </div>{" "}
                </div>
                <small className="text-danger">{isError.bookOrPerson}</small>

                <p className="forgot-password text-right">
                  قبلا ثبت نام کرده اید؟{" "}
                  <Link
                    className="nav-link"
                    to={"/ورود"}
                    href="#"
                    onClick={() => {
                      this.handleModalShowHide();
                    }}
                  >
                    ورود
                  </Link>
                  <small className="text-danger text-center">{errorLogin}</small>
                </p>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Link
                type="submit"
                className="btn btn-primary"
                to={"/ورود"}
                href="#"
                onClick={() => {
                  this.submit();
                }}
              >
                ثبت نام
              </Link>
              <Link
                to={"/"}
                href="#"
                className="btn btn-secondary"
                onClick={() => this.handleModalShowHide()}
              >
                خروج
              </Link>
            </Modal.Footer>
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

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Empty} />
                <Route path="/ورود" component={login} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default signUp;

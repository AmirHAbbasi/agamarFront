import React from "react";
import { Button, Modal } from "react-bootstrap";
// import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "../App.css";
// import axios from "axios";

const regExp = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      return false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      return false;
    } else {
      isValid = true;
    }
  });

  return isValid;
};
class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
      showHideError: false,
      // error: "",
      first_name: null,
      user_name: null,
      email: null,
      address: null,
      bookOrPerson: null,
      phone: null,
      password: null,
      isError: {
        showHide: "",
        first_name: "",
        user_name: "",
        email: "",
        address: "",
        bookOrPerson: "",
        phone: "",
        password: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleInputChange(e) {
    // const target = event.target;
    // let value = target.value;
    // const name = target.name;
    // this.setState({
    //   [name]: value,
    // });

    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "first_name":
        isError.first_name = value.length < 1 ? "!!خطا!!" : "";
        break;
      case "user_name":
        isError.user_name = value.length < 1 ? "!!خطا!!" : "";
        break;
      case "address":
        isError.address = value.length < 1 ? "!!خطا!!" : "";
        break;
      case "phone":
        isError.phone = value.length < 11 || value.length > 11 ? "!!خطا!!" : "";
        break;
      case "email":
        isError.email =
          value.length < 1 || !regExp.test(value) ? "!!خطا!!" : "";
        break;
      case "password":
        isError.password = value.length < 6 ? "!!خطا!!" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError: isError,
      [name]: value,
    });
    console.log(this.state);
  }

  submit() {
    if (formValid(this.state)) {
      console.log(this.state);
      this.handleModalShowHide();
    } else {
      this.handleModalShowHideError();
      console.log("Form is invalid!");
    }
    // if (formValid(this.state)) {
    //   this.handleModalShowHide();
    //   console.log(this.state);
    // } else {
    //   this.setState({ error: "!!شما فرم را به درستی تکمیل نکرده اید" });
    //   console.log("Form is invalid!");
    // }
    // console.log(this.state);
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  handleModalShowHideError() {
    this.setState({ showHideError: !this.state.showHideError });
  }

  render() {
    const { isError } = this.state;
    return (
      <div>
        {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          ثبت نام
        </Button> */}

        <Modal show={this.state.showHide}>
          {/* <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title></Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="align-items-right text-right">
              <button
                type="button"
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
                  placeholder={
                    isError.first_name.length > 0
                      ? ".این فیلد نمی تواند خالی باشد"
                      : "لطفا نام شخص و یا کتابفروشی را وارد کنید"
                  }
                />
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
                  placeholder={
                    isError.first_name.length > 0
                      ? ".این فیلد نمی تواند خالی باشد"
                      : "لطفا یک نام کاربری برای خود انتخاب کنید"
                  }
                />
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
                  placeholder={
                    isError.first_name.length > 0
                      ? ".پست الکترونیک را با فرمت صحیح وارد کنید"
                      : "لطفا آدرس پست الکترونیکی خود را وارد کنید"
                  }
                />
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
                  placeholder={
                    isError.first_name.length > 0
                      ? "پر کردن این فیلد اجباری است"
                      : "لطفا آدرس شخص و یا کتابفروشی را وارد کنید"
                  }
                />
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
                  placeholder={
                    isError.first_name.length > 0
                      ? "شماره تلفن باید یازده رقم باشد"
                      : "لطفا شماره تماس شخص و یا کتابفروشی را وارد کنید"
                  }
                />
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
                  placeholder={
                    isError.first_name.length > 0
                      ? ".رمز عبور انتخابی باید حداقل 6 کاراکتر داشته باشد"
                      : "لطفا یک رمز عبور قوی برای حساب خود انتخاب کنید"
                  }
                />
              </div>

              <div className="form-group">
                <label></label>
                <input
                  type="radio"
                  name="bookOrPerson"
                  id="inlineRadiom1"
                  className="form-control text-right"
                  value="library"
                  checked={this.state.bookOrPerson === "library"}
                  onChange={this.handleInputChange}
                />
                <label className="form-check-label" htmlFor="inlineRadiom">
                  کتابفروشی
                </label>
                <input
                  type="radio"
                  name="bookOrPerson"
                  id="inlineRadiom2"
                  className="form-control text-right"
                  value="person"
                  checked={this.state.bookOrPerson === "person"}
                  onChange={this.handleInputChange}
                />
                <label className="form-check-label" htmlFor="inlineRadiom">
                  شخص حقیقی
                </label>
              </div>

              <p className="forgot-password text-right">
                قبلا ثبت نام کرده اید؟ <a href="#">ورود</a>
              </p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                this.submit();
              }}
            >
              ذخیره تغییرات
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              خروج
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showHideError}>
          <div className="text-center">
            {/* <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHideExit()}
            >
              <Modal.Title></Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
              <div className="align-items-right text-right">
                <button
                  type="button"
                  className="btn"
                  onClick={() => this.handleModalShowHideExit()}
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
                <h5>پر کردن همه فیلد ها اجباری می باشد</h5>
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
      </div>
    );
  }
}

export default signUp;

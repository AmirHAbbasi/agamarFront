import React from "react";
import { Button, Modal } from "react-bootstrap";

import axios from "axios";

class BootstrapModalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
      first_name: null,
      user_name: null,
      email: null,
      address: null,
      bookOrPerson: null,
      phone: null,
      password: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  submit(e) {
    // e.preventDefault();
    let is_active_person = false;
    let is_shop = false;
    if (this.state.bookOrPerson === "person") {
      is_active_person = true;
    } else if (this.state.bookOrPerson === "library") is_shop = true;

    // fetch("http://127.0.0.1:8000/api/register", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: {
    //     Name: this.state.user,
    //     Username: this.state.user_name,
    //     email: this.state.email,
    //     phone_number: this.state.phone,
    //     address: this.state.address,
    //     Password: this.state.password,
    //     is_active_person: is_active_person,
    //     is_shop: is_shop,
    //   },
    // });
    // var myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Headers", "*");
    // myHeaders.append("Accept", "application/json");

    var UserCourse = {};
    UserCourse.name = this.state.user;
    UserCourse.username = this.state.user_name;
    UserCourse.email = this.state.email;
    UserCourse.phone_number = this.state.phone;
    UserCourse.address = this.state.address;
    UserCourse.password = this.state.password;
    UserCourse.is_active_person = is_active_person;
    UserCourse.is_book_store = is_shop;

    var raw = JSON.stringify(UserCourse);
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    // fetch("http://127.0.0.1:8000/api/register", requestOptions);
    // .then(
    //   async (response) => {
    //     console.log("status", response.status);

    // if (response.status === 201) {
    //   SetToastState(true);
    //   await timeout(4000);
    //   SetToastState(false);
    //   history.push({
    //     pathname: "/sign-in",
    //     state: { from: ReturnWhereSignupIsCalledFrom() },
    //   });
    // }

    //   return response.json();
    // })
    // .then((rep) => {
    //   console.log(rep[key]);
    // })
    // .catch((error) => {
    //   console.log("error", error);
    // }
    // );
    console.warn(this.state);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <div>
        {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          ثبت نام
        </Button> */}

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>ثبت نام</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="full_name">نام</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  onChange={this.handleInputChange}
                  placeholder="لطفا نام شخص و یا کتابفروشی را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label>نام کاربری</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  onChange={this.handleInputChange}
                  placeholder="لطفا یک نام کاربری برای خود انتخاب کنید"
                />
              </div>

              <div className="form-group">
                <label>پست الکترونیکی</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleInputChange}
                  placeholder="لطفا آدرس پست الکترونیکی خود را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label>آدرس</label>
                <input
                  type="text"
                  name="address"
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="لطفا آدرس شخص و یا کتابفروشی را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label>تلفن همراه</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  onChange={this.handleInputChange}
                  placeholder="لطفا شماره تماس شخص و یا کتابفروشی را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label>رمز عبور</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="لطفا یک رمز عبور قوی برای حساب خود انتخاب کنید"
                />
              </div>

              <div className="form-group">
                <label></label>
                <input
                  type="radio"
                  name="bookOrPerson"
                  id="inlineRadiom1"
                  className="form-control"
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
                  className="form-control"
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
                this.handleModalShowHide();
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
      </div>
    );
  }
}

export default BootstrapModalComponent;

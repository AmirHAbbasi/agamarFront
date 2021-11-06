import React from "react";
import { Button, Modal } from "react-bootstrap";
// import axios from "axios";

class signUp extends React.Component {
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

  async submit() {
    // e.preventDefault();
    let is_active_person = false;
    let is_shop = false;
    if (this.state.bookOrPerson === "person") {
      is_active_person = true;
    } else if (this.state.bookOrPerson === "library") is_shop = true;

    // let myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Headers", "*");
    // myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: this.state.user,
        username: this.state.user_name,
        email: this.state.email,
        phone_number: this.state.phone,
        address: this.state.address,
        password: this.state.password,
        is_private_person: is_active_person,
        is_book_store: is_shop,
      },
    };
    await fetch(
      "http://127.0.0.1:8000/api/register",
      { mode: "no-cors" },
      requestOptions
    ).then((response) => {
      if (response.status !== 201) {
        throw new Error(response.statusText);
      }
      return response.data;
    });
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

export default signUp;

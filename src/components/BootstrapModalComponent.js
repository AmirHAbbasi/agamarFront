import React from "react";
import { Button, Modal } from "react-bootstrap";
import Empty from "./empty";

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
    let is_active_person = false;
    let is_shop = false;
    if (this.state.bookOrPerson === "person") {
      is_active_person = true;
    } else if (this.state.bookOrPerson === "library") is_shop = true;
    axios.post("http://127.0.0.1:8000/api/register", {
      Name: this.state.user,
      Username: this.state.user_name,
      email: this.state.email,
      phone_number: this.state.phone,
      address: this.state.address,
      Password: this.state.password,
      is_active_person: is_active_person,
      is_shop: is_shop,
    });
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
                  id="inlineRadiom"
                  className="form-control"
                  value="library"
                  checked={this.state.bookOrPerson === "library"}
                  onChange={this.handleInputChange}
                />
                <label class="form-check-label" for="inlineRadiom">
                  کتابفروشی
                </label>
                <input
                  type="radio"
                  name="bookOrPerson"
                  id="inlineRadiom"
                  className="form-control"
                  value="person"
                  checked={this.state.bookOrPerson === "person"}
                  onChange={this.handleInputChange}
                />
                <label class="form-check-label" for="inlineRadiom">
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
              class="btn btn-primary"
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

import React, { Component } from "react";
import BootstrapModalComponent from "./BootstrapModalComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Empty from "./empty";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
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
  submit() {
    console.warn(this.state);
    console.log(this.state);
  }
  render() {
    return (
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
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => this.submit()}
        >
          ذخیره تغییرات
        </button>
        <p className="forgot-password text-right">
          قبلا ثبت نام کرده اید؟ <a href="#">ورود</a>
        </p>
      </form>
    );
  }
}

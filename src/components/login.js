import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Empty from "./empty";
import profile from "./profileDashboard";
import signUp from "./signUp";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";


class login extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
      // showHideError: false,
      errorLogin: "",
      user_name: null,
      password: null,
      postId: null,
      errorMessage: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.submit = this.submit.bind(this);
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

    console.log("اينجا");
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
      this.setState({ errorLogin: "!نام كاربري يا رمز عبور اشتباه است" });
      console.error(error.response);

    })

  };

  render() {
    const { errorLogin } = this.state;
    return (
      <Router>
        <div>
          {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          ثبت نام
        </Button> */}

          <Modal show={this.state.showHide}>
            {/* <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>ورود</Modal.Title>
            </Modal.Header> */}
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
              <h4 className="text-center">ورود</h4>

              <form className="text-right">
                <div className="form-group">
                  <label>نام کاربری</label>
                  <input
                    type="text"
                    className="form-control text-right"
                    name="user_name"
                    onChange={this.handleInputChange}
                    placeholder="نام کاربری خود را وارد کنید"
                  />
                </div>

                <div className="form-group">
                  <label>رمز عبور</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    className="form-control text-right"
                    placeholder="رمز عبور خود را وارد کنید"
                  />
                </div>

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

                  <small className="text-danger text-center">{errorLogin}</small>
                </p>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Link
                type="submit"
                className="btn btn-primary"
                to={"/پروفايل_كاربري"}
                href="#"
                onClick={() => {
                  this.submit();
                }}
              >
                ورود به سایت
              </Link>
              <Link
                className="btn btn-secondary"
                to={"/"}
                href="#"
                onClick={() => this.handleModalShowHide()}
              >
                خروج
              </Link>
            </Modal.Footer>
          </Modal>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* <Route exact path="/" component={Empty} /> */}
                <Route path="/ثبت_نام" component={signUp} />
                <Route path="/پروفايل_كاربري" component={profile} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default login;


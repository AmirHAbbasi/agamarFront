import React, { Component } from "react";
import "../ProfileDashboard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Empty from "./empty";
import signUp from "./signUp";
// import login from "./login";
import axios from "axios";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export default class profileDashboard extends Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
      showHideImage: false,
      showHideAgahi: false,
      showHideAlaghe: false,
      showHideGozaresh: false,
      showHideZakhire: false,
      showHideExit: false,
      showContent: <h5>موردی برای نمایش وجود ندارد</h5>,

      totalReactPackages: null,
      // this.props.state.user_info
      pImage: "https://bootdey.com/img/Content/avatar/avatar6.png",

      first_name: "اكبر اكبري",
      user_name: "Akbar123",
      email: "Akbar@gamil.com",
      address: "يه جايي تو ايران",
      isBookStore: false,
      isPrivatePerson: true,
      phone: "03214569878",
      oldPassword: "",
      password: "",
      password2: "",
      access: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2OTAwMjAxLCJpYXQiOjE2MzY4OTk5MDEsImp0aSI6IjJhYzhmMjM4ODIyZjQ5ZWE5NTQ4YjRlOTBkYWEwYjllIiwidXNlcl9pZCI6MTJ9.OOo2-BP29qOK0LVyOPhJJUczFIqUVDBMN2CdJF5z2f0",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
    // console.log(this.props.user_info.name);
  }


  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  onFileChange = (e) => {
    this.setState({ pImage: e.target.files[0] });
  };
  onFileUpload = () => {
    if (this.state.pImage == !null) {
      const formData = new FormData();

      formData.append("myFile", this.state.pImage, this.state.pImage.name);
      console.log(this.state.pImage);
      console.log(this.state);
    }
    this.submitGeneral();
    // axios.post("api/uploadfile", formData);
  };

  handlePartsShowHideAgahi() {
    this.setState({ showHideAgahi: true });
    this.setState({ showHideGozaresh: false });
    this.setState({ showHideAlaghe: false });
    this.setState({ showContent: <h5>محل نمایش لیست سفارشات اخیر</h5> });
  }
  handleshowHide() {
    this.setState({ showHide: false });
  }
  handlePartsShowHideAlaghe() {
    this.setState({ showHideAlaghe: true });
    this.setState({ showHideGozaresh: false });
    this.setState({ showHideAgahi: false });
    this.setState({ showContent: <h5>محل نمایش لیست علاقه مندی ها</h5> });
  }
  handlePartsShowHideGozaresh() {
    this.setState({ showHideGozaresh: true });
    this.setState({ showHideAgahi: false });
    this.setState({ showHideAlaghe: false });
    this.setState({ showContent: <h5>محل نمایش آگهی های اخیرا ثبت شده</h5> });
  }
  handleModalShowHideZakhire() {
    this.setState({ showHideZakhire: !this.state.showHideZakhire });
  }
  handleModalShowHideExit() {
    this.setState({ showHideExit: !this.state.showHideExit });
  }
  handleModalShowHideImage() {
    this.setState({ showHideImage: !this.state.showHideImage });
  }
  submit = event => {

    this.submitGeneral();
  }


  submitGeneral() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.state.access}`,
    }

    const data = {
      username: this.state.user_name,
      name: this.state.first_name,
      email: this.state.email,
      phone_number: this.state.phone,
      address: this.state.address,
      is_book_store: this.state.isBookStore,
      is_private_person: this.state.isPrivatePerson,
      profile_image: this.state.pImage,
    }
    console.log(data);
    axios.patch('http://127.0.0.1:8000/api/update-userInfo', data, { headers: headers, withCredentials: true }).then(
      res => {
        if (res.data != null) {
          console.log(res.data);
          // console.log(res.data.access);
          this.setState({
            loggedIn: true,
            returnedUsername: res.data.username
          })
          this.handleModalShowHideZakhire();
          this.getUserInfo(res.data.access, res.data.refresh);

        } else {
          console.log("failed to update");
        }
      }
    ).catch(error => {
      console.log("error is here");
      console.error(error.response);

    })
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="main-body">
              <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            name="first_name"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".درصورت تمايل به تغيير نام، نام جديد را وارد كنيد"
                            defaultValue={this.state.first_name}
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">نام</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            name="user_name"
                            className="form-control text-right"
                            placeholder=".يك نام كاربري جديد براي خود انتخاب كنيد"
                            defaultValue={this.state.user_name}
                            onChange={this.handleInputChange}
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">نام كاربري</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            name="email"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".يك پست الكترونيك جديد براي خود انتخاب كنيد"
                            defaultValue={this.state.email}
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">پست الكترونيكي</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            name="address"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".آدرس جديد را وارد كنيد"
                            defaultValue={this.state.address}
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">آدرس</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="phone"
                            name="phone"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".شماره تلفن همراه جديد را وارد كنيد"
                            defaultValue={this.state.phone}
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">تلفن همراه</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="password"
                            name="oldPassword"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".به دليل مسائل امنيتي، رمز عبور قبلي خود را وارد كنيد"
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">رمز عبور قبلي</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="password"
                            name="password"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".رمز عبور جديد خود را وارد نماييد"
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">رمز عبور جديد</h6>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="password"
                            name="password2"
                            onChange={this.handleInputChange}
                            className="form-control text-right"
                            placeholder=".رمز عبور جديد خود را مجددا وارد نماييد"
                          ></input>
                        </div>
                        <div className="col-sm-3">
                          <h6 className="mb-0">تكرار رمز عبور جديد</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9 text-secondary">
                          <button
                            type="submit"
                            className="btn btn-primary px-4"
                            onClick={() => this.submit()}
                          >
                            ذخيره تغييرات
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          {this.state.showContent}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={
                            // this.state.pImage === null
                            //   ? "https://bootdey.com/img/Content/avatar/avatar6.png"
                            //   :
                            this.state.pImage
                          }
                          alt="Admin"
                          className="rounded-circle p-1 bg-primary"
                          width="110"
                        ></img>
                        <div className="mt-3">
                          <h4>نام كاربر</h4>
                        </div>
                        {/*  */}
                        <button
                          className="btn btn-primary px-4"
                          onClick={() => this.handleModalShowHideImage()}
                        >
                          تغيير عكس پروفايل
                        </button>
                      </div>
                      <hr className="my-4"></hr>
                      <ul className="list-group list-group-flush align-items-center">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => this.handlePartsShowHideAgahi()}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="bi bi-cart me-2 icon-inline"
                              >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                              </svg>
                              سفارشات اخیر
                            </button>
                          </h6>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                this.handlePartsShowHideAlaghe();
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                color="red"
                                className="bi bi-heart me-2 icon-inline"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                              علاقه مندی ها
                            </button>
                          </h6>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => this.handlePartsShowHideGozaresh()}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="bi bi-journals me-2 icon-inline"
                              >
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                              </svg>
                              گزارش آگهی ها
                            </button>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.showHideZakhire}>
            {/* <Modal.Header></Modal.Header> */}
            <Modal.Body>
              <div className="align-items-right text-right">
                <button
                  type="button"
                  className="btn"
                  onClick={() => this.handleModalShowHideZakhire()}
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
                <h3>تغییرات ذخیره شد</h3>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
                onClick={() => this.handleModalShowHideZakhire()}
              >
                تایید
              </button>
            </Modal.Footer>
            {/* </div> */}
          </Modal>
          <Modal show={this.state.showHideExit}>
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
                  <h3>آیا از خروج خود مطمئن هستید؟</h3>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <div className="button-wrapper btn-container-left"> */}
                <Link
                  to={"/"}
                  href="#"
                  type="button"
                  className="btn btn-primary btn-lg btn-container-left"
                  onClick={() => {
                    this.handleshowHide();
                    this.handleModalShowHideExit();
                  }}
                >
                  خروج
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-container-left"
                  onClick={() => this.handleModalShowHideExit()}
                >
                  بازگشت
                </button>

                {/* </div> */}
              </Modal.Footer>
            </div>
          </Modal>

          <Modal show={this.state.showHideImage}>
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
                    onClick={() => this.handleModalShowHideImage()}
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
                  <h6>:عكس مورد نظر خود را آپلود كنيد</h6>
                  <input type="file" onChange={this.onFileChange} />
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <div className="button-wrapper btn-container-left"> */}
                <Link
                  to={"/"}
                  href="#"
                  type="button"
                  className="btn btn-primary btn-lg btn-container-left"
                  onClick={() => {
                    this.handleModalShowHideImage();
                    this.onFileUpload();
                  }}
                >
                  ذخيره عكس
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-container-left"
                  onClick={() => this.handleModalShowHideImage()}
                >
                  بازگشت
                </button>

                {/* </div> */}
              </Modal.Footer>
            </div>
          </Modal>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Empty} />
                <Route path="/ثبت_نام" component={signUp} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

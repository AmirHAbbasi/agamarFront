import React, { Component } from "react";
import "../ProfileDashboard.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export default class profileDashboard extends Component {
  constructor() {
    super();
    this.state = {
      showHide1: false,
      showHide2: false,
      showHide3: false,
    };
  }
  handleModalShowHide1() {
    this.setState({ showHide1: !this.state.showHide1 });
  }
  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 });
  }
  handleModalShowHide3() {
    this.setState({ showHide3: !this.state.showHide3 });
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="main-body">
            <div class="row">
              <div class="col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">نام</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="يه نفري"
                        ></input>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">نام كاربري</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="aPerson"
                        ></input>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">پست الكترونيكي</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="aPerson@agamar.ir"
                        ></input>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">آدرس</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="يه جايي تو ايران"
                        ></input>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">تلفن همراه</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="0123456789"
                        ></input>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-sm-3">
                        <h6 class="mb-0">رمز عبور</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="aPassword"
                        ></input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3"></div>
                      <div class="col-sm-9 text-secondary">
                        <button class="btn btn-primary px-4">
                          ذخيره تغييرات
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Admin"
                        class="rounded-circle p-1 bg-primary"
                        width="110"
                      ></img>
                      <div class="mt-3">
                        <h4>نام كاربر</h4>
                        <button class="btn btn-primary">صفحه اصلي</button>
                        <button class="btn btn-outline-primary">
                          خروج از حساب كاربري
                        </button>
                      </div>
                    </div>
                    <hr class="my-4"></hr>
                    <ul class="list-group list-group-flush align-items-center">
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            onClick={() => this.handleModalShowHide1()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="bi bi-cart me-2 icon-inline"
                            >
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            سفارشات اخیر
                          </button>
                        </h6>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            onClick={() => this.handleModalShowHide2()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              color="red"
                              class="bi bi-heart me-2 icon-inline"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            علاقه مندی ها
                          </button>
                        </h6>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            onClick={() => this.handleModalShowHide3()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="bi bi-journals me-2 icon-inline"
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

            {/* <div class="row">
              <div class="col-lg-12">
                <div class="tab-block">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        href="#tab1"
                        data-toggle="tab"
                        class="nav-link active"
                        id="first-tab"
                        role="tab"
                        aria-controls="activity"
                        aria-selected="true"
                      >
                        Activity
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#tab2"
                        data-toggle="tab"
                        class="nav-link active"
                        id="second-tab"
                        role="tab"
                        aria-controls="Social"
                        aria-selected="true"
                      >
                        Social
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#tab3"
                        data-toggle="tab"
                        class="nav-link active"
                        id="third-tab"
                        role="tab"
                        aria-controls="Media"
                        aria-selected="true"
                      >
                        Media
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#tab4"
                        data-toggle="tab"
                        class="nav-link active"
                        id="forth-tab"
                        role="tab"
                        aria-controls="Media2"
                        aria-selected="true"
                      >
                        Media2
                      </a>
                    </li>
                  </ul>
                  <div
                    class="tab-content p30"
                    style={{ height: "730px" }}
                    id="myTabContent"
                  >
                    <div
                      id="tab1"
                      class="tab-pane fade show active"
                      role="tabpanel"
                      aria-labelledby="first-tab"
                    >
                      <h3>tab1</h3> */}
            {/* <div class="media">
                        <a class="pull-left" href="#">
                          {" "}
                          <img
                            class="media-object mn thumbnail mw50"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="..."
                          />{" "}
                        </a>
                        <div class="media-body">
                          <h5 class="media-heading mb20">
                            Simon Rivers Posted
                            <small> - 3 hours ago</small>
                          </h5>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            class="mw140 mr25 mb20"
                          />
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar8.png"
                            class="mw140 mr25 mb20"
                          />
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            class="mw140 mb20"
                          />
                          <div class="media-links">
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-thumbs-o-up text-primary mr5"></span>{" "}
                              Like{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-share text-primary mr5"></span>{" "}
                              Share{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-floppy-o text-primary mr5"></span>{" "}
                              Save{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-comment text-primary mr5"></span>{" "}
                              Comment{" "}
                            </span>
                          </div>
                        </div>
                      </div> */}
            {/* <div class="media mt25">
                        <a class="pull-left" href="#">
                          {" "}
                          <img
                            class="media-object mn thumbnail thumbnail-sm rounded mw40"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            alt="..."
                          />{" "}
                        </a>
                        <div class="media-body mb5">
                          <h5 class="media-heading mbn">
                            Simon Rivers Posted
                            <small> - 3 hours ago</small>
                          </h5>
                          <p> Omg so freaking sweet dude.</p>
                          <div class="media pb10">
                            <a class="pull-left" href="#">
                              {" "}
                              <img
                                class="media-object mn thumbnail thumbnail-sm rounded mw40"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt="..."
                              />{" "}
                            </a>
                            <div class="media-body mb5">
                              <h5 class="media-heading mbn">
                                Jessica Wong
                                <small> - 3 hours ago</small>
                              </h5>
                              <p>Omgosh I'm in love</p>
                            </div>
                          </div>
                          <div class="media mtn">
                            <a class="pull-left" href="#">
                              {" "}
                              <img
                                class="media-object mn thumbnail thumbnail-sm rounded mw40"
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt="..."
                              />{" "}
                            </a>
                            <div class="media-body mb5">
                              <h5 class="media-heading mbn">
                                Jessica Wong
                                <small> - 3 hours ago</small>
                              </h5>
                              <p>Omgosh I'm in love</p>
                            </div>
                          </div>
                        </div>
                      </div> */}
            {/* <div class="media mt25">
                        <a class="pull-left" href="#">
                          {" "}
                          <img
                            class="media-object thumbnail mw50"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="..."
                          />{" "}
                        </a>
                        <div class="media-body">
                          <h5 class="media-heading mb20">
                            Simon Rivers Posted
                            <small> - 3 hours ago</small>
                          </h5>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            class="mw140 mr25 mb20"
                          />
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            class="mw140 mr25 mb20"
                          />
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar4.png"
                            class="mw140 mb20"
                          />
                          <div class="media-links">
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-thumbs-o-up text-primary mr5"></span>{" "}
                              Like{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-share text-primary mr5"></span>{" "}
                              Share{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-floppy-o text-primary mr5"></span>{" "}
                              Save{" "}
                            </span>
                            <span class="text-light fs12 mr10">
                              <span class="fa fa-comment text-primary mr5"></span>{" "}
                              Comment{" "}
                            </span>
                          </div>
                        </div>
                      </div> */}
            {/* </div>
                    <div
                      id="tab2"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="second-tab"
                    >
                      <h3>tab2</h3>
                    </div>
                    <div
                      id="tab3"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="third-tab"
                    >
                      <h3>tab3</h3>
                    </div>
                    <div
                      id="tab4"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="forth-tab"
                    >
                      <h3>tab4</h3>
                    </div>
                  </div>
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <Modal show={this.state.showHide1}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>سفارشات اخیر</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              خروج
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showHide2}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>علاقه مندی ها</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              خروج
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showHide3}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>گزارش سفارشات</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body</Modal.Body>
          <Modal.Footer>
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

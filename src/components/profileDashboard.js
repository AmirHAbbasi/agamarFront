import React, { Component } from "react";
import "../ProfileDashboard.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Button, Modal } from "react-bootstrap";

export default class profileDashboard extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="main-body">
            <div class="row">
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
                    {/* <hr class="my-4"></hr> */}
                    {/* <ul class="list-group list-group-flush"> */}
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="bi bi-cart me-2 icon-inline"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                          سبد خريد
                        </h6>
                        <button variant="secondary">رفتن به صفحه</button>
                      </li> */}
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="bi bi-basket2-fill me-2 icon-inline"
                          >
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                          </svg>
                          يه صفحه اي
                        </h6>
                        <button variant="secondary">رفتن به صفحه</button>
                      </li> */}
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="bi bi-book me-2 icon-inline text-info"
                          >
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                          </svg>
                          يه صفحه اي
                        </h6>
                        <button variant="secondary">رفتن به صفحه</button>
                      </li> */}
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="bi bi-bootstrap me-2 icon-inline text-danger"
                          >
                            {/* <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect> */}
                    {/* <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
                            <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          سفارش هاي من
                        </h6>
                        <button variant="secondary">رفتن به صفحه</button>
                      </li> */}{" "}
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="bi bi-briefcase me-2 icon-inline text-primary"
                          >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                          يه صفحه اي
                        </h6>
                        <button variant="secondary">رفتن به صفحه</button>
                      </li> */}
                    {/* </ul> */}
                  </div>
                </div>
              </div>
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
                          value="يه نفري"
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
                          value="aPerson"
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
                          value="aPerson@agamar.ir"
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
                          value="يه جايي تو ايران"
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
                          value="0123456789"
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
                          value="aPassword"
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
            </div>

            <div class="row">
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
                      <h3>tab1</h3>
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
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

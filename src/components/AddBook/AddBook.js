import Avatar from 'react-avatar-edit';
import React from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./AddBook.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class AddBook extends React.Component {
    constructor() {
        super();

        const src = "";
        this.state = {
            preview: null,
            src,

            buttonText: "ثبت آگهی",
            showHide: false,
            isError: {
                showHide: "",
                title: "",
                author: "",
                publisher: "",
                descripsion: "",
                buy: "",
                photo: "",
                price: "",
                category: "",
            },

            title: null,
            author: null,
            publisher: null,
            descripsion: null,
            buy: null,
            price: null,
            category: null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.submit = this.submit.bind(this);
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
        this.onSave = this.onSave.bind(this);
        this.setLoading = this.setLoading.bind(this);
    };
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide });
    }

    componentDidMount() {

        let isError = { ...this.state.isError };

        isError.title =
            this.state.title === null ? "*فیلد ضروری" : "";

        isError.author =
            this.state.author === null ? "*فیلد ضروری" : "";

        isError.descripsion =
            this.state.descripsion === null ? "*فیلد ضروری" : "";

        isError.publisher =
            this.state.publisher === null ? "*فیلد ضروری" : "";

        isError.price =
            this.state.price === null ? "*فیلد ضروری" : "";

        isError.buy =
            this.state.buy === null ? "*فیلد ضروری" : "";

        isError.category =
            this.state.category === null ? "*فیلد ضروری" : "";

        isError.photo =
            this.state.preview === null ? "*فیلد ضروری" : "";

        this.setState({
            isError
        });
        console.log(this.state);

    }


    handleInputChange(e) {
        e.preventDefault();

        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "title":
                isError.title =
                    value.length < 1 ? "*فیلد ضروری" : "";
                break;
            case "author":
                isError.author =
                    value.length < 1 ? "*فیلد ضروری" : "";
                break;
            case "descripsion":
                isError.descripsion =
                    value.length < 1 ? "*فیلد ضروری" : "";
                break;
            case "publisher":
                isError.publisher =
                    value.length < 1 ? "*فیلد ضروری" : "";
                break;
            case "buy":
                isError.buy =
                    value === null ? "*فیلد ضروری" : "";
                break;
            case "price":
                isError.price =
                    value.length < 1 ? "*فیلد ضروری" : "";
                break;
            case "category":
                isError.category =
                    value === null ? "*فیلد ضروری" : "";
                break;
            case "photo":
                isError.buy =
                    value === null ? "*فیلد ضروری" : "";
                break;

            default:
                break;
        }

        this.setState({
            isError,
            [name]: value,
        });
        console.log(this.state);
    }



    // async submit() {
    //     let item = JSON.parse(localStorage.getItem("info"))
    //     let access = item.access_token;

    //     const headers = {
    //         // "Content-Type": "multipart/form-data",
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${access}`,
    //     }

    //     // const data = {
    //     //     author: this.state.author,
    //     //     title: this.state.title,
    //     //     publisher: this.state.publisher,
    //     //     descripsion: this.state.descripsion,
    //     // }
    //     let formData = new FormData();
    //     formData.append("title", this.state.title);
    //     formData.append("publisher", this.state.publisher);
    //     formData.append("descripsion", this.state.descripsion);
    //     formData.append("author", this.state.author);
    //     // console.log(data);
    //     await axios.post('http://127.0.0.1:8000/api/book-create', formData, { headers: headers, withCredentials: true }).then(
    //         res => {
    //             if (res.data != null) {
    //                 console.log("res: ", res);
    //                 console.log("res.data.message: ", res.data.message);


    //                 toast.success("آگهی با موفقیت ثبت شد.", {
    //                     position: "top-center",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });

    //             } else {
    //                 console.log("failed to update");
    //             }
    //         }
    //     ).catch(error => {
    //         console.log("error is in submit general", error);
    //         console.error(error.response);
    //         toast.error("مشکلی از سمت سرور پیش آمده است. لطفا شکیبا باشید.", {

    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });


    //     })



    // }


    onChange = ({ fileList: newFileList }) => {
        this.setState({ fileList: newFileList });
        console.log("onchange");
    };

    onCrop(preview) {
        console.log("onCrop");
        this.setState({ preview })
        // console.log("preview in on crop: ", preview);
    }

    onBeforeFileLoad(elem) {
        console.log("onBeforeFileLoad");
        if (elem.target.files[0].size > 7168000) {
            toast.error("اندازه فایل بیش از حد بزگ است!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            elem.target.value = "";
        };
    }

    async onSave() {
        console.log("onSave");
        // let item = JSON.parse(localStorage.getItem("info"))
        // console.log("item first: ", item);
        // let access = item.access_token;
        let formData = new FormData();
        // let preview = this.state.preview;
        // console.log("preview in onSave: ", this.state.preview);

        if (this.state.preview === null) {
            this.setState({ buttonText: "ثبت آگهی" })
            toast.error("ابتدا باید یک فایل برای عکس جلد انتخاب کنید!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {


            let item = JSON.parse(localStorage.getItem("info"))
            console.log("اضافه کردن آیتم ها به فرم دیتا", this.state, "آیتم:", item);

            let access = item.access_token;


            let formData = new FormData();
            formData.append("title", this.state.title);
            formData.append("publisher", this.state.publisher);
            formData.append("descripsion", this.state.descripsion);
            formData.append("author", this.state.author);
            formData.append("price", this.state.price);
            formData.append("owner", item.username);
            formData.append("buy", this.state.buy);
            formData.append("category", this.state.category);
            console.log("همه جز عکس اضافه شدند");

            await fetch(this.state.preview)
                .then((res) => res.blob())
                .then((res) => {
                    console.log("res: ", res);

                    // console.log("props.email: ", props.email);
                    console.log("formData before append: ", formData.has("profile_image"));
                    let file = new File([res], "test.png");
                    console.log("file: ", file);

                    formData.append("profile_image", file);
                    console.log("عکس هم اضافه شد");
                    console.log("formData after append : ", formData.has("profile_image"));
                    axios.post('http://127.0.0.1:8000/api/book-create/', formData, {
                        headers: {
                            'Authorization': `Bearer ${access}`,
                            "Content-Type": "multipart/form-data",
                        },
                    })
                        .then((response) => {
                            // this.handleModalShowHide();
                            console.log("گرفتن جواب بک");
                            console.log("response: ", response);
                            // item.prof_image = this.state.preview;
                            // this.setState({ pImage: this.state.preview });

                            // localStorage.setItem("info", JSON.stringify(item));
                            console.log("item", item);
                            this.setState({ buttonText: "ثبت آگهی" })
                            toast.success("آگهی با موفقیه ثبت شد.", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        })
                        .catch((error) => {
                            this.setState({ buttonText: "ثبت آگهی" })
                            console.log("error is in submit", error);
                            console.log("به مشکل خوردیم");
                            console.error(error.response);
                            toast.error('مشکلی از سمت سرور پیش آمده، لطفا شکیبا باشید!', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        });
                    // console.log("formData after2 append: ", formData);
                });
        }


        console.log("10");
    }
    onClose() {
        console.log("onClose");
        this.setState({ preview: null })
    };

    setLoading() {
        if (this.state.preview === null) { }
        else
            this.setState({ buttonText: "منتظر بمانید..." })
    }

    previewFunc() {
        if (this.state.preview === null) return (
            <Avatar
                width={80}
                height={34}
                onCrop={this.onCrop}
                onClose={this.onClose}
                onBeforeFileLoad={this.onBeforeFileLoad}
                src={this.state.src}
                exportAsSquare
                label="انتخاب عکس"
                imageWidth={410}
                cropRadius="20000px"
                lineWidth="0px"
                shadingOpacity="0px"
                labelStyle={{ fontSize: "15px" }, { width: "80px" }}
            />

        );
        return (
            <div>
                <img src={this.state.preview} alt="Preview" style={{ height: "30%" }, { width: "30%" }} />
            </div>
        );
    }



    render() {
        let item = JSON.parse(localStorage.getItem("info"));
        const { isError } = this.state;
        return (
            <div className="container">

                <Modal dialogClassName="modal-90w" backdrop="static" className="my-modal" show={this.state.showHide}>
                    <Modal.Body>
                        <div className="align-items-right text-right header">
                            <button
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
                            </button>
                        </div>
                        <div className="text-center" id="title">
                            <h4>ثبت آگهی کتاب</h4>
                            {/* <small className="small-font text-danger text-center">{errorLogin}</small> */}
                        </div>
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="card border-0">
                                    <div className="card-body">


                                        <div className="titleAddBook"><p className="labels" dir="rtl">عنوان کتاب
                                            {' '}
                                            {
                                                (isError.title.length === 0 && !(this.state.title === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    onChange={this.handleInputChange}
                                                    placeholder="نام کتاب را وارد كنید"
                                                    value={this.state.title}
                                                    class="form-control3"
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="small-font text-danger inP">{!(this.state.title === "") ? isError.title : "*فیلد ضروری"}</small>
                                            </div></div>



                                        <div className="titleAddBook"><p className="labels" dir="rtl">نویسنده
                                            {' '}
                                            {
                                                (isError.author.length === 0 && !(this.state.author === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''}
                                        </p>
                                            <div class="form-group text-left">
                                                <input
                                                    type="text"
                                                    name="author"
                                                    className="form-control3"
                                                    placeholder="نام کامل نویسنده کتاب را وارد کنید."
                                                    value={this.state.author}
                                                    // Value={this.state.author}
                                                    onChange={this.handleInputChange}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="small-font text-danger inP">{!(this.state.author === "") ? isError.author : "*فیلد ضروری"}</small>
                                            </div></div>




                                        <div className="titleAddBook"><p className="labels" dir="rtl">انتشارات
                                            {' '}
                                            {
                                                (isError.publisher.length === 0 && !(this.state.publisher === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <input
                                                    type="text"
                                                    name="publisher"
                                                    onChange={this.handleInputChange}
                                                    className="form-control3"
                                                    placeholder="نام انتشارات را به طور کامل وارد کنید."
                                                    value={this.state.publisher}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="small-font text-danger inP">{!(this.state.publisher === "") ? isError.publisher : "*فیلد ضروری"}</small>
                                            </div></div>


                                        <div className="titleAddBook"><p className="labels" dir="rtl">قیمت
                                            {' '}
                                            {
                                                (isError.price.length === 0 && !(this.state.price === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <input
                                                    type="number"
                                                    name="price"
                                                    onChange={this.handleInputChange}
                                                    className="form-control3"
                                                    placeholder="قیمت پیشنهادی خود را به تومان وارد کنید"
                                                    value={this.state.price}
                                                />
                                            </div>
                                            <div className="text-right smallDiv">
                                                <small className="small-font text-danger inP">{!(this.state.price === "") ? isError.price : "*فیلد ضروری"}</small>
                                            </div></div>

                                        <div className="titleAddBook"><p className="labels" dir="rtl">نوع آگهی
                                            {' '}
                                            {
                                                (isError.buy.length === 0 && !(this.state.buy === null) && !(this.state.buy === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <select name="buy" class="form-select form-control3" aria-label="Default select example" onChange={this.handleInputChange}>

                                                    <option className="optionBook" selected value="">نوع آگهی را از منوی زیر انتخاب کنید</option>
                                                    <option className="optionBook" value="0">فروش</option>
                                                    <option className="optionBook" value="1">اجاره</option>
                                                    <option className="optionBook" value="2">هدیه</option>
                                                </select>
                                            </div>
                                            <div className="text-right smallDiv3">
                                                <small className="small-font text-danger inP">{(isError.buy.length === 0 && !(this.state.buy === null) && !(this.state.buy === "")) ? "" : "*فیلد ضروری"}</small>
                                            </div></div>

                                        <div className="titleAddBook"><p className="labels" dir="rtl">دسته بندی
                                            {' '}
                                            {
                                                (isError.category.length === 0 && !(this.state.category === null) && !(this.state.category === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <select name="category" class="form-select form-control3" aria-label="Default select example" onChange={this.handleInputChange}>

                                                    <option className="optionBook" selected value="">دسته بنده مورد نظر خود را از منوی زیر انتخاب کنید</option>
                                                    <option className="optionBook" value="1">داستان</option>
                                                    <option className="optionBook" value="2">ادبیات</option>
                                                    <option className="optionBook" value="3">هنر</option>
                                                    <option className="optionBook" value="4">روانشناسی</option>
                                                    <option className="optionBook" value="5">علوم اجتماعی و سیاسی</option>
                                                    <option className="optionBook" value="6">دین و مذهب</option>
                                                    <option className="optionBook" value="7">فلسفه و عرفان</option>
                                                    <option className="optionBook" value="8">تاریخ</option>
                                                    <option className="optionBook" value="9">کودک و نوجوان</option>
                                                    <option className="optionBook" value="10">دانشگاهی</option>
                                                </select>
                                            </div>
                                            <div className="text-right smallDiv3">
                                                <small className="small-font text-danger inP">{(isError.category.length === 0 && !(this.state.category === null) && !(this.state.category === "")) ? "" : "*فیلد ضروری"}</small>
                                            </div></div>




                                        <div className="titleAddBook"><p className="labels" dir="rtl">توضیحات
                                            {' '}
                                            {
                                                (isError.descripsion.length === 0 && !(this.state.descripsion === ""))
                                                    ?
                                                    (
                                                        < svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            class="bi bi-check2"
                                                            color="darkgreen"
                                                            viewBox="0 0 16 16"
                                                            stroke="currentColor"
                                                            strokeWidth="4">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                    )
                                                    : ''
                                            }
                                        </p>
                                            <div class="form-group text-left">
                                                <textarea
                                                    name="descripsion"
                                                    onChange={this.handleInputChange}
                                                    className="form-control3"
                                                    placeholder="هر توضیحی درباره آگهی خود یا کتاب دارید در این قسمت وارد کنید."
                                                    value={this.state.descripsion}
                                                />

                                            </div>
                                            <div className="text-right smallDiv2">
                                                <small className="small-font text-danger inP">{!(this.state.descripsion === "") ? isError.descripsion : "*فیلد ضروری"}</small>
                                            </div>
                                        </div>

                                        <br></br>


                                        <p className="labels" dir="rtl">تصویر جلد کتاب
                                            {' '}
                                            <button disabled={(this.state.preview === null ? true : false)} className="btn border-0" onClick={() => { this.setState({ preview: null }) }}>
                                                {
                                                    this.state.preview === null ? "" :
                                                        (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                            </svg>
                                                        )
                                                }
                                            </button>
                                            {/* ) */}
                                            {/* } */}
                                            {this.previewFunc()}
                                        </p>

                                        {/* <div className="text-right smallDiv4">
                                                <small className="small-font text-danger inP">{!(this.state.preview === null) ? isError.descripsion : "*فیلد ضروری"}</small>
                                            </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <Button
                                type="submit"
                                className="Agahi btn btn-secondry border-0"
                                style={
                                    { backgroundColor: "rgba(255, 90, 169)" }
                                }
                                // size="lg"
                                onClick={() => { this.onSave(); this.setLoading(); }}
                                disabled={
                                    (
                                        this.state.descripsion === null
                                        || this.state.publisher === null
                                        || this.state.author === null
                                        || this.state.title === null

                                        || this.state.isError.descripsion.length > 0
                                        || this.state.isError.publisher.length > 0
                                        || this.state.isError.author.length > 0
                                        || this.state.isError.title.length > 0
                                    )
                                        ?
                                        true
                                        :
                                        false
                                }
                            >
                                {this.state.buttonText}
                            </Button>
                            {/* <div class="text-center">
                                <Button
                                    dir="rtl"
                                    className="btn btn-primary border-0"
                                    style={
                                        { "background-color": "rgba(255, 90, 169)" }
                                    }
                                    type="submit"
                                    to={"/پروفایل_كاربری"}
                                    href="#"
                                    onClick={() => {
                                        this.setLoading();
                                        this.submit();
                                    }}
                                    disabled={
                                        (
                                            this.state.password.length < 1
                                            || this.state.user_name.length < 1
                                        )
                                            ?
                                            true
                                            :
                                            false
                                    }
                                >
                                    {this.state.buttonText}
                                </Button>
                                {' '}
                                <Button
                                    to={"/"}
                                    href="#"
                                    className="btn btn-secondary border-0"
                                    onClick={() => this.handleModalShowHide()}
                                >
                                    خروج
                                </Button>
                            </div> */}
                        </div>
                    </Modal.Footer>
                </Modal>

                {/* <div className="row justify-content-md-center">
                    <div class="col-md-7 border-right border-left">
                        <div class="p-3 py-5 titleAddBook">
                            <div class=" text-center mb-3">
                                <h4>ثبت آگهی کتاب</h4>
                            </div>




                        </div>
                    </div>

                </div> */}
                {/* <div className="row justify-content-md-center ">
                    <div className="col-md-10 AddbookButton">
                        
                    </div>
                </div> */}
            </div >


        );
    }
}

export default AddBook;

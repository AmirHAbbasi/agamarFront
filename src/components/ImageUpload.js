import React from "react";
// import Avatar from "react-avatar-edit";
import axios from "axios";

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        // const src =
        //     "data:image/png;base64,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";
        this.state = {
            pImage: "",
            // image: null,
            // preview: null,
            // src,
            // name: null,
            // url: null
        };
        // this.onCrop = this.onCrop.bind(this);
        // this.onClose = this.onClose.bind(this);
        // this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
        // this.handleUpload = this.handleUpload.bind(this);
    }

    // onClose() {
    //     console.log("closed");
    //     this.setState({ preview: null });
    // }

    // onCrop(preview) {
    //     console.log("croping...");
    //     this.setState({ preview });
    //     console.log("state in crop:", this.state);
    // }

    // onTest() {
    //     console.log("testing");
    // }

    // onBeforeFileLoad(elem) {
    //     console.log("before the file is loaded");
    //     if (elem.target.files[0].size > 716080) {
    //         alert("File is too big!");
    //         elem.target.value = "";
    //     }

    // }



    // handleUpload = event => {
    //     console.log("in handleUpload function");
    //     console.log("states:", this.state);


    // };

    render() {
        let item = JSON.parse(localStorage.getItem("info"));
        return (
            <div>
                {/* <Avatar
                    width={390}
                    height={295}
                    onClick={this.onTest}
                    onCrop={this.onCrop}
                    onClose={this.onClose}
                    onBeforeFileLoad={this.onBeforeFileLoad}
                    src={"http://127.0.0.1:8000" + item.prof_image}
                />
                <div class="row  mb-3"></div>
                <img src={this.state.preview} alt="Preview" />
                <div class="row  mb-3"></div>
                <button className="btn btn-primary btn-lg btn-container-left" onClick={this.handleUpload}>ذخيره عكس</button> */}

                <input
                    accept="image/*"
                    // className={classes.input}
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => {
                        console.log("e:", e);
                        // setLinearProgress(true)
                        // uploadImage(e);
                        this.setState({ pImage: e.target.files[0] });
                        const headers = {
                            // 'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${item.access_token}`,
                        }
                        // const formData = new FormData();
                        // console.log("formdata:", formData);
                        // console.log("e.target.files[0] is:", e.target.files[0]);
                        // formData.append("myFile", e.target.files[0]);
                        // console.log("file:", formData);
                        axios.patch('http://127.0.0.1:8000/api/update-userInfo', e.target.files[0], { headers: headers, withCredentials: true }).then(
                            res => {
                                if (res.data != null) {
                                    console.log("res:", res);
                                    // console.log(res.data.access);
                                    // this.handleModalShowHideZakhire();

                                } else {
                                    console.log("failed to update");
                                }
                            }
                        ).catch(error => {
                            console.log("error is here");
                            console.error(error.response);


                        })
                    }}
                />
            </div>
        );
    }
}

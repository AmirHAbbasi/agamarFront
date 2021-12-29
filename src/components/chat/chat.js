import React from 'react'
import { Offcanvas, Button } from 'react-bootstrap';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ChannelHeader from "./ChannelHeader";
// import MessageInput from "./MessageInput";
// import Messages from "./MessageList";
import "./Chat.css";


class Chat extends React.Component {
    constructor() {
        super();

        this.state = {

            text: "",
            show: false,
            messages: [
                {
                    text: "به سایت آکامار خوش آمدید",
                    member: {
                        color: "blue",
                        username: "bluemoon"
                    }
                }
            ],
            member: {
                username: "randomName()",
                color: "#d3ced0"
            }
        }
        this.handleClose = this.handleClose.bind(this);
        this.OpenChatWith = this.OpenChatWith.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }



    handleInputChange(e) {
        this.setState({ text: e.target.value });
    }

    onSubmit(e) {
        console.log("onsubmit")
        // document.getElementById('myInput').value = '';
        e.preventDefault();
        this.setState({ text: "" });
        this.onSendMessage(this.state.text);
    }
    onSendMessage = (message) => {
        const messages = this.state.messages
        messages.push({
            text: message,
            member: this.state.member
        })
        this.setState({ messages: messages })
    }

    handleClose() {
        this.setState({ show: false });
    }

    OpenChatWith() {
        this.setState({ show: true });
    }

    renderMessage(message) {
        // return (<p>hjvgb</p>)
        const data = JSON.parse(localStorage.getItem("info"));
        if (data === null) return (<p>hjvgb</p>)
        console.log("data:", data);
        const { member, text } = message;
        const className = ((member.username === "bluemoon") || (member.username === "آگهی دهنده")) ?
            "Messages-message" : "Messages-message currentMember";
        if (!(member.username === "bluemoon") && !(member.username === "آگهی دهنده")) {
            member.username = data.username;
        }
        else {
            member.username = "آگهی دهنده";
        }
        // const Image = "http://127.0.0.1:8000" + data.prof_image;
        return (

            <li className={className}>
                <img className="avatar" src={(member.username === data.username) ? Image : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/671px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"} roundedCircle />
                <div className="Message-content">
                    <div className="username">
                        {member.username}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div>
                {/* <Button variant="primary" onClick={this.OpenChatWith}>
                    Launch
                 </Button> */}

                <Offcanvas show={this.state.show} onHide={this.handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>


                        <div className="row headerRow">
                            <div className="header flex">
                                <div className="col avatarCol">
                                    <img className="avatar2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/671px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" roundedCircle />
                                </div>
                                {/* <span></span> */}
                                <div className="col col1000">
                                    <h6>پشتیبانی سایت آگامار</h6>
                                    <h7>آخرین بازدید اخیرا</h7>
                                </div>
                            </div>
                        </div>


                        <div className="row messageRow" >
                            <div>
                                <ul className="Messages-list">
                                    {this.state.messages.map(m => this.renderMessage(m))}
                                </ul>
                            </div >
                        </div>


                        <div className="row inputRow">
                            <form onSubmit={e => { this.onSubmit(e) }} class="flex form-group5">
                                <input
                                    // onDragEnter={() => this.onSubmit()}
                                    className="text-left"
                                    id="myInput"
                                    type="text"
                                    value={this.state.text}
                                    placeholder="پیامی بنویسد"
                                    name="password"
                                    onChange={this.handleInputChange}
                                />
                                <span></span>
                                <button
                                    type="submit"
                                    disabled={(this.state.text === "") ? true : false}
                                    className="btn btnCss"
                                // style={{ backgroundColor: "#ffe2ed" }, { borderRadius: "0px" }}
                                // onClick={() => this.onSubmit()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path fill-rule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z" />
                                    </svg>
                                </button>
                            </form>
                        </div>


                    </Offcanvas.Body>
                </Offcanvas>
            </div >
        );
    }
}




export default Chat;

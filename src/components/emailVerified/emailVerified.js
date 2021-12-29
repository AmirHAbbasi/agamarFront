import React from 'react'


class emailVerified extends React.Component {
    constructor() {
        super();
        this.state = {
            loginShow: false,
        }

    };
    render() {

        return (
            <div> 
                       
                <h4>
                    به سايت آگامار خوش آمديد
                                </h4>
                <br></br>
                <h4>
                    جهت ورود به سايت
                            <a
                        style={{ color: "pink" }}
                        onClick={() => {
                            this.setState({ loginShow: true });
                            window.location.replace("/");
                        }}
                    > اينجا </a>
                    كليك كنيد
                        </h4>
            </div>
        );
    }
}


export default emailVerified;

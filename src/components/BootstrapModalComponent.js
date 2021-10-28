import React from "react";
import { Button, Modal } from "react-bootstrap";
import SignUp from "./signup.component";

class BootstrapModalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
    };
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
            <React.StrictMode>
              <SignUp />
            </React.StrictMode>
          </Modal.Body>
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

export default BootstrapModalComponent;

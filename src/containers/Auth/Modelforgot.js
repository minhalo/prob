import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';




class Modelforgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toggle = () => {
        
    }

    render() {
        // console.log(this.state.errMessage)
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"Forgot-account"}
                centered
            >
                <ModalHeader >Warning</ModalHeader>
                <ModalBody>
                    <div className='text-forg'>
                        <p>Time to change pass is over 5 minute</p>
                        <p>You have to send email again to change password at other link</p>
                        <p>Thank you!</p>
                    </div>
                </ModalBody>
            </Modal>

        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modelforgot);

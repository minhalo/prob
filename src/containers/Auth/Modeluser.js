import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';




class Modeluser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forgot: '',
            errMessage: '',
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    handleClick = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await getCheckChangeEmail(this.state.forgot)
            this.setState({
                errMessage: data.message,
            })
            // if (data && data.errCode !== 0) {
            //     this.props.isHide()
            // }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                    })

                }
            }
        }

    }

    handleOnChangeForgot = (event) => {
        this.setState({
            forgot: event.target.value
        })
    }

    render() {
        // console.log(this.state.errMessage)
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"abc"}
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Forgot password</ModalHeader>
                <ModalBody>
                    <div className='text-forg'>
                        <p className='chet'>Your have to provide your email.</p>
                        <p className='chet'>We will send you an email to your gmail to verify</p>
                        <p className='chet'>Then you can change the password. Thank you!</p>
                    </div>
                    <div className='input-container'>
                        <div><label>Email</label></div>
                        <div><input onChange={(event) => this.handleOnChangeForgot(event)} className='input-forg' type='text' /></div>
                        <p className='Error6'>{this.state.errMessage}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.handleClick() }}>Send</Button>
                    <Button className='px-3' color='secondary' onClick={() => { this.toggle() }}>cancel</Button>
                </ModalFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modeluser);

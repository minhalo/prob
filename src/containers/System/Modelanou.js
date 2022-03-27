import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { count, getCheckChangeEmail, logout } from '../../services/userService';

import './m.scss';
import { Link } from 'react-router-dom';




class Modelanou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test:''
        }
    }

    toggle = () => {
        this.props.isHide()
    }

    async componentDidMount() {
        let data = await count(this.props.userInfo.id)
        this.setState({
            test: data.userData
        })
    }
    render() {

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"Annoucement"}
                centered
                size="sm"
            >
                <ModalBody>
                    <div>
                        <i>You have</i> <br/>
                        <i><strong className='rop'>{this.state.test}</strong></i> <br/>
                        <i>request new friend</i>
                    </div>
                </ModalBody>
            </Modal>

        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modelanou);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';

import './Header.scss';
import { Link } from 'react-router-dom';




class Modelset extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    render() {
        const { processLogout} = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"Forgot-account"}
                centered
                size="sm"
            >
                <ModalBody>
                    <div>
                        <div onClick={() => this.toggle()}><Link  to='/system/setting-manage'>Setting</Link></div>
                        <div onClick={processLogout}><Link>Log out</Link></div>
                         {/* <div className="btn btn-logout" onClick={processLogout}>
                    <p>Log out</p>
                </div> */}
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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modelset);

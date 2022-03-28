import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';






class Modelpolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    render() {
   
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"ite"}
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Some rules you have to follow</ModalHeader>
                <ModalBody>
                    <div>
                        <li>
                            <i>Do not use depraved images.</i>
                        </li>
                        <li>
                            <i>No names with negative content</i>
                        </li>
                    </div>
                    <div>
                        <i>If we find you in violation of the above. Your account will be permanently locked. thank you!</i>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.toggle() }}>I understand</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modelpolicy);

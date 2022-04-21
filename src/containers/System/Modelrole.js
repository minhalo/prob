import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, getGroup, kdp, logout, getAdmin, accept } from '../../services/userService';

// import './Header.scss';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import { socket } from '../../services/userService';




class Modelrole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectOptions: [],
            idf: '',
            name: ''

        }
    }
    toggle = () => {
        this.props.isHide()
    }

    async componentDidMount() {
        const res = await getAdmin();
        const data = res.userData
        const options = data.map(d => ({
            "value": d.id,
            "label": d.name
        }))
        if (res) {
            this.setState({ selectOptions: options })
        }
    }

    handleChange(e) {
        this.setState({ idf: e.value, name: e.label })
    }

    handleClick = async () => {
        if (this.props.isCheck.roleid === 1) {
            let update = await accept(this.props.isId, this.state.idf)
            this.props.isConcen()
            this.props.isHide()
        }
    }




    render() {
        console.log(this.props.isCheck)
        const { processLogout } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"uoutr"}
                centered
                size="sm"
            >
                <ModalBody>
                    <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />

                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.handleClick() }}>Accept</Button>
                </ModalFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modelrole);

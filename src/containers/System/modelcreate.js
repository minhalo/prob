import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, getGroup, kdp, logout } from '../../services/userService';

// import './Header.scss';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import { socket } from '../../services/userService';




class Modelcreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name:'',
            id: '',
            dataok: [],
            idf: '',
            names: '',
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAdd = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    async componentDidMount(){
        let data = await kdp(this.props.userInfo.id)
        const options = data.users.map(d => ({
            "value": d.id,
            "label": d.lastName
        }))
        this.setState({
            dataok: options
        })
    }
    handleChange(e) {
        this.setState({ idf: e.value, names: e.label })
    }

    handleClick = async () => {
        const mes = {
            room: this.state.name,
            idFriend: this.state.idf
        }
        
        // await socket.emit("sen_message",mes)
        let daaa = await getGroup(this.state.name, this.props.userInfo.id)
        this.props.isHide()
        window.location.reload()
    }

    render() {
        const { processLogout} = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"akaaka"}
                centered
                size="sm"
            >
                <ModalBody>
                    <div className='input-created'>
                       <label>Group name</label>
                    </div>
                    <div className='input-create'>
                        <input className='inputgr'  onChange={(event) => this.handleOnChangeName(event)} type='text'/>
                    </div>
                    {/* <div className='input-cccre'>
                       <label>Add at least 1 member</label>
                    </div>
                    <div className='input-cccred'>
                        <Select onChange={this.handleChange.bind(this)} options={this.state.dataok} />
                    </div> */}
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.handleClick() }}>Send</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modelcreate);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';



import '../System/m.scss';
import '../System/Setting.scss';
import '../System/UserManage.scss';







class Navset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            test: false
        }
    }
    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    test = () => {
        this.setState({
            test: !this.state.test
        })
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    componentDidUpdate() {
        // let circle = document.querySelector('.nav3')
        // if (this.state.click === false){
        //     circle.style.display = 'none'
        // }
        // else{
        //     circle.style.display = 'block'
        // }

        // let circles = document.querySelector('.nav4')
        // if (this.state.clickprop === false){
        //     circles.style.display = 'none'
        // }
        // else{
        //     circles.style.display = 'block'
        // }
    }

    render() {
        console.log(this.state.click)
        // console.log(this.state.errMessage)
        return (


            <div className='app8'>
                <div className='nav'>
                    <ul className='ul1'>
                            <li><Link className='link' to="/system/setting-manage">Update User</Link></li>
                            <li><Link className='link' to='/system/user-change'>Change password</Link></li>
                            <li><Link className='link' to='/system/user-delete'>Delete account</Link></li>
                    </ul>
                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Navset);

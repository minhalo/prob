import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import set from '../../assets/images/setting.png'
import change from '../../assets/images/change.png'
import del from '../../assets/images/delete.png'



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
        return (


            <div className='app8'>
                <div className='nav-setting-user'>
                    <Link className='nav-child-setting' to='/system/setting-manage'>
                        <div className='nav-img-setting'>
                            <img className='navimg-setting' src={set}/>
                        </div>
                        <div className='nav-text-setting' >Update user</div>      
                    </Link>
                    <Link className='nav-child-setting1' to='/system/user-change'>
                        <div className='nav-img-setting1'>
                            <img className='navimg-setting1' src={change}/>
                        </div>
                        <div className='nav-text-setting1' >Change password</div>      
                    </Link>
                    <Link className='nav-child-setting2' to='/system/user-delete'>
                        <div className='nav-img-setting2'>
                            <img className='navimg-setting2' src={del}/>
                        </div>
                        <div className='nav-text-setting2' >Delete account</div>      
                    </Link>
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

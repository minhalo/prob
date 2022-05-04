import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { count, getCheckChangeEmail } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import set from '../../assets/images/setting.png'
import change from '../../assets/images/change.png'
import del from '../../assets/images/delete.png'
import fr from '../../assets/images/fr.png'
import mange from '../../assets/images/mange.webp'
import frreq from '../../assets/images/frreq.png'


import '../System/m.scss';
import '../System/Setting.scss';
import '../System/UserManage.scss';







class Navfriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            test: false,
            job: ''
            
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
    async componentDidMount() {
        let data = await count(this.props.userInfo.id)
        this.setState({
            job: data.userData
        })
    }
    componentDidUpdate() {
        let circle = document.querySelector('.reqfriendcheck')
        if (this.state.job === 0){
            circle.style.display = 'none'
        }
        else{
            circle.style.display = 'block'
        }


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
                    <Link className='nav-child-setting' to='/system/user-addfr'>
                        <div className='nav-img-setting'>
                            <img className='navimg-setting' src={fr}/>
                        </div>
                        <div className='nav-text-setting' >Global friend</div>      
                    </Link>
                    <Link className='nav-child-setting1' to='/system/user-fr'>
                        <div className='nav-img-setting1'>
                            <img className='navimg-setting1' src={mange}/>
                        </div>
                        <div className='nav-text-setting1' >Manage Friends</div>      
                    </Link>
                    <Link className='nav-child-setting2' to='/system/user-update'>
                        <div className='nav-img-setting2'>
                            <img className='navimg-setting2' src={frreq}/>
                        </div>
                        <div className='nav-text-setting2' >Friend request</div>      
                    </Link>
                    <h5 className='reqfriendcheck'>{this.state.job}</h5>
                </div>              
            </div>

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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navfriend);

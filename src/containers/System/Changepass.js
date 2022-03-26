import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import { passhw } from '../../services/userService'







import { getUsers, getEdit, getBox } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Navset from './navset';
class Changepass extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            click: false,
            home: false,
            curpass: '',
            newpass: '',
            cpass: '',
            errMessage: '',
            errMessages: '',
            errMessagesx: '',
            id: this.props.userInfo.id,
            clickprop: false
        };
    }

    // componentDidUpdate() {
    //     let circle = document.querySelector('.nav3')
    //     if (this.state.click === false && this.state.home === false) {
    //         circle.style.display = 'none'
    //     }
    //     else {
    //         circle.style.display = 'block'
    //     }
    //     let circles = document.querySelector('.nav4')
    //     if (this.state.clickprop === false) {
    //         circles.style.display = 'none'
    //     }
    //     else {
    //         circles.style.display = 'block'
    //     }
    // }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }
    handleOnChangeCurrentPass = (event) => {
        this.setState({
            curpass: event.target.value
        })
    }
    handleOnChangeNewPass = (event) => {
        this.setState({
            newpass: event.target.value
        })
    }
    handleOnChangeCPass = (event) => {
        this.setState({
            cpass: event.target.value
        })
    }

    handleClick = async () => {
        this.setState({
            errMessage: '',
            errMessages: '',
            errMessagesx: '',

        })
        try {
            let data = await passhw(this.props.userInfo.id, this.state.curpass, this.state.newpass, this.state.cpass)
            console.log(data)
            this.setState({
                errMessage: data.message,
                errMessages: data.messages,
                errMessagesx: data.messagesx,

            })

        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                        errMessages: error.response.data.messages,
                        errMessagesx: error.response.data.messagesx,

                    })
                }
            }

        }

    }

    render() {
        // console.log()
        // console.log(this.state.message)
        // console.log(this.state.messages)
        // console.log(this.state.messagesx)

        return (
            <div className='app5'>
                <Navset/>
                <div className='conti'>
                    <p className='Err12'>{this.state.errMessage}</p>
                    <p className='Err13'>{this.state.errMessages}</p>
                    <p className='Err11'>{this.state.errMessagesx}</p>
                    <div><i className='ite'>If you don't remember your pass after you change password, you can use forgot pass in login page. Thank you!</i></div>
                    <div>
                        <label className='lo1'>Password</label>
                        <input className='pass1' onChange={(event) => this.handleOnChangeCurrentPass(event)} type='password' />
                    </div>
                    <div>
                        <label className='lo2'>New Password</label>
                        <input className='pass2' onChange={(event) => this.handleOnChangeNewPass(event)} type='password' />
                    </div>
                    <div>
                        <label className='lo3'>Confirm new password</label>
                        <input className='pass3' onChange={(event) => this.handleOnChangeCPass(event)} type='password' />
                    </div>
                    <div><button onClick={() => this.handleClick()} className='nit'>Update</button></div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Changepass);

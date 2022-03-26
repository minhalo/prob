import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLoginApi, handleRegister } from '../../services/userService';

import * as actions from "../../store/actions";

//import './Login.scss';
import '../Auth/register.scss'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: '',
            errMessages : '',
            errMessagesx: '',
            cpassword: '',
            errMessagesxt: ''
        }
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnChangeCPassword = (event) =>
    {
        this.setState({
            cpassword: event.target.value
        })
    }

    handleReg = async () => {
        this.setState({
            errMessage: '',
            errMessages: '',
            errMessagesx: '',
            errMessagesxt: ''
        })
        try {
            let data = await handleRegister(this.state.username, this.state.password, this.state.cpassword)
            if (data && data.errCode === 0) {
                window.open('login')
            }
            else {
                this.setState({
                    errMessage: data.message,
                    errMessages: data.messages,
                    errMessagesx: data.messagesx,
                    errMessagesxt: data.messagesxt
                })
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                        errMessages: error.response.data.messages,
                        errMessagesx: error.response.data.messagesx,
                        errMessagesxt: error.response.data.messagesxt
                    })
                }
            }

        }

    }

    render() {

        return (
            <div className='body2'>
                <div className="container">
                    <div className="form-container sign-in-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1 className='sign1'>Sign up</h1>
                                <input className='input5' onChange={(event) => this.handleOnChangeUsername(event)} type="email" placeholder="Email" />
                                <p className='Error3'>{this.state.errMessage}</p>
                                <input className='input6' onChange={(event) => this.handleOnChangePassword(event)} type="password" placeholder="Password" />
                                <p className='Error4'>{this.state.errMessages}</p>
                                <p className='Error99'>{this.state.errMessagesxt}</p>
                                <input className='input7' onChange={(event) => this.handleOnChangeCPassword(event)} type="password" placeholder="CPassword" />
                                <p className='Error5'>{this.state.errMessagesx}</p>
                                <button className="button4 ghost" onClick={() => this.handleReg()}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="overlay-container">
                        <form>
                            <h1>What is DUDE?</h1>
                            <p>DUDE is ...</p>
                            
                            <button disabled className='button5 mt-5'><Link className='link' to='/login'>Back to Sign In</Link></button>
                        </form>
                    </div>
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
        //userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLogin } from '../../services/userService';
import Popup from "reactjs-popup";
import Modeluser from './Modeluser';
// import bcrypt from 'bcryptjs';



import * as actions from "../../store/actions";

//import './Login.scss';
import '../Auth/login.scss'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: '',
            errMessages: '',
            isOpen: false
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

    handleLogin = async () => {
        this.setState({
            errMessage: '',
            errMessages: '',
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                    errMessages: data.messages
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        //errMessage: error.response.data.message,
                        errMessage: error.response.data.message,
                        errMessages: error.response.data.messages
                    })

                }
            }
        }
    }

    handleClick =   () =>
    {
        this.setState({
            isOpen:true
        })
    }

    handleHind =   () =>
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }




    render() {
        return (
            <div className='back-ground'>
                <div className="container">
                    <div className="form-container sign-in-container">
                        <div className='ok'>
                            <Modeluser
                                isOpen={this.state.isOpen}
                                isHide={this.handleHind}
                            />
                            <h1 className='sign'>Sign in</h1>
                            <input className='input5' onChange={(event) => this.handleOnChangeUsername(event)} type="email" placeholder="Email" />
                            <p className='Error'>{this.state.errMessage}</p>
                            <input className='input6' onChange={(event) => this.handleOnChangePassword(event)} type="password" placeholder="Password" />
                            <p className='Error10'>{this.state.errMessages}</p>
                            <a className='forg' onClick={()=> this.handleClick()}>Forgot password</a>
                            <button className='button3' onClick={() => this.handleLogin()} >Sign In</button>
                        </div>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Welcom to DUDE!</h1>
                                <p>Let's start your journey</p>
                                <button disabled className="ghost"><Link className='link' to='/register'>Go to Sign Up</Link></button>
                            </div>
                        </div>
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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLogin } from '../../services/userService';
import { forgotPass, refresh } from '../../services/userService';







import * as actions from "../../store/actions";

//import './Login.scss';
import '../Auth/login.scss'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Alert } from 'reactstrap';
import Modelforgot from './Modelforgot';

// import bcrypt from 'bcrypt';
// const bcrypt = require('bcrypt');
// import * as bcrypt from 'bcrypt';




class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            id: this.props.match.params.id,
            cpassword: '',
            errMessage: '',
            errMessages: '',
            errMessagesx: '',
            tryn: false,
            count: 300
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count && this.state.count === 0){
            clearInterval(this.timer)
        }
    }

    async componentDidMount() {
        let data = await refresh(this.state.id)
        this.setState({
            tryn: data.users
        })
        
        this.timer = setInterval(()=> {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
        // console.log(this.state.count)
        
    }
    test = async () => {
        this.setState({
            errMessage: '',
            errMessages: '',
            errMessagesx: ''
        })
        try {
            let data = await forgotPass(this.state.id, this.state.password, this.state.cpassword);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                    errMessages: data.messages,
                    errMessagesx: data.messagesx
                })
            }
            else {
                alert("Change password successuly")
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        //errMessage: error.response.data.message,
                        errMessage: error.response.data.message,
                        errMessages: error.response.data.messages,
                        errMessagesx: error.response.data.messagesx
                    })

                }
            }
        }
    }

     fmtMSS(s) {
        return (s-(s%=60))/60+(9<s?':':':0')+s
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnChangeCPassword = (event) => {
        this.setState({
            cpassword: event.target.value
        })
    }

    render() {
        return (
            <div className=''>
                <Modelforgot
                    isOpen={this.state.tryn}

                />
                <div className='containerx'>
                    <div className='top'>
                        Time remaining in: 
                        {this.fmtMSS(this.state.count)}
                    </div>
                    <div>
                        <h3 className='textx'>Change password</h3>
                    </div>
                    <div className='form-group'>
                        
                        <div>
                            <label className='textx1'>Password</label>
                        </div>
                        <div>
                            <input className='inputx1' onChange={(event) => this.handleOnChangePassword(event)} type='password' />
                        </div>
                        <p className='Errorx1'>{this.state.errMessages}</p>
                    </div>
                    <div className='form-group'>
                        <div>
                            <label className='textx2'>Confirm password</label>
                        </div>
                        <div>
                            <input className='inputx2' onChange={(event) => this.handleOnChangeCPassword(event)} type='password' />
                        </div>
                        <p className='Errorx2'>{this.state.errMessagesx}</p>
                    </div>
                    <div>
                        <button className='button8' onClick={() => this.test()}>send</button>
                    </div>

                    <p className='px'>You have 5 minutes to change password.</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);

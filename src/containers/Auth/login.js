import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import { handleLogin } from '../../services/userService';
import { ThemeProvider } from 'react-bootstrap';

import * as actions from "../../store/actions";
import '../Auth/login.scss'



class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        
        }
    }

    

    render() {
        return (
            <ThemeProvider className="body">
                <div className='test'></div>
                <div className='test'></div>
                <div className='test'></div>
            </ThemeProvider >
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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

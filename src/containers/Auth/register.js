import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '../Auth/register.scss'
import { ThemeProvider } from 'react-bootstrap';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
  


    render() {
        return (
            <ThemeProvider>
               

            </ThemeProvider>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLogin } from '../../services/userService';
import { Button, Col, Container, Row, ThemeProvider,Image } from 'react-bootstrap';
import Background_image_login from "../../assets/images/background_login.jpg"
import * as actions from "../../store/actions";
import '../Auth/login.scss'

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
        console.log(1)
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

    render() {
        return (
            <ThemeProvider>
                {/* <Container fluid> */}
                    <Row>
                        <Col>
                        ok
                        <Image className='Background_image_login' src={Background_image_login}/>
                        </Col>
                        <Col>con2</Col>
                    </Row>
                {/* </Container> */}
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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

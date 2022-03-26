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
import Nav from './nav';







class Profile extends Component {
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

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    test = () => {
        this.setState({
            test: !this.state.test
        })
    }


    render() {
     
        return (


            <div className='app8'>
                <Nav />
                <div className='bob'>
                    <div className='prob'>
                        <button onClick={() => this.test()}>click me</button>
                        <Collapse isOpened={this.state.test}>
                            <p>Paragraph of text</p>
                            <p>Another paragraph is also OK</p>
                            <p>Images and any other content are ok too</p>
                        </Collapse>
                        <div>ok</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

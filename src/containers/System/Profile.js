import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, profile } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import p from '../../assets/images/back.webp'



import '../System/m.scss';
import '../System/Setting.scss';
import Nav from './nav';
import Friends from './Friends';







class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            test: false,
            id: this.props.match.params.id,
            datas: []
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

    async componentDidMount() {
        let data = await profile(this.state.id)
        this.setState({
            datas: data.users
        })
    }

    test = () => {
        this.setState({
            test: !this.state.test
        })
    }


    render() {
        console.log(this.state.datas.lastName)
        return (
            <div className='app8'>
                <Nav />
                <div className='bob'>
                    <div className='prob'>
                        <div className='img-prie'>
                            {/* <img className='img-prie-f' src={p} /> */}
                        </div>
                        <div className='img-prof'>
                            <img className='img-prof-f' src={this.state.datas.image} />
                        </div>
                        <div className='input-prof'>
                            <h1 className='input-prie'>{this.state.datas.lastName} {this.state.datas.firstName}</h1>
                        </div>
                        <div className='age'>
                            <p className=''>Age: {this.state.datas.age}</p>
                        </div>
                        <div className='genders'>
                            <p className=''>Gender: {this.state.datas.gender}</p>
                        </div>
                        <div className='addresses'>
                            <p className=''>Addess: {this.state.datas.address}</p>
                        </div>
                        <div className='phonenumbers'>
                            <p className=''>Phonenumber: {this.state.datas.phonenumber}</p>
                        </div>
                        <div className='totole'>
                            <p className=''>Total score: not set yet</p>
                        </div>
                        <div className='desi'>
                            <p>Description</p>
                        </div>
                        <div className='desip'>
                            {this.state.datas.description}
                        </div>
                    </div>
                </div>
                <Friends />
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

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import tect from '../../assets/images/onl.webp'
import tese from '../../assets/images/offline.jpg'
import activating from '../../assets/images/deactiv.png'







import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, activate, namegr } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Modeladd from './Modeladd';
class Headerchat extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
           isOpen: false,
           it: ''
        };
    }

    act = async () => {
        let data = await activate(this.props.isokay, this.props.userInfo.id)
    }

    handleClick = () => {
        this.setState({
            isOpen: true
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    async componentDidMount() {
        let data = await namegr(this.props.isokay)
        this.setState({
            it: data.userData.groupname
        })
    }

    

    render() {
        return (
            <div className='app5'>
                <div className='headerchat'>
                    <Modeladd
                     isOpen={this.state.isOpen}
                     isHide={this.handleHind}
                     isoke ={this.props.isokay}
                    />
                    <div className='name'>{this.state.it}</div>
                    <div className='activ'>
                        <img onClick={() => this.act()} className='activatings' src={activating}/>
                    </div>
                    {/* <button >Activate</button> */}
                    <button className='addmember' onClick={() => this.handleClick()}>Add member</button>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(Headerchat);

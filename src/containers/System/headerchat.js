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
import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';






import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, activate, namegr } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Modeladd from './Modeladd';
import Modalheaderchat from './Modalheaderchat';
import Avatar from 'react-avatar';
import men from '../../assets/images/menuicon.jpg'
class Headerchat extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            isOpen: false,
            isOpens: false,
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

    handleClicks= () => {
        this.setState({
            isOpens: true
        })
    }


    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleHinds = () => {
        this.setState({
            isOpens: !this.state.isOpens
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
                  <Modalheaderchat
                      isOpen={this.state.isOpens}
                      isHide={this.handleHinds}
                     
                  />
                    <Modeladd
                        isOpen={this.state.isOpen}
                        isHide={this.handleHind}
                        isoke={this.props.isokay}
                    />
                    <Avatar size={40} className='nameavto' name={this.state.it} />
                    <div className='name'>{this.state.it}</div>
                    
                    <Menu menuButton={<img className='meni' src={men}/>} transition>
                        <MenuItem onClick={() => this.handleClick()}>Add New Members</MenuItem>
                        <MenuItem onClick={() => this.handleClicks()}>Activate Group</MenuItem>
                       
                    </Menu>
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

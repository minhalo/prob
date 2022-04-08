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
import created from '../../assets/images/create.png'

import { okgr, socket } from '../../services/userService';






import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, header } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import Avatar from 'react-avatar';

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Modelcreate from './modelcreate';
// import group from '../../services/userService'
import { group ,take } from '../../services/userService';
import { getgroups } from 'process';
// import { header } from '../../services/userService';

class Groupchat extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            isOpen: false,
            datas: '',
            oo: [],
            idchange: '',
            mes: ''
        };
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


    async componentDidMount(socket) {
        let data = await header(this.props.userInfo.id)
        this.setState({ datas: data.userData })

        let dato = await okgr(this.props.userInfo.id)
        this.setState({
            oo: dato.userData
        })

    }

    handlemes = async () => {
        //to do
        let data = await take(this.props.userInfo.id, this.state.idchange, this.state.mes)
    }


    handleOnChangeSet = (event) => {
        this.setState({
            mes: event.target.value
        })
    }

    handlej = (id) => {
        this.setState({
            idchange: id
        })
    }

    rem = (idk) => {
        let id = `/system/user-chats/${idk}`
        window.location.assign(id);
    }

    render() {
        return (
            <div className='app5'>
                {/* <Modelset
                
                /> */}
                <Modelcreate
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                />
                <div className='group'>
                    <div className='headgroup'>
                        <div className='avatargr'>
                            <img className='avatargr-1' src={this.state.datas.image} />

                        </div>
                        <div className='btn-create'>
                            <img onClick={() => this.handleClick()} className='create' src={created} />
                        </div>
                    </div>
                    <div className='listmem'>
                        {this.state.oo.map(d =>
                            <div onClick={() => this.rem(d.id)}  className='groupoo'>
                                <Avatar size={40} className='avtargr' name={d.groupname} />
                                <p className='p-goup'>{d.groupname}</p>
                            </div>
                        )}
                    </div>
                   
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

export default connect(mapStateToProps, mapDispatchToProps)(Groupchat);

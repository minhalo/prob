import React, { Component, useEffect } from 'react';
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







import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, dmmn } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
class Listfr extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            click: false,
            home: false,
            datas: [],
            han: '',
            checks: '',
            dove: [],
            search: '',
            clickprop: false,

        };
    }
    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }


    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    async componentDidMount() {
        let dove = await dmmn(this.props.isokay, this.props.userInfo.id)
        // let dove = await req(this.props.userInfo.id)
        this.setState({
            dove: dove.userData
        })
    }

    hans = async (id) => {
        await this.setState({
            han: id
        })
        let data = await addfriend(this.props.userInfo.id, this.state.han)
        await this.setState({
            checks: data.users
        })
        window.location.reload();


    }


    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    rem = (idk) => {
        let id = `/system/user-profile/${idk}`
        window.location.assign(id);
    }

    render() {
        return (
            <div className='app5'>
                <div className='listfriend'>
                    <p className='pf'>Members</p>
                    {this.state.dove.map(d =>
                        <div className='hipe' onClick={() => this.rem(d.id)} >
                            <img className='pic4' src={d.image} />
                            <Link className='pichan' >
                                <h4 className='chanx'>{d.firstName} {d.lastName}</h4>
                            </Link>
                        </div>
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Listfr);

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







import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, take } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
class Mainchat extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            mes: '',
            ko: true
        };
    }
    handlemes = async () => {
        let data = await take(this.props.userInfo.id, this.props.isokay, this.state.mes)
    }


    handleOnChangeSet = (event) => {
        this.setState({
            mes: event.target.value
        })
    }

    

    render() {
        return (
            <div className='app5'>
                <div className='mainchat'>
                            <input onChange={(event) => this.handleOnChangeSet(event)} type='text'/>
                            <button onClick={() => this.handlemes()}>send</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mainchat);

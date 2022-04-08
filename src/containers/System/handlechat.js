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

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Modelcreate from './modelcreate';
// import group from '../../services/userService'
import { group ,take } from '../../services/userService';
import { getgroups } from 'process';
// import { header } from '../../services/userService';

class Handlechat extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
        };
    }


    render() {
        return (
            <div className='app5'>
                    <div className='handlechat'>
                            {/* <input onChange={(event) => this.handleOnChangeSet(event)} type='text'/>
                            <button onClick={() => this.handlemes()}>send</button> */}
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handlechat);

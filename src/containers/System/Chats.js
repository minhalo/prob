import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import { getDelete, passhw } from '../../services/userService'







import { getUsers, getEdit, getBox } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Navset from './navset';
import Friends from './Friends';
import Groupchat from './groupchat';
import ListFriend from './listFriend';
import Headerchat from './headerchat';
import Mainchat from './mainchat';
import Handlechat from './handlechat';
import Chati from './chati';
class Chats extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props
        this.state = {
            ids: this.props.match.params.id,
            mes: '',
        };
    }

    // callbackFunction = (childData) => {
    //     setTimeout(function () { //Start the timer
    //         this.setState({
    //             mes: childData
    //         })

    //     }.bind(this), 2000)

    // }

    render() {
        // setTimeout(function() { //Start the timer
        // }.bind(this), 2000)

        return (
            <div className='app5'>
                {/* <Friends/> */}
                <ListFriend
                    isokay={this.state.ids}
                />
                <Headerchat
                    isokay={this.state.ids}
                />
                {/* <Mainchat
                    parentCallback={this.callbackFunction}
                    isokay={this.state.ids}
                /> */}
                {/* <Handlechat/> */}
                <Chati

                    isokay={this.state.ids}
                />
                <Groupchat />

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

export default connect(mapStateToProps, mapDispatchToProps)(Chats);

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';







import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
class Friend extends Component {

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
            clickprop: false
        };
    }
    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    async componentDidUpdate() {
        // let circle = document.querySelector('.nav3')
        // if (this.state.click === false && this.state.home === false) {
        //     circle.style.display = 'none'
        // }
        // else {
        //     circle.style.display = 'block'
        // }

        // let circles = document.querySelector('.nav4')
        // if (this.state.clickprop === false) {
        //     circles.style.display = 'none'
        // }
        // else {
        //     circles.style.display = 'block'
        // }

        let data = await search(this.state.search, this.props.userInfo.id)
        await this.setState({
            datas: data.userData
        })
    }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    async componentDidMount() {
        // let data = await all(this.props.userInfo.id);
        
        // this.setState({
        //     datas: data.userData
        // })

        let dove = await addf(this.props.userInfo.id)
        this.setState({
            dove: dove.users
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
        console.log(data.users)
        window.location.reload();


    }
    

    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        // console.log(this.state.datas)
        return (
            <div className='app5'>
                <div className='navf'>
                    <p className='pf'>Friends</p>
                    {this.state.dove.map(d => <div><img className='pic4' src={d.image} /> {d.firstName} {d.id}
                    </div>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Friend);

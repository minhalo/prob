import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';







import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, searched, brei } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
class Addfriends extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            click: false,
            home: false,
            datas: [],
            han: '',
            checks: null,
            dove: [],
            search: '',
            clickprop: false,
            chet: '',
        };
    }

    async componentDidUpdate() {
        let data = await search(this.state.search, this.props.userInfo.id)
            this.setState({
           datas: data.userData
       })
    }
    
    async componentDidMount() {
        let dove = await addf(this.props.userInfo.id)
        this.setState({
            dove: dove.users
        })
        let data = await searched(this.props.userInfo.id)
            this.setState({
           datas: data.userData
       })
       let ok = await brei(this.props.userInfo.id, this.state.chet)
       await this.setState({
           chet: ok.users
       })
    }

    hans = async (id) => {
        await this.setState({
            han: id
        })

        await this.setState({
            chet:id
        })
        let data = await addfriend(this.props.userInfo.id, this.state.han)
         this.setState({
            checks: data.users
        })
        // console.log(data.users)
        await window.location.reload();
    }

    hansdet = async (id) => {
        await this.setState({
            han: id
        })
        let data = await delf(this.props.userInfo.id, this.state.han)
         this.setState({
            checks: data.users
        })
        
         window.location.reload();
    }
    

    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        console.log(this.state.chet)
        return (
            <div className=''>
                
                <Nav/>
                <div className='search'>
                    <input onChange={(event) => this.handleOnChangeSearch(event)} type='text' />

                </div>
                <div className='add'>
                    {this.state.datas.map(d => 
                    <div>
                        <div>
                            <img className='pic3' src={d.image} /> 
                        </div>
                        <div>
                            {d.firstName} {d.lastName}
                        </div>
                        <div>
                            {this.state.checks ? <button onClick={() => this.hansdet(d.id)}>delete</button> : <button onClick={() => this.hans(d.id)}>add</button>}
                           
                            
                        </div>
                    </div>)}
                </div>
                <Friends/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Addfriends);

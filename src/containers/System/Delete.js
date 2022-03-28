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
class Delete extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            click: false,
            home: false,
            password: '',
            errMessage: '',
            clickprop: false
        };
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    componentDidUpdate () {
    }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }
    handleOnChangeCurrentPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleClick = async () => {
        this.setState({
            errMessage: '',

           
        })
        try {
            let data = await getDelete(this.props.userInfo.id, this.state.password)
            if(data.errCode != 0)
            {
           
                this.setState({
                    errMessage: data.message,
                })
            }
            if(data.errCode === 0){
                this.props.processLogout()
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                       
                    })
                }
            }

        }
       
    }

    render() {
        
        return (
            <div className='app5'>
                <Navset/>
                <div className='conti'>
                <p className='Err16'>{this.state.errMessage}</p>
                    <div><i className='ite'>If you don't remember your pass after you change password, you can use forgot pass in login page. Thank you!</i></div>
                    <div>
                        <label className='lo1'>Password</label>
                        <input className='pass1'  onChange={(event) => this.handleOnChangeCurrentPass(event)} type='password'/>
                    </div>
                    <div><button onClick={() => this.handleClick()} className='nit1'>Update</button></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Delete);

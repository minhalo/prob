import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import pic from '../../assets/images/img2.png'

import './Header.scss';
import { header } from '../../services/userService';
import ok from '../../assets/images/avtart.jpg'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Modelset from './Modelset';
import okk from '../../assets/images/list.png'


class Header extends Component {
    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            id: userInfo.id,
            datas: [],
            isOpen: false
        };
    }

    handleClick =   () =>
    {
        this.setState({
            isOpen:true
        })
    } 

    handleHind =   () =>
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    async componentDidMount() {
        let data = await header(this.state.id)
        this.setState({ datas: data.userData })
    }

    render() {
        const { processLogout, userInfo } = this.props;
        const { datas } = this.state
        return (
            <div className="header-container">
                <div className='avtart'><Link  to="/system/user-manage"><img className='v-avtart' src={ok} /></Link></div>
                <Modelset
                isOpen={this.state.isOpen}
                isHide={this.handleHind}
                />
                <div className='lp' onClick={() => this.handleClick()}>
                    <img className='okk' src={okk}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

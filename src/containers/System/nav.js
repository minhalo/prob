import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, header } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
// import { header } from '../../services/userService';
import friend from '../../assets/images/fixedfriend.jpg'

import chat from '../../assets/images/chat.jpg'
import group from '../../assets/images/groupicon.jpg'




import '../System/m.scss';
import '../System/Setting.scss';
import '../System/UserManage.scss';







class Nav extends Component {
    constructor(props) {
        super(props);
        // const { userInfo } = this.props

        this.state = {
            // id: userInfo.id,
            click: false,
            clickprop: false,
            test: false,
            datas: [],
        }
    }
    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    test = () => {
        this.setState({
            test: !this.state.test
        })
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    async componentDidMount() {
        let data = await header(this.props.userInfo.id)
        this.setState({ datas: data.userData })
    }

    rem = () => {
        let id = `/system/user-profile/${this.props.userInfo.id}`
        window.location.assign(id);
    }


    render() {
        return (
            <div className='app8'>
                <div className='nav'>
                    {/* <Link className='vacim' params={{pat: this.props.userInfo.id}}  to='/system/user-profile'> */}
                    <Link className='vacim' onClick={() => this.rem()} >
                        <div className='navk'>
                            <div className='navcim'>
                                <img className='navimg' src={this.state.datas.image} />
                            </div>
                            <div className='vancem'>{this.state.datas.firstName} {this.state.datas.lastName}</div>
                        </div>
                    </Link>
                    <Link className='navz' to='/system/user-addfr'>
                        <div className='navcim'>
                            <img className='navimg' src={friend} />
                        </div>
                        <div className='navzk' >Friends</div>
                    </Link>
                    <Link className='navz1' to='/system/user-chat'>
                        <div className='navcim1'>
                            <img className='navimg1' src={chat} />
                        </div>
                        <div className='navzk1' >Chat</div>
                    </Link>
                    {this.state.datas.roleid == 1 ?
                        <Link className='navz2' to='/system/user-updaterole'>
                            <div className='navcim2'>
                                <img className='navimg2' src={group} />
                            </div>
                            <div className='navzk2' >Admin</div>
                        </Link> :
                        null
                    }
                    <Link className='navz3' to='/system/user-video'>
                        <div className='navcim3'>
                            <img className='navimg3' src={chat} />
                        </div>
                        <div className='navzk3' >Learning</div>
                    </Link>


                </div>
            </div>

        )
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
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

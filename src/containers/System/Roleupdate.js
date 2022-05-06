import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, profile, setc, listcomment, header, role, deleteaccount, searchRole } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import p from '../../assets/images/back.webp'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ModelComment from './ModelComment';
import FileDownload from 'js-file-download'
import moment from 'moment'

import { triggerBase64Download } from 'common-base64-downloader-react';



import '../System/m.scss';
import '../System/UserManage.scss';
import '../System/Setting.scss';
import Nav from './nav';
import Friends from './Friends';
import Navor from './navor';
import { ButtonBase } from '@mui/material';
import Modelrole from './Modelrole';
import set from '../../assets/images/setting.png'
import change from '../../assets/images/change.png'
import del from '../../assets/images/delete.png'

import Sidebar from "react-sidebar";
import io from '../../assets/images/io.png'





class Roleupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            check: '',
            isOpen: false,
            idl: '',
            search: '',
            sidebarOpen: false,

        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    async componentDidMount() {
        let data = await role(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })

        let check = await header(this.props.userInfo.id)
        this.setState({
            check: check.userData
        })

        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                //console.log("Enter key was pressed. Run function.");
                event.preventDefault();
                this.search()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }

    handledelete = async (idk) => {
        if (this.state.check.roleid === 1) {
            let data = await deleteaccount(idk)
            let datak = await role(this.props.userInfo.id)
            this.setState({
                datas: datak.userData
            })
        }

    }

    concent = async () => {
        let data = await role(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })
    }

    search = async () => {
        let data = await searchRole(this.state.search, this.props.userInfo.id)
        // let det = await role(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })
    }



    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClick = async (idk) => {
        this.setState({
            isOpen: true
        })
        this.setState({
            idl: idk
        })
    }

    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }



    render() {
        // console.log(this.state.check.roleid)
        return (
            <div className='app8'>
                <Modelrole
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                    isId={this.state.idl}
                    isConcen={this.concent}
                    isCheck={this.state.check}
                />
                
                <Sidebar
                    sidebar={
                        <div className='totalo'>
                            <b className='meus1'>Menu</b>
                            <Link className='navz' to='/system/user-managepost'>
                                <div className='navcim'>
                                    <img className='navimg' src={set} />
                                </div>
                                <div className='navzk' >Dashboard</div>
                            </Link>
                            <Link className='navz1' to='/system/user-updaterole'>
                                <div className='navcim1'>
                                    <img className='navimg1' src={change} />
                                </div>
                                <div className='navzk1' >Role update</div>
                            </Link>

                            <Link className='navz3' to='/system/user-mage'>
                                <div className='navcim3'>
                                    <img className='navimg3' src={del} />
                                </div>
                                <div className='navzk3' >Post management</div>
                            </Link>
                        </div>


                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={
                        { sidebar: { background: "white", minWidth: "250px", maxWidth: '250px', maxHeight: '700px', overflow: 'hidden' }, root: { overflow: "hidden" } }
                    }
                >


                </Sidebar>
                <Navor />
                <div className='root2'>
                    <img className='root3' src={io} onClick={() => this.onSetSidebarOpen(true)} />
                </div>
                <div className='role'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.datas.map(d =>
                                    <tr>
                                        <th scope="row">{d.id}</th>
                                        <td>{d.firstName}</td>
                                        <td>{d.lastName}</td>
                                        <td>{d.name}</td>
                                        <td>
                                            <div>
                                                <ButtonBase onClick={() => this.handledelete(d.id)}>Delete</ButtonBase>
                                            </div>
                                            <div>
                                                <ButtonBase onClick={() => this.handleClick(d.id)}>Promost</ButtonBase>
                                            </div>


                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className='searchRole'>
                    <p className='searchp'>Seach</p>
                    <input className='searchpp' placeholder='Search in here..' onChange={(event) => this.handleOnChangeSearch(event)} type="text" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Roleupdate);

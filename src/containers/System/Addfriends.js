import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import ser from '../../assets/images/uo.png'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import vio from '../../assets/images/violet.png';
import ReactSearchBox from "react-search-box";
import Search from 'react-search'













import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, searched, brei } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
import { random } from 'lodash';
import Modelanou from './Modelanou';
import Navfriend from './navfriend';
import set from '../../assets/images/setting.png'
import change from '../../assets/images/change.png'
import del from '../../assets/images/delete.png'

import Sidebar from "react-sidebar";
import io from '../../assets/images/io.png'
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
            lomdom: '',
            isOpen: false,
            sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    handleClick = () => {
        this.setState({
            isOpen: true
        })
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }


    async componentDidUpdate() {

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

        let lon = await random()
        this.setState({
            lomdom: lon
        })

        const listener = event => {
            if (event.code === "Enter"|| event.code === "NumpadEnter") {
            //console.log("Enter key was pressed. Run function.");
                event.preventDefault();
                // callMyFunction();
                this.spo()
                
            }
          };
          document.addEventListener("keydown", listener);
          return () => {
            document.removeEventListener("keydown", listener);
          };
    }

    spo = async () => {
        let data = await search(this.state.search, this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })
    }

    hans = async (id) => {
        await this.setState({
            han: id
        })

        await this.setState({
            chet: id
        })
        let data = await addfriend(this.props.userInfo.id, this.state.han)
        this.setState({
            checks: data.users
        })
    }

    hansdet = async (id) => {
        await this.setState({
            han: id
        })
        let data = await delf(this.props.userInfo.id, this.state.han)
        this.setState({
            checks: data.users
        })
        this.setState({
            chet: ''
        })

    }


    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (
            <div className=''>
                {/* <Nav /> */}
                <Modelanou
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                />
                <Navfriend />
                 <Sidebar
                    sidebar={
                        <div className='totalo'>
                            <b className='meus1'>Menu</b>
                            <Link className='navz' to='/system/user-addfr'>
                                <div className='navcim'>
                                    <img className='navimg' src={set} />
                                </div>
                                <div className='navzk' >Global friend</div>
                            </Link>
                            <Link className='navz1' to='/system/user-fr'>
                                <div className='navcim1'>
                                    <img className='navimg1' src={change} />
                                </div>
                                <div className='navzk1' >Manage Friends</div>
                            </Link>

                            <Link className='navz3' to='/system/user-update'>
                                <div className='navcim3'>
                                    <img className='navimg3' src={del} />
                                </div>
                                <div className='navzk3' >Friend request</div>
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
                <div className='root2'>
                    <img className='root3' src={io} onClick={() => this.onSetSidebarOpen(true)} />
                </div>
                

                <div className='search'>
                    <div className='sep'>
                        <img className='ser' src={ser} />
                    </div>
                  
                    <input className='search-in' onChange={(event) => this.handleOnChangeSearch(event)} type='text' />
                </div>

               
                <div className='add'>
                    {this.state.datas.map(d =>
                        <Card className='cardi' sx={{ maxWidth: 350, minWidth: 350, minHeight: 250, maxHeight: 250 }}>
                            <CardHeader
                                avatar={<Avatar src={d.image} />}
                                title={d.lastName && d.firstName}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Age: {d.age}
                                </Typography>

                                <Typography paragraph>
                                    Description: {d.description}
                                </Typography>
                            </CardContent>
                            <CardActions className='btn-act'>
                                <Button onClick={() => this.hans(d.id)} size="small">Add</Button>
                            </CardActions>

                        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Addfriends);

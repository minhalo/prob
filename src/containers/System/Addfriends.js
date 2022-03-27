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
import vio from '../../assets/images/violet.png'











import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, searched, brei } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
import { random } from 'lodash';
import Modelanou from './Modelanou';
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
            isOpen: false
        };
    }
    handleClick =   () =>
    {
        this.setState({
            isOpen:true
        })
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

    handleHind =   () =>
    {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        
        return (
            <div className=''>
                <Nav />
                <Modelanou
                 isOpen={this.state.isOpen}
                 isHide={this.handleHind}
                 />
                <div className='suggest'><h3>Suggestion</h3></div>
                <div className='random'>
                    {this.state.datas.map(d =>
                        <Card className='cardi1' sx={{ maxWidth: 200, minWidth: 200, minHeight: 250, maxHeight: 250 }}>
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
                                {/* <Button size="small">Delete</Button> */}
                            </CardActions>
                        </Card>
                    )}
                </div>
                <div className='search'>
                    <div className='sep'>
                        <img className='ser' src={ser} />
                    </div>
                    <div className='btn-ser'>
                        <button className='btns-ser' onClick={() => this.spo()}>Search</button>
                    </div>
                    <input className='search-in' onChange={(event) => this.handleOnChangeSearch(event)} type='text' />
                </div>
                <div className='chicken'>
                        <button className='btn-chicken'><Link to='/system/user-update'>Friends request</Link></button>
                        <div className='vop'><img onClick={() => this.handleClick()} className='img-vio' src={vio}/></div>                   
                </div>
                <div className='chickens'>
                        <button className='btn-chickens'><Link to='/system/user-fr'>Manage friend</Link></button>
                </div>
                <div className='add'>
                    {/* {this.state.datas.map(d => 
                    <div>
                        <div>
                            <img className='pic3' src={d.image} /> 
                        </div>
                        <div>
                            {d.firstName} {d.lastName}
                        </div>
                        <div>
                        <button onClick={() => this.hansdet(d.id)}>delete</button> 
                        <button onClick={() => this.hans(d.id)}>add</button>
                        </div>
                    </div>)} */}
                    {this.state.datas.map(d =>
                        <Card className='cardi' sx={{ maxWidth: 200, minWidth: 200, minHeight: 250, maxHeight: 250 }}>
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
                                {/* <Button size="small">Delete</Button> */}
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

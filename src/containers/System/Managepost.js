import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, profile, setc, listcomment, header, role, deleteaccount, searchRole, userup } from '../../services/userService';
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
import { Bar } from "react-chartjs-2";
import increase from '../../assets/images/increase.png'



import '../System/m.scss';
import '../System/UserManage.scss';
import '../System/Setting.scss';
import Nav from './nav';
import Friends from './Friends';
import Navor from './navor';
import { ButtonBase } from '@mui/material';
import Modelrole from './Modelrole';
// import { BarController } from 'chart.js';
import Barchart from './barchart.js'







class Managepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            check: '',
            isOpen: false,
            idl: '',
            search: '',
            useup: '',
            uppost: '',
            upcomment: '',
        }
    }

    async componentDidMount() {
        let data = await role(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })

        let di = await userup()
        // let io = di.userData[0][0].pop - di.userData[1][0].pop 
        // console.log(io)
        this.setState({
            useup: di.userData[0][0].pop / di.userData[1][0].pop  * 100
        })
        this.setState({
            uppost: di.userData[2][0].pop / di.userData[3][0].pop  * 100
        })
        this.setState({
            upcomment: di.userData[4][0].pop / di.userData[5][0].pop  * 100
        })

        
        let check = await header(this.props.userInfo.id)

        this.setState({
            check: check.userData
        })

        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {

                event.preventDefault();
                // callMyFunction();
                this.search()

            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }




    render() {
        console.log(this.state.upcomment)
        return (
            <div className='app8'>
                <Navor />
                <Barchart />
                <div className='role'>

                </div>
                <div className='Upcomment'>
                    <img className='increase' src={increase}/>
                    <p className='userup'>User</p>
                    <p className='io'>{this.state.useup > 0 ? this.state.useup : 0}%</p>
                </div>

                <div className='Uppost'>
                    <img className='increase' src={increase}/>
                    <p className='userup'>Post</p>
                    <p className='io'>{this.state.uppost > 0 ? this.state.uppost : 0}%</p>
                </div>
                <div className='Upcomments'>
                    <img className='increase' src={increase}/>
                    <p className='userup'>Comment</p>
                    <p className='io'>{this.state.upcomment > 0 && this.state.upcomment != Infinity  ? this.state.upcomment: 0}%</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Managepost);

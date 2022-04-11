import React, { Component, useEffect,useState  } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
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
import ser from '../../assets/images/uo.png'




import '../System/UserManage.scss';
import { Link } from 'react-router-dom';
import {searchrequest, deleteaff, addf, delf, req, stop } from '../../services/userService';

import Nav from './nav';
import Navfriend from './navfriend';
class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
        
    }
    

   

    render() {

        return (
            
            <div>
               <div className='videocall'>ok</div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);

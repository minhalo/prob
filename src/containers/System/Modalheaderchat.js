import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { activate, all, dmmn, getCheckChangeEmail, getGroup, kdp, listactivate, logout } from '../../services/userService';

// import './Header.scss';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import { socket } from '../../services/userService';
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
// import Button from '@mui/material/Button';
import vio from '../../assets/images/violet.png'




class Modalheaderchat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dove: [],
            idchose: ''
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    
    act = async () => {
        let data = await activate(this.props.isokay, this.props.userInfo.id)
    }

    async componentDidMount() {
        let data = await listactivate(this.props.userInfo.id)
        this.setState({
            dove: data.userData
        })
    }

    

    handleClick = async (idk) => {
        //to do
        this.setState({
            idchose: idk
        })

        
    }


    handleinsert = async () => {
        let data = await activate(this.state.idchose, this.props.userInfo.id)
        this.props.isHide()
        window.location.reload()
    }

    render() {
        const { processLogout } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"akaaka"}
                centered
                size="lg"
            >
                <ModalBody>
                    <div className='input-created'>
                        <label>Choose Group to activate</label>
                    </div>
                    <div className='box-gradient'>
                        {this.state.dove.map(d =>
                            <Card  
                            // onclick = {} 
                            onClick={() => this.handleClick(d.id)}
                            className='cardi1' sx={{ maxWidth: 200, minWidth: 200, minHeight: 100, maxHeight: 100 }}>
                                <CardHeader
                                    // avatar={<Avatar src={d.image} />}
                                    title={d.groupname}
                                />
                            </Card>
                        )}
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.handleinsert() }}>Send</Button>
                </ModalFooter>
            </Modal>

        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modalheaderchat);

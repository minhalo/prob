import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { activate, all, getCheckChangeEmail, getGroup, kdp, logout } from '../../services/userService';

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




class Modeladd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: '',
            id: '',
            dataok: [],
            idf: '',
            names: '',
            dove: [],
            idchose: ''
        }
    }
    toggle = () => {
        this.props.isHide()
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAdd = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    async componentDidMount() {
        let data = await all(this.props.userInfo.id)
        this.setState({
            dove: data.userData
        })
    }
    handleChange(e) {
        this.setState({ idf: e.value, names: e.label })
    }

    handleClick = async (idk) => {
        //to do
        this.setState({
            idchose: idk
        })

        
    }

    handleinsert = async () => {
        let data = await activate(this.props.isoke, this.state.idchose)
        this.props.isHide()
        window.location.reload()
    }



    render() {
        // console.log(this.state.name)
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
                        <label>Choose friends to add</label>
                    </div>
                    <div className='box-gradient'>
                        {this.state.dove.map(d =>
                            <Card  
                            // onclick = {} 
                            onClick={() => this.handleClick(d.id)}
                            className='cardi1' sx={{ maxWidth: 200, minWidth: 200, minHeight: 100, maxHeight: 100 }}>
                                <CardHeader
                                    avatar={<Avatar src={d.image} />}
                                    title={d.lastName && d.firstName}
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

export default connect(mapStateToProps, mapDispatchToProps)(Modeladd);

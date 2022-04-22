import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { activate, all, getCheckChangeEmail, getGroup, kdp, logout,filepost, filepoststudent, sote } from '../../services/userService';
import Dropzone from 'react-dropzone';

import pdf from '../../assets/images/pdfreal.png'
import jpg from '../../assets/images/jpgreal.png'
import doc from '../../assets/images/docreal.png'
import xls from '../../assets/images/xlsreal.png'
import drag from '../../assets/images/drag.jpg'
import FileViewer from 'react-file-viewer';



import './m.scss';
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
// import header from '../../services/userService'

import { header, creatpost, listpost } from '../../services/userService'
import filetap from '../../assets/images/file.png'



class Modelwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            lastName: '',
            datas: '',
        }

        // }


    }

    async componentDidMount()
    {
        let data = header(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })
    }


   
    toggle = () => {
        this.props.isHide()
    }



    handleOnChangeFirstname = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleinsert = async () => {
        
            let data = await sote(this.props.isId, this.state.lastName)
            this.props.isReset()
            this.props.isHide()
        
    }


    render() {
        console.log(this.state.datas)
        const { processLogout } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"jjdjdj"}
                centered
                size="sm"
            >
                <ModalBody>
                    
                <input className='input-fit' onChange={(event) => this.handleOnChangeFirstname(event)} type="text" />

                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => { this.handleinsert() }}>Update</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modelwatch);

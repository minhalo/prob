import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { activate, all, getCheckChangeEmail, getGroup, kdp, logout } from '../../services/userService';
import Dropzone from 'react-dropzone';

import pdf from '../../assets/images/pdf.jpg'
import jpg from '../../assets/images/jpg.png'
import drag from '../../assets/images/drag.jpg'


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



class Modalpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            data: [],
            mes: '',
            files: [],
            filebase64: null
        }

        this.onDrop = (files) => {
            this.setState({ files })
            // const reader = new FileReader();
            // reader.onload = () => {
            //     if (reader.readyState === 2) {
            //         this.setState({ filebase64: reader.result })
            //     }
            // }
            // reader.readAsDataURL(files.target.files[0])
            // this.setState({ filebase64: files.target.files[0] })
            var file = files[0]
            const reader = new FileReader();
            reader.onload = (event) => {
                // console.log(event.target.result);
                this.setState({ filebase64:  event.target.result})
            };
            reader.readAsDataURL(file);
        };

    }


    toggle = () => {
        this.props.isHide()
    }


    async componentDidMount() {
        let data = await header(this.props.userInfo.id)
        this.setState({
            data: data.userData
        })

    }

    handleOnChangeSet = (event) => {
        this.setState({
            mes: event.target.value
        })
    }

    handleinsert = async () => {
        let ok = creatpost(this.props.userInfo.id, this.state.mes, this.state.filebase64) 
        
        this.props.isHide()
    }

   





    render() {
        console.log(this.state.filebase64)
        const files = this.state.files.map(
            function (file, i) {

                if (file.type === 'image/jpeg') {
                    return (
                        <div key={file.name}>
                            <img className='pdf' src={jpg} />
                            <br />
                            {file.name}
                        </div>
                    )
                }

                else if (file.type === 'application/pdf') {
                    return (
                        <div key={file.name}>
                            <img className='pdf' src={pdf} />
                            <br />
                            {file.name}
                        </div>
                    )
                }


            }
        );
        const { processLogout } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"bisode"}
                centered
                size="md"
            >
                <ModalBody>
                    <div>
                        <img className='rungroi' src={this.state.data.image} />
                        <h4 className='okmg'>{this.state.data.firstName}</h4>
                    </div>
                    <div className='send-post'>
                        <textarea className='arepost' maxlength="256" onChange={(event) => this.handleOnChangeSet(event)} type="text" />
                        {/* <input type='text'/> */}
                    </div>
                    <Dropzone onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <section className="congtino">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <img className='drag' src={drag} />
                                    <p>File only accept Jpg, pdf</p>
                                </div>
                                <aside className='file'>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                </aside>
                            </section>
                        )}
                    </Dropzone>

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

export default connect(mapStateToProps, mapDispatchToProps)(Modalpost);

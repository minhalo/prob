import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, profile, setc, listcomment, getallscore, getlearningopc, uiui } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import p from '../../assets/images/back.webp'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Select from 'react-select'
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
import Modelwatch from './Modelwatch';







class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            allscore: [],
            selectOptions: [],
            idf: '',
            name: '',
            isOpen: false,
            ido: ''
        }
    }


    handleClick = (idk) => {

        this.setState({
            isOpen: true
        })

        this.setState({
            ido: idk
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    async componentDidMount() {

        if (!this.state.idf) {
            let data = await getallscore(this.state.id)
            this.setState({
                allscore: data.userData
            })
        }
        else {
            let data = await uiui(this.state.id)
            this.setState({
                allscore: data.userData
            })
        }





        const res = await getlearningopc(this.state.id);
        const datas = res.userData
        const options = datas.map(d => ({
            "value": d.id,
            "label": d.text
        }))
        if (res) {
            this.setState({ selectOptions: options })
        }
    }

    handleChange(e) {
        this.setState({ idf: e.value, name: e.label })
    }

    reset = async () => {
        let data = await getallscore(this.state.id)
        this.setState({
            allscore: data.userData
        })
    }

    testdata = () => {
        console.log(this.state.idf)
    }

    render() {
        console.log(this.state.allscore)
        return (
            <div className='app8'>
                <Modelwatch
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                    isId={this.state.ido}
                    isReset={this.reset}
                />


                <div className='boead'>

                    <table class="table table-success">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Point</th>
                                <th>Download</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allscore.map(d =>

                                <tr>
                                    <td>{d.userid}</td>
                                    <td>{d.firstName}</td>
                                    <td>{d.lastName}</td>
                                    <td>{d.point == 0 ? 'Not mark' : d.point}</td>
                                    <td><Button className='tbndown' onClick={() => triggerBase64Download(d.file, d.fileName)}>
                                        Download
                                    </Button></td>
                                    <td>

                                        <Button onClick={() => this.handleClick(d.id)}>
                                            {d.point == 0 ? 'Mark' : 'Remark'}
                                        </Button>
                                    </td>
                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);

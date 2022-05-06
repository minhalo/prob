import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Modeladstudent from './Modeladstudent';
import { getUsers, getEdit, getBox, getPostClass, getdocuio, sendmessage, getlistmessger, all, addfriend, refresh, addf, delf, search, req, header, pdfdel, rip, getlearningopc, getoff, dellpost, toce, kickoff, getallfile, getdocumentclass } from '../../services/userService'
import Avatar from 'react-avatar';
import '../System/m.scss';
import '../System/Setting.scss';
import Dropzone from 'react-dropzone';
import pdf from '../../assets/images/pdfreal.png'
import jpg from '../../assets/images/jpgreal.png'
import doc from '../../assets/images/docreal.png'
import xls from '../../assets/images/xlsreal.png'
import drag from '../../assets/images/drag.jpg'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';

import movert from '../../assets/images/bird.png'
import RainbowText from 'react-rainbow-text';


import moment from 'moment'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { triggerBase64Download } from 'common-base64-downloader-react';
import Base64Downloader from 'react-base64-downloader';



import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Modelupload from './Modelupload';
import Modalviewpdf from './modalviewpdf';

const Tutor = 'Tutor'
class Groupaccesspost extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            id: this.props.match.params.id,
            datas: '',
            iko: [],
            mes: '',
            oda: [],
            checks: '',
            isOpen: false,
            // ioeq: ''
            document: ''
        };

    }


    handleOnChangeSet = (event) => {
        this.setState({
            mes: event.target.value
        })
    }

    async componentDidMount() {
        let data = await getPostClass(this.state.id)
        this.setState({
            datas: data.userData
        })

        let check = await header(this.props.userInfo.id)
        this.setState({
            checks: check.userData.roleid
        })


        let oki = await getdocumentclass(this.props.userInfo.id, this.state.id)
        this.setState({
            iko: oki.userData
        })

        let dato = await getlistmessger(this.state.id)
        this.setState({
            oda: dato.userData
        })
    }


    sendtes = async () => {
        let data = await sendmessage(this.props.userInfo.id, this.state.id, this.state.mes)

        let check = document.getElementById("name")
        check.value = ''
        let dato = await getlistmessger(this.state.id)
        this.setState({
            oda: dato.userData
        })
    }

    handleClick = async (ids) => {
        let data = await getdocuio(ids)
        // window.URL.createObjectURL(data.userData.file)
        const file = new Blob(
            [data.userData.file],
            { type: 'application/pdf' })

        const fileURL = URL.createObjectURL(file)
        // window.open(fileURL)
        this.setState({
            document: data.userData.file
        })
        this.setState({
            isOpen: true
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    openPDF() {

        let pdfWindow = window.open("");

        pdfWindow.document.write(`<iframe width='100%' height='1000%' src=" + encodeURI(this.state.document) + "></iframe>`);

    }



    render() {
        console.log(this.state.document)

        return (
            <div className='app5'>
                <Modalviewpdf
                    isIds={this.state.document}
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                />
                <div className='minhe'>
                    <Avatar size={40} className='avtarminhe' name={Tutor} />
                    <h4 className='minhetext'>Tutor request</h4>
                    <div className='divminhe'>
                        <h3 className='minhetext1'>{this.state.datas.text}</h3>
                    </div>

                </div>
                <div className='minhe1'>
                    <h3 className='minhe11'>Public comment</h3>
                    <div className='listminhe11'>
                        {this.state.oda.map(d =>

                            <div >
                                {/* {d.acc != 4 ? <h6 className='stusg'>{d.message}</h6> : <h6 className='teamsg'>{d.message}</h6>} */}
                                <h6 className={d.idacc != this.state.datas.accId ? 'stusg' : 'teamsg'}>{d.message}</h6>
                            </div>
                        )}
                    </div>
                    <div className='minhe121'>
                        <input id="name" placeholder='Aa' className='minhe1211' max="200" onChange={(event) => this.handleOnChangeSet(event)} type='text' />
                    </div>
                    <button onClick={() => this.sendtes()} className='minhe122'>Send</button>
                </div>
                <div className='minhe2'>
                    <div className='minhe21'>
                        {this.state.iko.map(d =>
                            <div className='minhe22' onClick={() => this.handleClick(d.id)}>
                                <h4 className='minhe222'>{d.fileName}</h4>
                            </div>
                        )}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Groupaccesspost);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Modeladstudent from './Modeladstudent';
import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, header,pdfdel, rip, getlearningopc, getoff, dellpost, toce, kickoff, getallfile } from '../../services/userService'
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


class Groupaccess extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            isOpen: false,
            id: this.props.match.params.id,
            text: '',
            uid: '',
            datas: [],
            ofu: [],
            octopus: [],
            ido: '',
            isOpens: false,
            folder: []

        };

    }

    handleClick = (idk) => {
        if (this.state.uid === 3) {
            this.setState({
                isOpen: true
            })
            this.setState({
                ido: idk
            })
        }

    }

    async componentDidMount() {
        let head = await header(this.props.userInfo.id)
        this.setState({
            uid: head.userData.roleid
        })
        let data = await getlearningopc(this.state.id)
        this.setState({
            datas: data.userData
        })
        let offi = await getoff(this.state.id)
        let ifu = offi.userData[0].firstName
        console.log(ifu)
        this.setState({
            ofu: ifu
        })

        let octo = await toce(this.state.id)
        this.setState({
            octopus: octo.userData
        })


        let getfile = await getallfile(this.state.id)
        this.setState({
            folder: getfile.userData
        })

    }




    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    handleClicks = (idk) => {
        if (this.state.uid === 3) {
            this.setState({
                isOpens: true
            })
        }

    }

    handleHinds = () => {
        this.setState({
            isOpens: !this.state.isOpens
        })
    }

    handlecreate = async () => {
        if (this.state.uid === 3 && this.state.text.length > 0) {
            let data = await rip(this.props.userInfo.id, this.state.id, this.state.text)
            let datao = await getlearningopc(this.state.id)
            this.setState({
                datas: datao.userData
            })
        }

    }


    handleOnChangeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }


    deletepost = async (idk) => {
        if (this.state.uid === 3) {
            let data = dellpost(idk, this.state.id)
            let datao = await getlearningopc(this.state.id)
            this.setState({
                datas: datao.userData
            })
        }
    }

    kick = async (idk) => {
        if (this.state.uid === 3) {
            let date = kickoff(idk, this.state.id)
            let octo = await toce(this.state.id)
            this.setState({
                octopus: octo.userData
            })
        }
    }

    reset = async () => {
        let datao = await getlearningopc(this.state.id)
        this.setState({
            datas: datao.userData
        })
    }

    delpdf = async (idk) => {
        if (this.state.uid === 3) {
        let data = await pdfdel(idk)
        let getfile = await getallfile(this.state.id)
        this.setState({
            folder: getfile.userData
        })
        }
    }

    changelink = () => {
        let id = `/system/user-score/${this.state.id}`
        window.location.assign(id);
    }

    render() {
        console.log(this.state.folder[0])

        return (
            <div className='app5'>
                <Modelupload
                    isOpen={this.state.isOpens}
                    isHide={this.handleHinds}
                    isId={this.state.id}
                />
                <Modeladstudent
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                    isPop={this.state.ido}
                    isReset={this.reset}
                />
                <div className='inputstudent'>
                    <p className='iueg'>Group id: {this.state.id}</p>
                </div>
                <div className='oeoe'>
                    <p className='eoeo'>Tutor: {this.state.ofu}</p>
                </div>

                <button className='obds' onClick={() => this.changelink()}>Score</button>






                <button onClick={() => this.handleClicks()} className='ud'>Upload material</button>
                <div className='ste'>
                    <p className='opre'>Student</p>
                    {this.state.octopus.map(d =>
                        <div>
                            <img className='imgocto' src={d.image} />
                            {d.firstName}
                            <button onClick={() => this.kick(d.id)} className='btn-kick'>Kick</button>
                        </div>

                    )}
                </div>
                <div className="inr">
                    <div className="submidform">
                        <textarea onChange={(event) => this.handleOnChangeText(event)} maxlength="256" placeholder="Input text here..." className="teu" />
                        <button onClick={() => this.handlecreate()} className="upe">Create</button>
                    </div>


                    {this.state.datas.map(d =>
                        <Card className='cardiok' sx={{ maxWidth: 640, minWidth: 640, minHeight: 100, maxHeight: 2000 }}>
                            <CardHeader
                                subheader={moment(d.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                action={d.pop === this.props.userInfo.id ?
                                    <IconButton onClick={() => this.deletepost(d.id)} aria-label="settings">

                                        <img className='bird' src={movert} />
                                    </IconButton> : null
                                }
                            />
                            <CardContent>

                                <Typography paragraph>
                                    {d.text}

                                </Typography>
                            </CardContent>
                            <CardActions className='btn-act'>
                                <Button onClick={() => this.handleClick(d.id)} size="small">Update</Button>
                            </CardActions>
                        </Card>
                    )}

                </div>

                <div className='material'>
                    {this.state.folder.map(d =>
                        <div className='material1'>
                            <img className='pdfname' src={pdf} />
                            <h6 className='filenames'>{d.fileName}</h6>
                            {/* {d.file} */}
                            <Button className='tbndown' onClick={() => triggerBase64Download(d.file, d.fileName)}>
                                Download
                            </Button>
                            <Button onClick={() => this.delpdf(d.id)} className='tbndown1'>
                                Delete
                            </Button>
                        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Groupaccess);

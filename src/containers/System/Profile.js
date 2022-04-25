import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, profile, setc, listcomment,jscore } from '../../services/userService';
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



import '../System/m.scss';
import '../System/UserManage.scss';
import '../System/Setting.scss';
import Nav from './nav';
import Friends from './Friends';







class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            test: false,
            id: this.props.match.params.id,
            datas: [],
            set: [],
            isOpen: false,
            ids: [],
            ide: '',
            score: '',
        }
    }
    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    async componentDidMount() {
        let data = await profile(this.state.id)
        this.setState({
            datas: data.users
        })
        let io = await setc(this.state.id)
        this.setState({
            set: io.userData
        })


        let alljscore = await jscore(this.props.userInfo.id)
        let check = alljscore.userData[0].pop
        this.setState({
            score: check
        })
    }

    test = () => {
        this.setState({
            test: !this.state.test
        })
    }

    handleClick = async (idk) => {
        this.setState({
            isOpen: true
        })

        let data = await listcomment(idk)

        this.setState({
            ids: data.userData
        })
        this.setState({
            ide: idk
        })
    }


    render() {
        console.log(this.state.score)
        return (
            <div className='app8'>
                <Nav />
                <div className='bob'>
                    <div className='prob'>
                        <div className='img-prie'>
                            {/* <img className='img-prie-f' src={p} /> */}
                        </div>
                        <div className='img-prof'>
                            <img className='img-prof-f' src={this.state.datas.image} />
                        </div>
                        <div className='input-prof'>
                            <h1 className='input-prie'>{this.state.datas.lastName} {this.state.datas.firstName}</h1>
                        </div>
                        <div className='age'>
                            <p className=''>Age: {this.state.datas.age}</p>
                        </div>
                        <div className='genders'>
                            <p className=''>Gender: {this.state.datas.gender}</p>
                        </div>
                        <div className='addresses'>
                            <p className=''>Addess: {this.state.datas.address}</p>
                        </div>
                        <div className='phonenumbers'>
                            <p className=''>Phonenumber: {this.state.datas.phonenumber}</p>
                        </div>
                        <div className='totole'>
                            <p className=''>Total score: {this.state.score == null ? 0 : this.state.score} Point</p>
                        </div>
                        <div className='desi'>
                            <p>Description</p>
                        </div>
                        <div className='desip'>
                            {this.state.datas.description}
                        </div>
                    </div>
                    <div className='cutew'></div>

                    {this.state.set.map(d =>
                            <Card className='cardio' sx={{ maxWidth: 700, minWidth: 700, minHeight: 100, maxHeight: 1000 }}>
                                <CardHeader
                                    avatar={<Avatar src={d.image} />}
                                    title={d.firstName}
                                    subheader={moment(d.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                />
                                <CardContent>
                                    <Typography paragraph>
                                       
                                        <div> {d.text}</div>
                                        {/* {d.op} */}
                                        {d.op ? <img className='oppc' src={d.op}/> : <div></div>}
                                    </Typography>
                                </CardContent>
                                <CardActions className='btn-act'>
                                    <Button onClick={() => this.handlelike(d.id)} size="small">Like {d.like} </Button>
                                    <Button onClick={() => this.handledislike(d.id)} size="small">Dislike {d.dislike}</Button>
                                    <Button onClick={() => this.handleClick(d.id)} size="small">Comment</Button>
                                    {d.op ?<Button onClick={() => triggerBase64Download(d.op, 'my_download_name')}>
                                        Download
                                    </Button> : <div></div>}

                                </CardActions>
                            </Card>
                        )}
                </div>
                {/* <div className='profiig'>

                </div> */}
                <Friends />
            </div>

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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

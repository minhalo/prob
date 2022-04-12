import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'

import { Comment, Form, Header } from 'semantic-ui-react'
import ReactScrollableFeed from 'react-scrollable-feed'
import '../System/UserManage.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
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
import vio from '../../assets/images/violet.png'
import { postExac, header, listpost, searched, inlike, dislike, commenti, listcomment, addfriend } from '../../services/userService';
import Modalpost from './Modalpost';
import moment from 'moment'
import ModelComment from './ModelComment';
import FileDownload from 'js-file-download'
import { triggerBase64Download } from 'common-base64-downloader-react';


class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false,
            home: false,
            clickprop: false,
            datas: [],
            imgi: '',
            isOpens: false,
            pops: [],
            textl: '',
            com: [],
            isOpen: false,
            ids: [],
            ide: ''
        }
    }
    // componentDidUpdate () {
    //     let circle = document.querySelector('.nav3')
    //     if (this.state.click === false && this.state.home === false){
    //         circle.style.display = 'none'
    //     }
    //     else{
    //         circle.style.display = 'block'
    //     }

    //     let circles = document.querySelector('.nav4')
    //     if (this.state.clickprop === false){
    //         circles.style.display = 'none'
    //     }
    //     else{
    //         circles.style.display = 'block'
    //     }
    // }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    async componentDidMount() {
        let data = await searched(this.props.userInfo.id)
        this.setState({
            datas: data.userData
        })
        let imgk = await header(this.props.userInfo.id)
        this.setState({
            imgi: imgk.userData
        })

        let pop = await listpost()
        this.setState({
            pops: pop.userData
        })


    }

    handleClicks = () => {
        this.setState({
            isOpens: true
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

    download = async (idk) => {
        let pop = await postExac(idk)
        let ok = pop.userData

        let oks = ok.image
        // const base64 = await fetch(oks);
        // const base64Response = await fetch(`data:image/jpeg;base64,${oks}`);

        // const blob = await base64Response.blob();
        console.log(ok)
        // FileDownload(oks, 'download')
        // window.open(`ok`)
    }

    handleComment = async (idk) => {
        let insert = await commenti(this.props.userInfo.id, idk, this.state.text)
    }

    handleHinds = () => {
        this.setState({
            isOpens: !this.state.isOpens
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handlelike = async (idk) => {
        let ui = await inlike(idk)
        let pop = await listpost()
        this.setState({
            pops: pop.userData
        })
    }

    handledislike = async (idk) => {
        let ui = await dislike(idk)
        let pop = await listpost()
        this.setState({
            pops: pop.userData
        })
    }

    hans = async (id) => {
        let data = await addfriend(this.props.userInfo.id, id)
    }

    handleCallback = async () => {
        let data = await listcomment(this.state.ide)

        this.setState({
            ids: data.userData
        })
    }


    handleOnChangeText = (event) => {
        this.setState({
            textl: event.target.value
        })
    }
    render() {
        const { userInfo } = this.props

        return (
            <div>
                <Nav />

                <div className="users-container">
                    <Modalpost
                        isOpen={this.state.isOpens}
                        isHide={this.handleHinds}
                    />
                    <ModelComment
                        isOpen={this.state.isOpen}
                        isHide={this.handleHind}
                        ido={this.state.ids}
                        ide={this.state.ide}
                        handleback={this.handleCallback}
                    />
                    <div className='testok'>
                        <div className='random'>
                            {this.state.datas.map(d =>
                                <Card className='cardi1' sx={{ maxWidth: 200, minWidth: 200, minHeight: 250, maxHeight: 250 }}>
                                    <CardHeader
                                        avatar={<Avatar src={d.image} />}
                                        title={d.lastName && d.firstName}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Age: {d.age}
                                        </Typography>

                                        <Typography paragraph>
                                            Description: {d.description}
                                        </Typography>




                                    </CardContent>
                                    <CardActions className='btn-act'>
                                        <Button onClick={() => this.hans(d.id)} size="small">Add</Button>
                                        {/* <Button size="small">Delete</Button> */}
                                    </CardActions>
                                </Card>
                            )}
                        </div>
                        <div className='text-post'>
                            {/* {this.state.imgk} */}
                            <img className='img-post' src={this.state.imgi.image} />
                            <div className='clickmodal' onClick={() => this.handleClicks()}>
                                <h6 className='hclick'>What are you doing? Bro</h6>
                            </div>
                        </div>
                        <div className='lopl'></div>

                        {this.state.pops.map(d =>
                            <Card className='cardio' sx={{ maxWidth: 640, minWidth: 640, minHeight: 100, maxHeight: 1000 }}>
                                <CardHeader
                                    avatar={<Avatar src={d.image} />}
                                    title={d.firstName}
                                    subheader={moment(d.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                />
                                <CardContent>
                                    <Typography paragraph>
                                        {d.text}
                                        {/* {d.op} */}
                                    </Typography>
                                </CardContent>
                                <CardActions className='btn-act'>
                                    <Button onClick={() => this.handlelike(d.id)} size="small">Like {d.like} </Button>
                                    <Button onClick={() => this.handledislike(d.id)} size="small">Dislike {d.dislike}</Button>
                                    <Button onClick={() => this.handleClick(d.id)} size="small">Comment</Button>
                                    <Button onClick={() => triggerBase64Download(d.op, 'my_download_name')}>
                                        Download
                                    </Button>;

                                </CardActions>
                            </Card>
                        )}
                    </div>
                </div>
                <Friends />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

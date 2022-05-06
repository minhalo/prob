import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Modeladstudent from './Modeladstudent';
import { getUsers, getEdit, getBox, all, addfriend,countew, allupdate, refresh, getallfile, addf, delf, search,delpdf, req, header, rip, getlearningopc, getoff, dellpost } from '../../services/userService'
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
import { triggerBase64Download } from 'common-base64-downloader-react';
// import Avatar from '@mui/material/Avatar';

import movert from '../../assets/images/bird.png'
import RainbowText from 'react-rainbow-text';


import moment from 'moment'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Modelangre from './Modelangre';


class Studentaccess extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            folder: [],
            id: this.props.match.params.id,
            datas: [],
            isOpen: false,
            ido: '',
            sutu: [],
            total: ''
        };

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

        let getfile = await getallfile(this.state.id)
        this.setState({
            folder: getfile.userData
        })

        let data = await getlearningopc(this.state.id)
        this.setState({
            datas: data.userData
        })

        let allfie = await allupdate(this.props.userInfo.id, this.state.id)
        this.setState({
            sutu: allfie.userData
        })


        let count = await countew(this.props.userInfo.id, this.state.id)
        console.log(count.userData[0].pop)
        this.setState({
            total: count.userData[0].pop
        })

    }


    show = (idk) => {
        let id = `/system/user-groupaccesspost/${idk}`
        window.location.assign(id);
    }

    delpdf = async (ids) => {
        // console.log(ids)
        let data = await delpdf(ids)
        let allfie = await allupdate(this.props.userInfo.id, this.state.id)
        this.setState({
            sutu: allfie.userData
        })
    }

    hadnkereset = async() => {
        let allfie = await allupdate(this.props.userInfo.id, this.state.id)
        this.setState({
            sutu: allfie.userData
        })
    }




    render() {
        console.log(this.state.sutu)

        return (
            <div className='app5'>
                <div className='scorcipe'>
                    <h6 className='scorcipe1'>Score</h6>
                    <h6 className='scorcipe2'>{this.state.total}</h6>
                </div>
                <div className='allsu'>All Material</div>
                <div className='ioewq'>
                    <h3 className='ioewq1'>All File Upload</h3>
                    {this.state.sutu.map(d =>
                        <div className='material1'>
                            <img className='pdfname' src={pdf} />
                            <h6 className='filenames'>{d.fileName}</h6>
                            {/* {d.file} */}
                            {/* <Button className='tbndown' onClick={() => triggerBase64Download(d.file, d.fileName)}>
                             Download
                         </Button> */}
                            {d.point == 0 ? <Button onClick={() => this.delpdf(d.id)} className='tbndown1'>
                                Delete
                            </Button>: <div className='pospd'>{d.point}</div>}
                            
                        </div>


                    )}
                </div>
                <div className="inr">
                    <Modelangre
                        isOpen={this.state.isOpen}
                        isHide={this.handleHind}
                        isId={this.state.id} 
                        isO={this.state.ido}
                        ispro={this.hadnkereset}
                        />

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
                                <Button onClick={() => this.handleClick(d.id)} size="small" >Upload</Button>
                                <Button onClick={() => this.show(d.id)}  size="small" >Show</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Studentaccess);

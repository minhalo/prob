import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Modeladstudent from './Modeladstudent';
import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, header, rip, getlearningopc, getoff, dellpost } from '../../services/userService'
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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';


class Studentaccess extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            datas: []
        };

    }


    async componentDidMount() {
        let data = await header(this.props.userInfo.id)
        this.setState({
            datas: data.userData.roleid
        })
    }



    render() {
        // console.log(this.state.ofu)

        return (
            <div className='app5'>
                 <div className="inr">
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
                                <Button size="small">Upload </Button>




                            </CardActions>
                        </Card>
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

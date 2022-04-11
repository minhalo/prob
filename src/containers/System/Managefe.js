import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import ser from '../../assets/images/uo.png'
import { styled } from '@mui/material/styles';
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











import { deleteaff,getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, searched, brei, req, kdp, searchaff } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
import { random } from 'lodash';
import Modelanou from './Modelanou';
import Navfriend from './navfriend';
class Managefe extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            test: [],
            search: '',
            // datas: []
        };
    }


    async componentDidMount() {
        let data = await kdp(this.props.userInfo.id)
        this.setState({
            test: data.users
        })

        const listener = event => {
            if (event.code === "Enter"|| event.code === "NumpadEnter") {
            //console.log("Enter key was pressed. Run function.");
                event.preventDefault();
                // callMyFunction();
                this.spo()
                
            }
          };
          document.addEventListener("keydown", listener);
          return () => {
            document.removeEventListener("keydown", listener);
          };
    }

    hansdet = async (id) => {
        let data = await delf(this.props.userInfo.id, id)
        let datai = await kdp(this.props.userInfo.id)
        this.setState({
            test: datai.users
        })    }

    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }


  


    spo = async () => {
        let data = await searchaff(this.state.search, this.props.userInfo.id)
        this.setState({
            test: data.users
        })
    }


    render() {
        console.log(this.state.test)

        return (
            <div className=''>
                <Navfriend/>
                <div className='search'>
                    <div className='sep'>
                        <img className='ser' src={ser} />
                    </div>
                  
                    <input className='search-in' onChange={(event) => this.handleOnChangeSearch(event)} type='text' />
                </div>
                <div className='erp'>
                    {/* ok */}
                    {this.state.test.map(d =>
                        <Card className='cardi4' sx={{ maxWidth: 350, minWidth: 350, minHeight: 250, maxHeight: 250 }}>
                            <CardHeader
                                avatar={<Avatar src={d.image} />}
                                title={d.firstName}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Age: {d.age}
                                </Typography>

                                <Typography paragraph>
                                    Description: {d.description}
                                </Typography>
                            </CardContent>
                            <CardActions className='m'>
                                <Button onClick={() => this.hansdet(d.id)} size="small">Delete</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Managefe);

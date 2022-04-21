import React, { Component, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
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
import ser from '../../assets/images/uo.png'


import { ButtonBase } from '@mui/material';

import '../System/UserManage.scss';
import { Link } from 'react-router-dom';
import { searchrequest, deleteaff, addf, delf, req, stop, header, createGroupl, getlearning, learndel, getclass,codeclass, studendel } from '../../services/userService';

import Nav from './nav';
import Navfriend from './navfriend';
import Navor from './navor';
class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: '',
            datas: '',
            arr: [],
            ok: '',
            ui: '',
            arrs: []
        }

    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnChangeOk = (event) => {
        this.setState({
            ok: event.target.value
        })
    }

    handleOnChangeui = (event) => {
        this.setState({
            ui: event.target.value
        })
    }

    async componentDidMount() {
        let data = await header(this.props.userInfo.id)
        this.setState({
            datas: data.userData.roleid
        })

        
            let array = await getlearning(this.props.userInfo.id)
            this.setState({
                arr: array.userData
            })
        
       
            let arrays = await getclass(this.props.userInfo.id)
            this.setState({
                arrs: arrays.userData
            })
            // console.log(array.userData)
        
    }


    handlecreat = async () => {
        if (this.state.datas === 3 || this.state.datas === 1) {
            let data = await createGroupl(this.props.userInfo.id, this.state.age, this.state.ok)
            let array = await getlearning(this.props.userInfo.id)
            this.setState({
                arr: array.userData
            })
        }

        //todo list
    }

    handledelete = async (idk) => {
        if (this.state.datas === 3 || this.state.data === 1) {
            let data = await learndel(idk)
            let array = await getlearning(this.props.userInfo.id)
            this.setState({
                arr: array.userData
            })
        }
    }

    handledeletes = async (idk) => {
        // console.log(idk)
        if (this.state.datas === 2) {
            let data = await studendel(idk, this.props.userInfo.id)
            let arrays = await getclass(this.props.userInfo.id)
            this.setState({
                arrs: arrays.userData
            })
        }
    }

    handleaccess = (idk) => {
        let id = `/system/user-group/${idk}`
        window.location.assign(id);
    }

    handleaccessd = (idk) => {
        let id = `/system/user-student/${idk}`
        window.location.assign(id);
    }

    classcode = async () => {
        if (this.state.datas === 2) {
            let data = await codeclass(this.props.userInfo.id, this.state.ui)
            let arrays = await getclass(this.props.userInfo.id)
            this.setState({
                arrs: arrays.userData
            })
        }
    }

    render() {
        // console.log(this.state.datas)
        return (


            <div>
                {this.state.datas === 3 ?
                    <div className='gropc'>
                        <p className='topg'>Create new group</p>
                        <p className='topj'>Name</p>
                        <input className='topg1' placeholder='Create name here..' onChange={(event) => this.handleOnChangeAge(event)} type="text" />
                        <p className='topj1'>Point</p>
                        <input className='topg2' placeholder='Create point here..' onChange={(event) => this.handleOnChangeOk(event)} type="text" />
                        <button className='btnr' onClick={() => this.handlecreat()}>Create</button>
                    </div>
                    : null
                }
                {this.state.datas === 2 ?
                    <div className='gropc'>
                        <p className='topg'>Good luck student</p>
                        <p className='topj'>Total point: </p>
                        <input className='topg1' placeholder='Create name here..' value={100} type="text" />


                    </div>
                    : null
                }

                {this.state.datas === 2 ?
                    <div className='xcx'>
                        <p className='xsx1'>Class code</p>
                        <input className='xsx2' placeholder='Enter class code..' onChange={(event) => this.handleOnChangeui(event)} type="text" />
                        <button className='xsx3' onClick={() => this.classcode()}>Enter class</button>
                    </div>
                    : null}


                <div className='learninglist'>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Group Name</th>
                                <th scope="col">Group Point</th>
                                <th scope="col">Access</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>

                        {this.state.datas === 1 || this.state.datas === 3 ? 
                        
                        <tbody>
                            {this.state.arr.map(d =>
                                <tr>
                                    <th scope="row">{d.groupname}</th>
                                    <th scope="row">/{d.point}</th>
                                    <td>
                                        <div>
                                            <ButtonBase onClick={() => this.handledelete(d.id)}>Delete</ButtonBase>

                                        </div>
                                        <div>
                                            <ButtonBase onClick={() => this.handleaccess(d.id)}>Access</ButtonBase>
                                        </div>

                                    </td>

                                </tr>
                            )}
                        </tbody>
                        
                        :
                        
                        <tbody>
                            {this.state.arrs.map(d =>
                                <tr>
                                    <th scope="row">{d.groupname}</th>
                                    <th scope="row">/{d.point}</th>
                                    <td>
                                        <div>
                                            <ButtonBase onClick={() => this.handledeletes(d.id)}>Out Group</ButtonBase>

                                        </div>
                                        <div>
                                            <ButtonBase onClick={() => this.handleaccessd(d.id)}>Access</ButtonBase>
                                        </div>

                                    </td>

                                </tr>
                            )}
                        </tbody>
                        }
                        


                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Video);

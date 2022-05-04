import React, { Component } from 'react';
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
import set from '../../assets/images/setting.png'
import change from '../../assets/images/change.png'
import del from '../../assets/images/delete.png'

import Sidebar from "react-sidebar";
import io from '../../assets/images/io.png'




import '../System/UserManage.scss';
import { Link } from 'react-router-dom';
import { searchrequest, deleteaff, addf, delf, req, stop } from '../../services/userService';

import Nav from './nav';
import Navfriend from './navfriend';
class Userupdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            dove: [],
            han: '',
            search: '',
            sidebarOpen: false,
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
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
        let dove = await req(this.props.userInfo.id)
        this.setState({
            dove: dove.users
        })
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
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

    spo = async () => {
        let data = await searchrequest(this.state.search, this.props.userInfo.id)
        this.setState({
            dove: data.userData
        })
    }

    hansdet = async (id) => {
        await this.setState({
            han: id
        })
        let data = await delf(this.props.userInfo.id, this.state.han)
        // window.location.reload();
    }

    handleok = async (id) => {
        let data = await stop(this.props.userInfo.id, id)
        // window.location.reload();
        let datai = await req(this.props.userInfo.id)
        this.setState({
            dove: datai.users
        })
    }

    deleted = async (ids) => {
        let data = await deleteaff(this.props.userInfo.id, ids)
        let datai = await req(this.props.userInfo.id)
        this.setState({
            dove: datai.users
        })
    }
    handleOnChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }


    render() {
        // console.log(this.state.dove)

        return (

            <div>
                <Navfriend />
                <Sidebar
                    sidebar={
                        <div className='totalo'>
                            <b className='meus1'>Menu</b>
                            <Link className='navz' to='/system/user-addfr'>
                                <div className='navcim'>
                                    <img className='navimg' src={set} />
                                </div>
                                <div className='navzk' >Global friend</div>
                            </Link>
                            <Link className='navz1' to='/system/user-fr'>
                                <div className='navcim1'>
                                    <img className='navimg1' src={change} />
                                </div>
                                <div className='navzk1' >Manage Friends</div>
                            </Link>

                            <Link className='navz3' to='/system/user-update'>
                                <div className='navcim3'>
                                    <img className='navimg3' src={del} />
                                </div>
                                <div className='navzk3' >Friend request</div>
                            </Link>
                        </div>


                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={
                        { sidebar: { background: "white", minWidth: "250px", maxWidth: '250px', maxHeight: '700px', overflow: 'hidden' }, root: { overflow: "hidden" } }
                    }
                >


                </Sidebar>
                <div className='root2'>
                    <img className='root3' src={io} onClick={() => this.onSetSidebarOpen(true)} />
                </div>
                <div className='search'>
                    <div className='sep'>
                        <img className='ser' src={ser} />
                    </div>

                    <input className='search-in' onChange={(event) => this.handleOnChangeSearch(event)} type='text' />
                </div>
                <div className='erp'></div>
                <div className='manage-fr'>


                    {this.state.dove.map(d =>
                        <Card className='cardi2' sx={{ maxWidth: 350, minWidth: 350, minHeight: 250, maxHeight: 250 }}>
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
                            <CardActions className='btn-act'>
                                <Button onClick={() => this.handleok(d.id)} size="small">Accept</Button>
                                {/* <Button size="small">Delete</Button> */}
                                <Button onClick={() => this.deleted(d.id)} size="small">Denied</Button>

                            </CardActions>
                        </Card>
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Userupdate);

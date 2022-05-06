import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import Setting from '../containers/System/Setting';
import Userupdate from '../containers/System/Userupdate';
import Addfriends from '../containers/System/Addfriends';
import Changepass from '../containers/System/Changepass';
import Delete from '../containers/System/Delete';
import Profile from '../containers/System/Profile';
import Managefe from '../containers/System/Managefe'
import Chat from '../containers/System/Chat';
import Chats from '../containers/System/Chats';
import Video from '../containers/System/Video';
import Roleupdate from '../containers/System/Roleupdate';
import Groupaccess from '../containers/System/groupaccess';
import Managepost from '../containers/System/Managepost';
import studentaccess from '../containers/System/studentaccess';
import Score from '../containers/System/Score';
import mangeuser from '../containers/System/mangeuser';
// import permission from '../containers/System/permisiondo';
// import '../routes/system.scss';
import { header } from '../services/userService';
import Permissiondo from '../containers/System/Permissiondo';
import bookstore from '../containers/System/bookstore';
import groupaccesspost from '../containers/System/groupaccesspost';





class System extends Component {

    render() {
        // console.log(this.props.userInfo.roleid)
        return (

            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/setting-manage" component={Setting} />
                        <Route path="/system/user-update" component={Userupdate} />
                        <Route path="/system/user-addfr" component={Addfriends} />
                        <Route path="/system/user-change" component={Changepass} />
                        <Route path="/system/user-delete" component={Delete} />
                        <Route path="/system/user-profile/:id" component={Profile} />
                        <Route path="/system/user-fr" component={Managefe} />
                        <Route path="/system/user-chat" component={Chat} />
                        <Route path="/system/user-chats/:id" component={Chats} />
                        <Route path="/system/user-video" component={Video} />
                        <Route path="/system/user-student/:id" component={studentaccess} />
                        <Route path="/system/user-score/:id" component={Score} />
                        <Route path="/system/user-permission" component={Permissiondo} />
                        <Route path="/system/user-store" component={bookstore} />
                        <Route path="/system/user-group/:id" component={Groupaccess} />
                        <Route path="/system/user-groupaccesspost/:id" component={groupaccesspost} />

                        {this.props.userInfo.roleid === 1 ?
                            <Route path="/system/user-updaterole" component={Roleupdate} />
                            :
                            <Redirect
                                to={{
                                    pathname: "/system/user-permission",
                                }}
                            />
                        }



                        {this.props.userInfo.roleid === 1 ?
                            <Route path="/system/user-managepost" component={Managepost} />
                            :
                            <Redirect
                                to={{
                                    pathname: "/system/user-permission",
                                }}
                            />
                        }

                        {this.props.userInfo.roleid === 1 ?
                            <Route path="/system/user-mage" component={mangeuser} />
                            :
                            <Redirect
                                to={{
                                    pathname: "/system/user-permission",
                                }}
                            />
                        }

                        {/* {this.props.userInfo.roleid === 2 ?
                            <Route path="/system/user-student/:id" component={studentaccess} />
                            :
                            <Redirect
                                to={{
                                    pathname: "/system/user-permission",
                                }}
                            />
                        } */}

                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

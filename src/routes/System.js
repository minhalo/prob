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
// import '../routes/system.scss';

class System extends Component {
    render() {
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
                        <Route path="/system/user-profile" component={Profile} />

                        {/* <Redirect to="/system/user-manage"/> */}
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

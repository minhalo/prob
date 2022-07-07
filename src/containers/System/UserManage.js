import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
import * as actions from "../../store/actions";

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
      
    }

    logout = () => {
        this.props.processLogout()
    }
    
    render() {
      

        return (
            <div>
                <button onClick={() => this.logout()}></button>
                ok

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
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

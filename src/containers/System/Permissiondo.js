import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import per from '../../assets/images/per.webp'


import '../System/m.scss';
import '../System/UserManage.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';








class Permissiondo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // console.log(this.state.score)
        return (
            <div className='app8'>
                {/* <div className='permission'></div> */}
                <h1 className='permission'>You have no permission to access this role</h1>
                <img className='permission1' src={per} />
                <Link to="/system/user-manage">
                    <button className='permission2' type="button">
                        Back to homepage
                    </button>
                </Link>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Permissiondo);

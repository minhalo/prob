import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import '../System/m.scss';
import '../System/Setting.scss';
import { Carousel } from 'react-responsive-carousel';
import anh1 from '../../assets/images/anh1.jpg'
// import Caroselsx from './caroselsx';




class Bookstore extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
           
        };


    }

    render() {

        // console.log(this.state.datas)
        return (
            <div className=''>
                
                
           
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

export default connect(mapStateToProps, mapDispatchToProps)(Bookstore);

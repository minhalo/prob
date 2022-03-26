import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'



import '../System/UserManage.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Friends from './Friends';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false,
            home: false,
            clickprop:false
        }
    }
    // componentDidUpdate () {
    //     let circle = document.querySelector('.nav3')
    //     if (this.state.click === false && this.state.home === false){
    //         circle.style.display = 'none'
    //     }
    //     else{
    //         circle.style.display = 'block'
    //     }

    //     let circles = document.querySelector('.nav4')
    //     if (this.state.clickprop === false){
    //         circles.style.display = 'none'
    //     }
    //     else{
    //         circles.style.display = 'block'
    //     }
    // }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        const { userInfo } = this.props
        // console.log(this.state.click)
        return (
            <div>
               <Nav/>
                <div className="users-container">
                    <div className='testok'>
                        
                    </div>
                </div>
                <Friends/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

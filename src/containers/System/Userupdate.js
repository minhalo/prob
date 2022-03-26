import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'



// import '../System/m.scss';
import { Link } from 'react-router-dom';
import { addf, delf } from '../../services/userService';
import { Card } from 'reactstrap';
import Nav from './nav';
class Userupdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            click: false,
            clickprop: false,
            dove: [],
            han: '',
        }
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
        let dove = await addf(this.props.userInfo.id)
        this.setState({
            dove: dove.users
        })
    }

    hansdet = async (id) => {
        await this.setState({
            han: id
        })
        let data = await delf(this.props.userInfo.id, this.state.han)
        window.location.reload();


    }


    render() {

        return (
            <div>
                <Nav/>
                <div className='manage-fr'>
                    {this.state.dove.map(d =>
                        <div className='card-container'>
                            <div className='image-container'>
                                <img src={d.image} />
                            </div>
                            <div className='content'>
                                <div className='card-title'>
                                    <h4 className='h4'>{d.lastName} {d.firstName}</h4>
                                </div>
                                <div className='card-body'>
                                    <p className='p'>{d.description}</p>
                                </div>
                            </div>

                            {/* <button onClick={() => this.hansdet(d.id)}>Delete</button> */}
                        </div>
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

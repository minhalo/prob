import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';







import { getUsers, getEdit, getBox } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Navset from './navset';
class Setting extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            files: [],
            filename: null,
            click: false,
            errM: '',
            errCode: '',
            errMessage: '',
            errMessages: '',
            errMessagesx: '',
            errMessagesxz: '',
            errMessagesxzt: '',
            errMessagesxztu: '',
            errMessagesxztuk: '',
            errMessagesxztuko: '',
            errMessagesxztukoi: '',
            errMessagesxztukop: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
            id: userInfo.id,
            age: null,
            arrUsers: [],
            selectOptions: [],
            idf: '',
            name: '',
            checked: false,
            isOpen: false,
            password: '',
            textt: '',
            clickprop:false,
            a: null,
            profileImg: 'https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg'
        };
    }

    handleChangeOne = () => {
        this.state.checked = !this.state.checked;
    };


    handleOnChangeFirstname = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeId = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLastname = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleOnChangeSet = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleOnChangePhonenumber = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }
    handleOnChangeText = (event) => {
        this.setState({
            textt: event.target.value
        })
    }

    effexts = () => {
        this.setState({
            clickprop: !this.state.clickprop
        })
    }

    handleClick = () => {
        this.setState({
            isOpen: true
        })
    }
    componentDidUpdate() {
        // let circle = document.querySelector('.users-container')
        // let a = circle.scrollTop
        // if (a > 20) {
        //     circle.style.display = 'none'
        // }
        // this.setState({
        //     a:a 
        // })
        
        // if (this.state.click === false){
        //     circle.style.display = 'none'
        // }
        // else{
        //     circle.style.display = 'block'
        // }

        
        // let circles = document.querySelector('.nav4')
        // if (this.state.clickprop === false){
        //     circles.style.display = 'none'
        // }
        // else{
        //     circles.style.display = 'block'
        // }
    }

    effext = () => {
        this.setState({
            click: !this.state.click
        })
    }
    async componentDidMount() {
        let response = await getUsers(this.state.id)
        if (response) {
            this.setState({
                arrUsers: response.data
            })
        }
        const res = await getBox();
        const data = res.users
        const options = data.map(d => ({
            "value": d.id,
            "label": d.name
        }))
        if (res) {
            this.setState({ selectOptions: options })
        }
        // console.log(this.state.selectOptions)
        // console.log(response)
    }

    handleChange(e) {
        this.setState({ idf: e.value, name: e.label })
    }

    handleEdit = async () => {
        this.setState({
            errM: '',
            errCode: '',
            errMessage: '',
            errMessages: '',
            errMessagesx: '',
            errMessagesxz: '',
            errMessagesxzt: '',
            errMessagesxztu: '',
            errMessagesxztuk: '',
            errMessagesxztuko: '',
            errMessagesxztukoi: '',
            errMessagesxztukop: ''
        })
        if (this.state.checked === true) {
            try {


                let data = await getEdit(this.state.id, this.state.firstName, this.state.lastName, this.state.address, this.state.phonenumber, this.state.name, this.state.profileImg, this.state.age, this.state.textt, this.state.password)



                this.setState({
                    errMessage: data.message,
                    errMessages: data.messages,
                    errMessagesx: data.messagesx,
                    errMessagesxz: data.messagesxz,
                    errMessagesxzt: data.messagesxzt,
                    errMessagesxztu: data.messagesxztu,
                    errMessagesxztuk: data.messagesxztuk,
                    errMessagesxztuko: data.messagesxztuko,
                    errMessagesxztukoi: data.messagesxztukoi,
                    errMessagesxztukop: data.messagesxztukop,
                    errM: null
                })

            }
            catch (error) {
                if (error.response) {
                    if (error.response.data) {
                        this.setState({
                            //errMessage: error.response.data.message,
                            errMessage: error.response.data.message,
                            errMessages: error.response.data.messages,
                            errMessagesx: error.response.data.messagesx,
                            errMessagesxz: error.response.data.messagesxz,
                            errMessagesxzt: error.response.data.messagesxzt,
                            errMessagesxztu: error.response.data.messagesxztu,
                            errMessagesxztuk: error.response.data.messagesxztuk,
                            errMessagesxztuko: error.response.data.messagesxztuko,
                            errMessagesxztukoi: error.response.data.messagesxztukoi,
                            errMessagesxztukop: error.response.data.messagesxztukop
                        })

                    }
                }
            }
        }
        else {
            this.setState({
                errM: "Please agree with policy"
            })
        }
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleCheckBox = (event) => {
        this.setState({
            checked: !this.state.checked
        })
        console.log(this.state.checked)
    }
    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
        this.setState({
            files: e.target.files[0]
        })
    }

    render() {

        // console.log(this.state.files)
        const { userInfo } = this.props
        const { profileImg } = this.state
        // console.log(profileImg)

        return (
            <div className=''>
                <Modelpolicy
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                />

                <Navset/>



                <div className="users-container">
                    <scrollbars>
                        <div className='chan'>@2</div>
                        <div className='imgdiv'>
                            <img src={profileImg} alt='' id='img' className='img' />
                        </div>
                        <div className='test'>
                            <p className='Er'>{this.state.errMessagesxztukop}</p>
                            <p className='Er1'>{this.state.errMessage}</p>
                            <p className='Er2'>{this.state.errMessages}</p>
                            <p className='Er3'>{this.state.errMessagesx}</p>
                            <p className='Er4'>{this.state.errMessagesxz}</p>
                            <p className='Er5'>{this.state.errMessagesxzt}</p>
                            <p className='Er6'>{this.state.errMessagesxztu}</p>
                            <p className='Er7'>{this.state.errMessagesxztuk}</p>
                            <p className='Er8'>{this.state.errMessagesxztuko}</p>
                            <p className='Er9'>{this.state.errMessagesxztukoi}</p>
                            <p className='Er10'>{this.state.errM}</p>
                            {/* <p className='Er9'>{this.state.errMessagesxztukop}</p> */}
                            <div><input type='file' id='input' accept='image/*' name='image-upload' onChange={this.imageHandler} /></div>
                            <div className='labeldiv'>
                                <label htmlFor='input' className='image-upload'>
                                    Choose your photo</label>
                            </div>
                            <div >
                                <input onChange={(event) => this.handleOnChangeId(userInfo.id)} hidden value={userInfo.id} disabled type="text" placeholder="id" />
                            </div>
                            <div className='input-container'>
                                <div className='fistname'>
                                    <label className='text_fit'>First Name</label>
                                    <input className='input-fit' onChange={(event) => this.handleOnChangeFirstname(event)} type="text" />
                                </div>
                                <div className='lastname'>
                                    <label className='text-lat'>Last Name</label>
                                    <input className='input-lat' onChange={(event) => this.handleOnChangeLastname(event)} type="text" />
                                </div>
                                <div className='address'>
                                    <label className='text-add'>Address</label>
                                    <input className='input-add' onChange={(event) => this.handleOnChangeAddress(event)} type="text" />
                                </div>
                                <div className='phone'>
                                    <label className='text-pho'>Phone</label>
                                    <input className='input-pho' onChange={(event) => this.handleOnChangePhonenumber(event)} type="text" />
                                </div>
                                <div className='age'>
                                    <label className='text-age'>Age</label>
                                    <input className='input-age' onChange={(event) => this.handleOnChangeAge(event)} type="text" />
                                </div>
                                <div className='select'>
                                    <label className='label-select'>Gender</label>
                                    <Select className='text-select' options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className='policy'>
                                    <i onClick={() => this.handleClick()} className="fab fa-angellist"></i>
                                </div>
                                <div>
                                    <input className='checkedr'
                                        onChange={this.handleCheckBox}
                                        name="check"
                                        value="1"
                                        checked={this.state.checked}
                                        type="checkbox" />
                                    <span className='checkedro'>Confirm policy</span>
                                </div>
                                <div className='descriptSet'>
                                    <i>Enter your current password if you want to update your information</i>
                                </div>
                                <div className='passwordSet'>
                                    <label className='text-pass'>Password</label>
                                    <input className='input-pass' onChange={(event) => this.handleOnChangeSet(event)} type="password" />
                                </div>
                                <p className='text-ter'>Decription</p>
                                <div className='tear'>
                                    <textarea className='te' onChange={(event) => this.handleOnChangeText(event)} rows="5" cols="40" maxlength="100" name="description" />
                                </div>
                                <div>
                                    <button className='buttonSuv' onClick={() => this.handleEdit()}>submit</button>
                                </div>
                            </div>

                        </div>
                    </scrollbars>
                </div>

                {/* <div className='nav2'>
                    online
                </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

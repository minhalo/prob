import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import pic from '../../assets/images/img2.png'
import fs from 'fs'
import * as actions from "../../store/actions";
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modelpolicy from './Modelpolicy';
import tect from '../../assets/images/onl.webp'
import tese from '../../assets/images/offline.jpg'
import created from '../../assets/images/create.png'

import { chatlist, okgr, socket } from '../../services/userService';
import ReactScrollableFeed from 'react-scrollable-feed'
import moment from 'moment'
import like from '../../assets/images/like.webp'
import dislike from '../../assets/images/dislike.jpg'
import Picker from 'emoji-picker-react';
import imoji from '../../assets/images/haha.webp'

import up from '../../assets/images/up.png'

import { retext } from 'retext'
import retextProfanities from 'retext-profanities'





// const file = retext()
//   .use(emoji, {convert: 'encode'})
//   .processSync('I’m going to bed. :zzz:')

// console.log(String(file))




import { getUsers, getEdit, getBox, all, addfriend, refresh, addf, delf, search, req, header, emotion } from '../../services/userService'

// import { getAllUsers } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Modelcreate from './modelcreate';
// import group from '../../services/userService'
import { group, take } from '../../services/userService';
import { getgroups } from 'process';
import Modeluphide from './Modeluphide';
// import { header } from '../../services/userService';

class Chati extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            dove: [],
            isLoading: false,
            mes: '',
            thischeck: false,
            imo: null,
            chooseImo: false,
            emojiu: [],
            iur: false,
            isOpen: false
        };
    }

    handleClick = (idk) => {

        this.setState({
            isOpen: true
        })
    }

    handleHind = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    async componentDidMount() {
        let data = await chatlist(this.props.isokay)
        this.setState({
            dove: data.userData
        })

        let emo = await emotion()
        this.setState({
            emojiu: emo.userData
        })

        // document.getElementById("name").value + 'i'

        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                //console.log("Enter key was pressed. Run function.");
                event.preventDefault();
                // callMyFunction();
                this.handlemes()
                this.setState({
                    thischeck: false
                })
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }


    handlechoose = () => {
        this.setState({
            chooseImo: !this.state.chooseImo
        })
    }

    handlemes = async () => {
        let data = await take(this.props.userInfo.id, this.props.isokay, this.state.mes)
        this.setState({
            thischeck: true
        })
        let check = document.getElementById("name")
        check.value = ''
        let circle = document.querySelector('.listemoju')
        if (this.state.iur === true) {
            circle.style.display = 'none'
        }
    }


    handleOnChangeSet = (event) => {
        this.setState({
            mes: event.target.value
        })
    }


    async componentDidUpdate() {
       
        let circle = document.querySelector('.listemoju')
        if (this.state.iur === false) {
            circle.style.display = 'none'
        }
        else {
            circle.style.display = 'block'
        }

         let data = await chatlist(this.props.isokay)
        this.setState({
            dove:data.userData

        })
        // if (this.state.thischeck === true) {
        //     let datas = await chatlist(this.props.isokay)
        //     this.setState({
        //         dove: datas.userData
        //     })
        // }


    }

    onEmojiClick = async (event, emojiObject) => {
        let dbk = ''
        let obk = dbk.concat('&#x', emojiObject.originalUnified, ';')
        this.setState({
            imo: obk
        })

        let data = await take(this.props.userInfo.id, this.props.isokay, emojiObject.originalUnified)


    };

    setimo = (imo) => {
        let result = this.state.mes.slice(0, this.state.mes.length) + imo + this.state.mes.slice(this.state.mes.length)
        let check = document.getElementById("name")
        check.value = this.state.mes + imo
        this.setState({
            mes: result
        })
        // let checkk = document.getElementById("name")
        // check.value = ''
        
    }

    showdi = () => {
        this.setState({
            iur: !this.state.iur
        })
        console.log(1)
    }


    render() {
        // console.log(this.state.dove)

        return (
            <div className='app5'>
                <Modeluphide
                    isOpen={this.state.isOpen}
                    isHide={this.handleHind}
                    isok1={this.props.userInfo.id}
                    isok2={this.props.isokay}
                />
                <div className='chati' ref={this.chati}>

                    <ReactScrollableFeed>
                        {this.state.dove.map(d =>
                            <div className='cati'>
                                <div className='poci'>
                                    <img className={d.id === this.props.userInfo.id ? 'poirc' : 'poird'} src={d.image} />
                                </div>
                                <div className='abcd'>
                                    <p className={d.id === this.props.userInfo.id ? 'c' : 'd'}>{d.firstName} </p>
                                </div>
                                <div className='timezone'>
                                    <p className={d.id === this.props.userInfo.id ? 'k' : 'g'}> {moment(d.createdAt).format('MMMM Do YYYY, h:mm:ss a')} </p>
                                </div>
                                <div className='mys'>
                                    {d.message.charAt(0) === 'd' ?  <p className={d.id === this.props.userInfo.id ? 'r' : 't'}> <img className='ojs' src={d.image}/></p> :   <p className={d.id === this.props.userInfo.id ? 'r' : 't'}>{d.message} </p>}
                                  
                                    {/* {d.message} */}
                                </div>
                                {/* <div className='iconseri'>
                                    <i className={d.firstName === this.props.userInfo.firstName ? 'likeii' : 'likeiki'}>100</i>
                                    <img className={d.firstName === this.props.userInfo.firstName ? 'likei' : 'likey'} src={like} />
                                    <i className={d.firstName === this.props.userInfo.firstName ? 'likeii' : 'likeik'}>100</i>
                                    <img className={d.firstName === this.props.userInfo.firstName ? 'likei' : 'likeyo'} src={dislike} />

                                </div> */}

                            </div>
                        )}


                    </ReactScrollableFeed>
                </div>
                <div className='listemoju'>
                    {this.state.emojiu.map(d =>

                        <div onClick={() => this.setimo(d.emo)} className='omiy'>{d.emo}</div>
                    )}
                </div>
                <div className='uey'>
                    {/* <Picker onEmojiClick={this.onEmojiClick} /> */}
                    <img onClick={() => this.showdi()} className='ompx' src={imoji} />
                </div>

                <div className='uey1'>
                    {/* <Picker onEmojiClick={this.onEmojiClick} /> */}
                    <img onClick={() => this.handleClick()} className='ompx1' src={up} />
                </div>

                <div className='chiopl'>
                    {/* <div  className='lqp'>
                       <img onClick={() => this.handlechoose()} className='lqp1' src={imoji}/>
                    </div> */}
                    <div className='chat-con'>
                        <input id="name" placeholder='Aa' className='input-chat' max="200" onChange={(event) => this.handleOnChangeSet(event)} type='text' />
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Chati);

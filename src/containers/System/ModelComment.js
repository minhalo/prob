import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { getCheckChangeEmail, getGroup, kdp, logout, listcomment,commenti } from '../../services/userService';
import ReactScrollableFeed from 'react-scrollable-feed'
import { Comment, Form, Header } from 'semantic-ui-react'
import moment from 'moment'


// import './Header.scss';
import { Link } from 'react-router-dom';
import Select from 'react-select'

import { socket } from '../../services/userService';




class ModelComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            datas: [],
            text: '',

        }
    }
    toggle = () => {
        this.props.isHide()
    }

    async componentDidMount() {

    }


    handleComment = async () => {
        let insert = await commenti(this.props.userInfo.id, this.props.ide, this.state.text)
        this.props.handleback()
    }

    handleOnChangeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }



    render() {
        console.log(this.props.ido)
        const { processLogout } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"onj"}
                centered
                size="md"
            >
                {/* <ModalHeader>Comment</ModalHeader> */}
                <ModalBody>

                    <div className='cmts'>
                    <ReactScrollableFeed>
                        <Comment.Group  >

                            <Form reply className='formo'>
                                <textarea className='formo1' placeholder='Text something here' onChange={(event) => this.handleOnChangeText(event)} />

                            </Form>
                            {/* <button onClick={() => this.handleComment()}  className='btn-comment'>Send</button> */}
                            
                                {this.props.ido.map(d =>
                                    <Comment>
                                        <div className='avtarcom' >
                                            <img className='avtarcom1' src={d.image}/>
                                        </div>
                                        <Comment.Content className='avtarcom2'>
                                            <Comment.Author as='a'>{d.firstName}</Comment.Author>
                                            <Comment.Metadata>
                                               {moment(d.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                            </Comment.Metadata>
                                            <Comment.Text>{d.content}</Comment.Text>

                                        </Comment.Content>
                                    </Comment>
                                )}
                            
                        </Comment.Group>
                        </ReactScrollableFeed>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color='primary' onClick={() => this.handleComment()} >Create</Button>
                </ModalFooter>
                
            </Modal>

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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelComment);

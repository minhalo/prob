import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Auth/login.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { activate, all, getCheckChangeEmail, getGroup, kdp, logout } from '../../services/userService';
import Dropzone from 'react-dropzone';

import pdf from '../../assets/images/pdfreal.png'
import jpg from '../../assets/images/jpgreal.png'
import doc from '../../assets/images/docreal.png'
import xls from '../../assets/images/xlsreal.png'
import drag from '../../assets/images/drag.jpg'
import '@react-pdf-viewer/core/lib/styles/index.css';
import FileViewer from 'react-file-viewer';





import './m.scss';


import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

class Modalviewpdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            // pdfContentType: 'application/pdf',
            // urls: URL.createObjectURL(this.props.isIds)
        }
    }

    toggle = () => {
        this.props.isHide()
    }

    base64toBlob = (data) => {
        // Cut the prefix `data:application/pdf;base64` from the raw base 64
        const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);

        const bytes = atob(base64WithoutPrefix);
        let length = bytes.length;
        let out = new Uint8Array(length);

        while (length--) {
            out[length] = bytes.charCodeAt(length);
        }

        return new Blob([out], { type: 'application/pdf' });
    };






    render() {
        // console.log(encodeURI(this.props.isIds))

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"bisode"}
                centered
                size="lg"
            >
                <ModalBody>

                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '550px',
                            width: '760px'
                        }}
                    >

                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                            <div style={{ height: '550px', width: '760px' }}>
                                <Viewer fileUrl={this.props.isIds} />
                            </div>
                        </Worker>
                        {/* <Viewer fileUrl={this.props.isIds} /> */}
                    </div>

                </ModalBody>

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

export default connect(mapStateToProps, mapDispatchToProps)(Modalviewpdf);

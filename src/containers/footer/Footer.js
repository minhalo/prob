import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';

import './Footer.scss';

class Footer extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <div class="containers">
                <div className='telephone'>
                    <div className='telephone1'>
                        <h6 className='body-1'>Hot</h6>
                        <h6 className='body-p'>Private</h6>
                        <h6 className='body-p'>Department</h6>
                    </div>
                    <div className='telephone2'>
                        <h6 className='body-1'>0913924185</h6>
                        <h6 className='body-p'>0819901568</h6>
                        <h6 className='body-p'>0249911444</h6>
                    </div>
                </div>
                <div className='email'>
                    <div className='email1'>
                        <h6 className='body-1'>Duongdoican@gmail.com</h6>
                        <h6 className='body-p'>Anhddgch18611@fpt.edu.vn</h6>
                        <h6 className='body-p'>Hoangminnguyen15072000@gmail.com</h6>
                    </div>
                </div>
                <div className='address'>
                    <div className='email1'>
                        <h6 className='body-1'>C3 Department</h6>
                        <h6 className='body-p'>Nguyen Co Thach</h6>
                        <h6 className='body-p'>Nam Tu Liem - Hanoi</h6>
                        {/* <h6 className='body-p'>Ha Noi</h6> */}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

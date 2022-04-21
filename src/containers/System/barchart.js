import React, { Component } from 'react';
import { connect } from 'react-redux';









import * as actions from "../../store/actions";







import { Charty } from '../../services/userService'

import '../System/m.scss';
import '../System/Setting.scss';

import { Bar } from 'react-chartjs-2'
import { BarController } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


class Barchart extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = this.props

        this.state = {
            datas: [],
            pop: []
        };


    }


    async componentDidMount() {
        let data = await Charty()
        let test = data.userData
        // let result = test.map(({ d }) => d.firstName)
        // let results = test.map(({ d }) => d.pop)

        var results = test.map(function(a) {return a.firstName;});
        var result = test.map(function(a) {return a.pop;});
        this.setState({
            datas:results
        })
        // let results = test.map(({ d }) => d.pop)
        this.setState({
            pop:result
        })

    }
    render() {

        // console.log(this.state.datas)
        return (
            <div className=''>
                <div className='chart'>
                <Bar
                    datasetIdKey='id'
                    width={200}
                    height={100}
                    
                    data={{
                        labels: this.state.datas,
                        datasets: [
                            {
                                id: 1,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 205, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                  ],
                                  borderColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(255, 159, 64)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                    'rgb(54, 162, 235)',
                                    'rgb(153, 102, 255)',
                                    'rgb(201, 203, 207)'
                                  ],
                                  borderWidth: 1,
                                label: 'Post/User of top 10 user',
                                data: this.state.pop,
                            },
                        ],

                    }}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Barchart);

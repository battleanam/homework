import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';


export default function withTimer(WrappedComponent, format) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                time: moment().format(format || 'MMMM Do YYYY, h:mm:ss a')
            };
        }

        componentDidMount() {
            this.timer = setInterval(() => {
                this.setState({
                    time: moment().format(format || 'MMMM Do YYYY, h:mm:ss a')
                })
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        render() {
            return (
                <WrappedComponent time={this.state.time} {...this.props} />
            );
        }
    }
}
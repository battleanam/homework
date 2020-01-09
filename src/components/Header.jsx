import React, { Component } from 'react';
import cn from 'classnames';
import withTimer from './withTimer';

import styles from '../styles/index.scss';
import logo from '../assets/img/logo.png'

export class Header extends Component {
    render() {

        const { time } = this.props;

        return (
            <div className={cn(styles.clearfix, styles.header)}>
                <img src={logo} alt="长沙市政府指挥智慧中心" />
                <span>{time}</span>
            </div>
        );
    }
}

export default withTimer(Header, 'YYYY年M月D日 dddd H:m:s');

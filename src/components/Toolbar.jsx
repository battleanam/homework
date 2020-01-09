import React, { Component } from 'react';
import cn from 'classnames';
import Select from './Select';

import styles from '../styles/index.scss';
import SearchBox from './SearchBox';

export class Toolbar extends Component {
    render() {

        const citys = [
            { label: '市辖区', value: 'shixia' },
            { label: '芙蓉区', value: 'furong' },
        ];

        return (
            <div className={cn(styles.toolbar, styles.clearfix)}>
                <div className={styles.selectGroup}>
                    <Select options={citys} />
                    <span>检测类</span>
                    <Select options={citys} />
                    <span>资源类</span>
                    <Select options={citys} />
                </div>
                <div className={styles.seachBoxWrapper}>
                    <SearchBox />
                </div>
            </div>
        );
    }
}

export default Toolbar;

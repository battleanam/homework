import React, { Component } from 'react';
import cn from 'classnames';
import Select from './Select';

import styles from '../styles/index.scss';
import SearchBox from './SearchBox';

export class Toolbar extends Component {
    render() {

        const [citys, arr1, arr2, arr3] = [
            [
                { label: '市辖区', value: 'shixia' },
                { label: '芙蓉区', value: 'furong' },
            ],
            [
                { label: '气象', value: 'shixia' },
            ],
            [
                { label: '应急机构', value: 'shixia' },
            ],
            [
                { label: '汽车站', value: 'shixia' },
            ]
        ];

        return (
            <div className={cn(styles.toolbar, styles.clearfix)}>
                <div className={styles.selectGroup}>
                    <Select options={citys} />
                    <span>监测类</span>
                    <Select options={arr1} />
                    <span>资源类</span>
                    <Select options={arr2} />
                    <span>监控类</span>
                    <Select options={arr3} />
                </div>
                <div className={styles.seachBoxWrapper}>
                    <SearchBox />
                </div>
            </div>
        );
    }
}

export default Toolbar;

import React, { Component } from 'react';

import styles from '../styles/index.scss';

export class SearchBox extends Component {
    render() {
        return (
            <div className={styles.searchBox}>
                <input type="text" placeholder="请输入查询地址"/>
                <div className={styles.btn}></div>
            </div>
        );
    }
}

export default SearchBox;

import React, { Component } from 'react';
import cn from 'classnames';

import styles from '../styles/index.scss';

export class ListItem extends Component {
    render() {
        const { imgUrl, name, pno, dep } = this.props;
        return (
            <div className={cn(styles.clearfix, styles.listItem)}>
                <img src={imgUrl} alt={'图片加载失败'} />
                <div className={styles.infos}>
                    <span>{`带班领导：${name}`}</span>
                    <span>{`手机：${pno}`}</span>
                    <span>{`单位：${dep}`}</span>
                </div>
            </div>
        );
    }
}

export default ListItem;

import React from 'react';
import cn from 'classnames';

import styles from '../styles/index.scss';

const Tag = (props) => {

    const { type } = props;

    return (
        <div className={cn(styles.tag, styles[type])}>
            {props.children}
        </div>
    );
}

export default Tag;

import React from 'react';
import cn from 'classnames';
import styles from '../styles/index.scss';

const Label = (props) => {

    const { wrapperCls, type, wrapperStyles } = props;

    return (
        <div
            className={cn(wrapperCls, styles.label, styles[type])}
            style={wrapperStyles}
        >
            <span>{props.children}</span>
        </div>
    );
}

export default Label;

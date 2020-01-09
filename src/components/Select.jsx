import React, { Component } from 'react';
import cn from 'classnames';
import styles from '../styles/index.scss';

export class Select extends Component {

    constructor(props) {
        super(props);
        const { value = undefined } = this.props;
        this.state = { value };
    }

    render() {

        const { options = [], onSelectChange = function (e) { console.log(e) } } = this.props;
        const { value } = this.state;

        return (
            <div className={styles.select}>
                <i className={cn(styles.iconfont, styles['icon-pull-copy'])}></i>
                <select
                    value={value}
                    onChange={e => onSelectChange(e.target.value)}
                >
                    {
                        options.map(opt => (
                            <option
                                key={opt.value}
                                value={opt.value}
                            >{opt.label}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
}

export default Select;

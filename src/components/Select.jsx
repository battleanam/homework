import React, { Component } from 'react';
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
            <select
                className={styles.select}
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
        );
    }
}

export default Select;

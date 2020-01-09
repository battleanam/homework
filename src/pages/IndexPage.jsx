import React, { Component } from 'react';
import Header from '../components/Header';
import styles from '../styles/index.scss';
import Toolbar from '../components/Toolbar';
import Content from '../components/Content';

export class IndexPage extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header />
                <Toolbar />
                <Content />
            </div>
        );
    }
}

export default IndexPage;

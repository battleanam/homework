import React, { Component } from 'react';
import cn from 'classnames';

import Tag from '../components/Tag';

import styles from '../styles/index.scss';
import ListItem from './ListItem';
import Label from './Label';

export class Content extends Component {

    componentDidMount() {
        const AMap = window.AMap;
        this.mapApp = new AMap.Map('map_container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 10, //初始化地图层级
            center: [112.931420, 28.235193] //初始化地图中心点
        });
    }


    render() {
        const infos = [
            { bgc: 'warning', title: '信息接收', content: '市辖区将于1月7日巴巴拉拉' },
            { bgc: 'success', title: '信息报送', content: '芙蓉区将于今明两日巴拉巴拉' },
            { bgc: 'error', title: '预警信息', content: '芙蓉区将于今明两日巴拉巴拉' },
        ];

        const zbList = [
            { imgUrl: require('../assets/img/zb1.png'), name: '领导张', pno: '8866655', dep: '应急指挥中心' },
            { imgUrl: require('../assets/img/zb1.png'), name: '领导张', pno: '8866655', dep: '应急指挥中心' },
            { imgUrl: require('../assets/img/zb2.png'), name: '周彦', pno: '18684689680', dep: '长沙警备区' },
            { imgUrl: require('../assets/img/zb2.png'), name: '周彦', pno: '18684689680', dep: '长沙警备区' },
        ];

        return (
            <div className={styles.content}>

                <div id='map_container' className={styles.mapContainer}></div>

                <div className={styles.xx}>
                    {
                        infos.map(info => (
                            <div key={info.bgc} className={cn(styles.xxItem, styles.useEllipsis)}>
                                <Tag type={info.bgc}>{info.title}</Tag>
                                <span>{info.content}</span>
                            </div>
                        ))
                    }
                    <div className={styles.xxFnWrap}>
                        <i className={cn(styles.iconfont, styles['icon-RectangleCopy'])}></i>
                        <i className={cn(styles.iconfont, styles['icon-RectangleCopy1'])}></i>
                    </div>
                </div>
                <div className={styles.zb}>
                    <div className={styles.arrow}></div>
                    <div className={styles.title}>值班人员</div>
                    <div className={styles.line}></div>
                    <div className={styles.list}>
                        <div>
                            <Label
                                wrapperCls={styles.zbLabel}
                                type={'primary'}
                            >地方值班</Label>
                            <ListItem {...zbList[0]} />
                            <ListItem {...zbList[1]} />
                        </div>
                        <div>
                            <Label
                                wrapperCls={styles.zbLabel}
                                type={'secondary'}
                                wrapperStyles={{ left: '-220px' }}
                            >军方值班</Label>
                            <ListItem {...zbList[2]} />
                            <ListItem {...zbList[3]} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;

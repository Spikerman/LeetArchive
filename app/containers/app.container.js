/**
 * Created by chenhao on 11/07/2017.
 */

import React from 'react';
import Search from '../components/search.component';
import Clock from '../components/clock.component';
import SiderDemo from '../components/siderbar.component'
import {Layout, Menu, Icon} from 'antd';

const {Header, Content, Footer, Sider} = Layout;


class AppContainer extends React.Component {
    render() {
        return (
            <Layout>
                <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, collapsible: "true"}}>
                    <div style={{height: '50px'}}>

                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center', minHeight: 600}}>
                            <Search/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}


export default AppContainer

import {
    Layout, Menu, Icon, Dropdown, message, Button, List, Input
  } from 'antd';
import '../index.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const titleList = <List
  size="large"
  bordered
  dataSource={data}
  renderItem={item => (<List.Item><Link to="/about">{item}</Link></List.Item>)}
  />

  const addTitle = <Input placeholder="Basic usage" />

  export default class App extends Component {
    state = {
      collapsed: false,
      titles: [],
      isAddTitle: false
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    handleButtonClick = (e) => {
      message.info('Click on left button.');
      console.log('click left button', e);
    }
    
    handleMenuClick = (e) => {
      message.info('Click on menu item.');
      console.log('click', e);
      this.setState({isAddTitle:true});
    }

    render() {
      const rootMenu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />新增分类</Menu.Item>
        </Menu>
      );

      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={296}
          >
            <div className="logo" />
            <Menu mode="inline" defaultOpenKeys="sub1">
              <SubMenu
                key="sub1"
                title={<span><Icon type="folder" /><span>知识库</span>
                <span>
                  <Dropdown overlay={rootMenu} >
                      <Button size='small' style={{ marginLeft: 100, borderStyle: 'none'}}>
                          <Icon type="ellipsis" />
                      </Button>
                  </Dropdown></span></span>}
              >
                <Menu.Item key="3">{<span><Icon type="file-text" /><span>User</span></span>}</Menu.Item>
                <Menu.Item key="4">{<span><Icon type="file-text" /><span>hrhr</span></span>}</Menu.Item>
                <Menu.Item key="5">{<span><Icon type="file-text" /><span>hrhr1</span></span>}</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
               {this.state.isAddTitle ? addTitle : titleList}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      )
    }
  }
  

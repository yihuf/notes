import {
    Layout, Menu, Breadcrumb, Icon, Dropdown, message, Button, List, AutoComplete
  } from 'antd';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CreateNotes from './createNotes';

const history = createBrowserHistory();



class Inbox extends React.Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

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

  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
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
            <Menu mode="horizontal" defaultOpenKeys="sub1">
              <SubMenu
                key="sub1"
                title={<span><Icon type="folder" /><span>知识库</span>
                <span>
                  <Dropdown overlay={rootMenu} >
                      <Button size='small' style={{ marginLeft: 152, borderStyle: 'none'}}>
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
            <Header style={{ background: '#fff', padding: 0, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <Button type="primary" size="large" style={{ float: "right" }}>
                    新增文章
                </Button>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <List
      size="large"
      bordered
      dataSource={data}
      renderItem={item => (<List.Item><Link to="/about">{item}</Link></List.Item>)}
    />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  
ReactDOM.render(  (<Router history={history}>
      <Route exact path="/" component={SiderDemo} />
      <Route path="/about" component={CreateNotes} />
      <Route path="/inbox" component={Inbox} />

</Router>), document.getElementById('root'));


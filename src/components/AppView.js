import {
    Layout, Menu, Icon, Dropdown, message, Button, List
  } from 'antd';
import '../index.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TopTitles from '../containers/TopTitles'


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

  export default class App extends Component {
    componentDidMount() {
      const { get_all_top_titles, change_is_add_top_titles_state, change_is_del_top_titles_state } = this.props;
      get_all_top_titles()
      change_is_add_top_titles_state(false)
      change_is_del_top_titles_state(false)
    }

    state = {
      collapsed: false,
      titles: []
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
      if (e.key === '1') {
        this.props.change_is_add_top_titles_state(true);
      } else if (e.key === '2') {
        this.props.change_is_del_top_titles_state(true);
      }
    }

    render() {
      const { all_top_titles, is_add_top_titles_state, is_del_top_titles_state } = this.props;

      const rootMenu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />新增分类</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />删除分类</Menu.Item>
        </Menu>
      );

      let items = []
      if (all_top_titles !== undefined) {
        for (let item of all_top_titles) {
          console.log(item)
          items.push(<Menu.Item key={item.uuid}>{<span><Icon type="file-text" /><span>{item.name}</span></span>}</Menu.Item>)
        }
      }

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
               {items}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
               {(is_add_top_titles_state||is_del_top_titles_state) ? <TopTitles /> : titleList}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      )
    }
  }
  

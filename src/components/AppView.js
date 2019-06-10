import {
    Layout, Menu, Icon, Dropdown, message, Button, List, Table, Divider, Tag
  } from 'antd';
import '../index.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AddTopTitles from '../containers/AddTopTitles'
import DelTopTitles from '../containers/DelTopTitles'
import AddContent from '../containers/AddContent'
import * as Constant from './Constant'

  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
/*
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
*/

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  //render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '修改日期',
  dataIndex: 'modifyDate',
  key: 'modifyDate',
}];

const data = [{
  key: '1',
  title: 'John Brown',
  modifyDate: 32
}];

  export default class App extends Component {
    componentDidMount() {
      const { get_all_top_titles, change_main_content_state } = this.props;
      get_all_top_titles()
      change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
    }

    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
    
    handleMenuClick = (e) => {
      console.log('click', e);
      if (e.key === '1') {
        this.props.change_main_content_state(Constant.ADD_TOP_TITLES_STATE);
      } else if (e.key === '2') {
        this.props.change_main_content_state(Constant.DEL_TOP_TITLES_STATE);
      }
    }

    onAddContentClick = () => {
      this.props.change_main_content_state(Constant.ADD_CONTENT_STATE);
    }

    onRowAction = () => {
      return {
        onClick: (event) => {console.log(event.target)},       // 点击行
        onDoubleClick: (event) => {},
        onContextMenu: (event) => {},
        onMouseEnter: (event) => {},  // 鼠标移入行
        onMouseLeave: (event) => {}
      };
    }

    render() {
      const { all_top_titles, main_content_state } = this.props;

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

      let comp = null
      switch (main_content_state) {
        case Constant.ADD_TOP_TITLES_STATE:
          comp = <AddTopTitles />
          break
        case Constant.SHOW_MAIN_CONTENT_STATE:
          comp = <Table columns={columns} dataSource={data} onRow={this.onRowAction}/>
          break
        case Constant.DEL_TOP_TITLES_STATE:
          comp = <DelTopTitles />
          break
        case Constant.ADD_CONTENT_STATE:
          comp = <AddContent />
          break
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
              <Button
                onClick={this.onAddContentClick}
                type="primary"
                style={{marginLeft:20,
                display:(main_content_state === Constant.SHOW_MAIN_CONTENT_STATE) ? 'inline':'none'
                }}
              >
                新增文章
              </Button>
            </Header>
            <Content style={{ margin: '0 16px' }}>
               {comp}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      )
    }
  }
  

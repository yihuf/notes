import '../index.css';
import React from 'react'
import {
    Input, Button
  } from 'antd';

import * as Constant from './Constant'

  
  export default class AddTopTitlesView extends React.Component {
    state = {
      topTitle:""
    }

    onChange = (e) => {
      const { value } = e.target
      console.log(value)
      this.setState({topTitle:value})
     }

    onAddClick = (e) => {
        console.log(e)
        const { get_all_top_titles, add_top_titles, change_main_content_state } = this.props
        add_top_titles(
          {
              "uuid":"000-000-000-000",
              "parent_uuid":"000-000-000-000",
              "name":this.state.topTitle,
              "status":0
          }
        )

        change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
      }

    onCancelClick = (e) => {
      this.props.change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
    }

    render() {
      return (
            <div>
            <Input value={this.state.topTitle} onChange={this.onChange} placeholder="TopTitle" />
            <Button
              onClick={this.onAddClick}
              type="primary"
              style={{marginRight:20}}
            >
              Submit
            </Button>
            <Button
              onClick={this.onCancelClick}
              type="primary"
            >
              Cancel
            </Button>
            </div>
      );
    }
  }

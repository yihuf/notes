import '../index.css';
import React from 'react'
import {
    Input, Button
  } from 'antd';


  
  export default class TopTitlesView extends React.Component {
    constructor(){
      super()
      this.state = {
        topTitle:""
      }
    }

    onChange = (e) => {
      const { value } = e.target
      console.log(value)
      this.setState({topTitle:value})
     }

    onClick = (e) => {
        console.log(e)
        const { get_all_top_titles, add_top_titles, change_is_add_top_titles_state } = this.props
        add_top_titles(
          {
              "uuid":"000-000-000-000",
              "parent_uuid":"000-000-000-000",
              "name":this.state.topTitle,
              "status":0
          }
        )
        get_all_top_titles()
        change_is_add_top_titles_state(false)
     }
    render() {
      return (
            <div>
            <Input onChange={this.onChange} placeholder="TopTitle" />
            <Button
              onClick={this.onClick}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            </div>
      );
    }
  }

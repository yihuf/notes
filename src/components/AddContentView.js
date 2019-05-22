import '../index.css';
import React from 'react'
import {
    Input, Button, Select
} from 'antd';

import * as Constant from './Constant'

const Option = Select.Option;

export default class AddContentView extends React.Component {
  state = {
    parent_uuid: "",
    title: "",
    content: ""
  }

  handleChange = (value) => {
     console.log(value)
     this.setState({parent_uuid:value})
  }

  onTitleChange = (e) => {
    const { value } = e.target
    console.log(value)
    this.setState({title:value})
  }

   onContentChange = (e) => {
    const { value } = e.target
    console.log(value)
    this.setState({content:value})
   }

  onAddClick = (e) => {
      const { add_content, all_top_titles, change_main_content_state } = this.props
      let uuid = this.state.parent_uuid
      if (uuid === "") {
        uuid = all_top_titles[0].uuid
      }
      add_content(
        {
            "parent_uuid": uuid,
            "name":this.state.title,
            "content":this.state.content
        }
      )

      change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
    }

  onCancelClick = (e) => {
    this.props.change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
  }

  render() {
    const { all_top_titles } = this.props;
    return (
      <div>
        <Select
          defaultValue={all_top_titles[0].name}
          style={{ width: 120 }}
          onChange={this.handleChange}
        >
          {all_top_titles.map(item => <Option key={item.uuid}>{item.name}</Option>)}
        </Select>
        <Input value={this.state.title} onChange={this.onTitleChange} placeholder="Title" />
        <Input.TextArea rows={4} autosize={{ minRows: 8 }} onChange={this.onContentChange} />
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

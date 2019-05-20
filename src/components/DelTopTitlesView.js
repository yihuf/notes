import { Checkbox, Row, Col, Button } from 'antd';
import React from 'react';
import * as Constant from './Constant'



export default class DelTopTitlesView extends React.Component {
  state = {
    checkedList: []
  };

  onChange = (checkedList) => {
    console.log(checkedList)
    this.setState({
      checkedList
    });
  }

  onDelClick = (e) => {
     console.log(this.state.checkedList)
     for (let uuid of this.state.checkedList) {
       this.props.del_top_titles(uuid)
     }
     this.props.change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
  }

  onCancelClick = () => {
    this.props.change_main_content_state(Constant.SHOW_MAIN_CONTENT_STATE)
  }

  render() {
    const { all_top_titles } = this.props
    console.log(all_top_titles)
    let cols = []
    for (let item of all_top_titles) {
      cols.push(<Col span={8}><Checkbox value={item.uuid}>{item.name}</Checkbox></Col>)
    }


    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        </div>
        <br />
        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
          <Row>
             {cols}
          </Row>
        </Checkbox.Group>
        <Button
          onClick={this.onDelClick}
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
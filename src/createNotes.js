import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const createNotes = (
   <div>
   <div style={{ marginBottom: 16 }}>
       <Input addonBefore="标题"/>
   </div>
   <div>
     <TextArea placeholder="请输入内容" autosize={{ minRows: 20, maxRows: 100 }} />
   </div>
   <div>
    <Button type="primary" style={{ margin: 16 }}>提交</Button>
    <Button type="primary" style={{ margin: 16 }}>取消</Button>
   </div>
   </div>
   );

export default class CreateNotes extends React.Component{


    render() {
      console.log('helloworld')
      return createNotes
    }
}
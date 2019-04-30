import React, { Component } from 'react' // 引入react
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router' // 引入react路由


import reducers from '../reducers/index.js'
import  App from '../containers/App'
import  CreateNotes from '../containers/createNotes'
import  Inbox from '../containers/Inbox'

const store = createStore(reducers);

export default class RouterIndex extends Component {
    render() {
      return ( 
          <Provider store={store}>
            <BrowserRouter>
              <App path="/App" component={App}>
                <Route path="/App/home" component={CreateNotes} />
                <Route path="/App/another" component={Inbox} />
              </App>
            </BrowserRouter>
          </Provider>
      )
    }
  }

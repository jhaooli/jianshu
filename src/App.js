import React, { Component } from 'react';
import './index.css';
import Header from './common/header';
import './statics/iconfont/iconfont';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div>
        <Header />
          <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
          </div>
          </BrowserRouter>
      </div>
      </Provider>
    )
  }
}



export default App;

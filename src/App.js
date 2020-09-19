import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';

const store = ConfigureStore();
class App extends Component {
  
  render(){
  return (
    <Provider store={store}>
     <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
};
}

export default App;

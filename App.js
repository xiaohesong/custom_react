import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from './src/MainLayout'
import routes from './src/routes';
import "./src/stylesheets/css/Content.css"

class App extends Component {
  render() {
    return (<Router>
      <MainLayout>
        <Switch>
          {
            routes.map((item, i) => {
              return (<Route exact key={i} path={`${item.path}`} component={item.component}/>)
            })
          }
        </Switch>
      </MainLayout>
    </Router>)
  }

}

export default App

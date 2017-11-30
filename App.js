import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from './src/MainLayout'
import routes from './src/routes'

class App extends Component {
  render() {
    return (<Router>
      <Switch>
        <MainLayout>
          {
            routes.forEach((item, i) => {
              return (<Route exact="exact" key={i} path={`${item.path}`} component={item.component}/>)
            })
          }
        </MainLayout>
      </Switch>
    </Router>)
  }

}

export default App

import logo from './logo.svg';
import Get from './component/Get';
import Insert from './component/Insert';
import Update from './component/Update';
import Admin from './component/Admin';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/get/:id" component={Get}/>
      <Route path="/insert" component={Insert}/>
      <Route path="/update" component={Update}/>
      <Route path="/Admin" component={Admin}/>
    </div>
    </Router>
  );
}

export default App;

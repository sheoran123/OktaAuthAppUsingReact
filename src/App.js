import './App.css';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Staff from './Components/pages/Staff'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/staff" exact={true} component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;

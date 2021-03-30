import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Style
import './App.css'
import Navbar from './components/Navbar';

// Components
import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import CashCollege from './pages/projects/CashCollege';
import Drunk from './pages/projects/Drunk';
import HCaptcha from './pages/projects/HCaptcha';
import Soxada from './pages/projects/Soxada';
// import Navbar from './components/Navbar';

class App extends Component {

    componentDidMount() {
      document.querySelector('.preloader').style.visibility = "hidden"
    }

    render() {
        const App = () => (
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/projects/soxada' component={Soxada} />
              <Route exact path='/projects/hcaptcha' component={HCaptcha} />
              <Route exact path='/projects/drunk' component={Drunk} />
              <Route exact path='/projects/cashcollege' component={CashCollege} />
            </Switch>
          </div>
        )
        return (
          <Switch>
            <>
                <Navbar />
                <App/>
            </>
          </Switch>
        );
      }
    }
    
    export default App;
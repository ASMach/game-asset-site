import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './Navigation';
import Footer from "./Footer";

import Home from './Pages/Home';
import Middleware from './Pages/Middleware';
import Games from './Pages/Games';
import Support from './Pages/Support';
import About from './Pages/About';

import * as eventKeys from './tabKeys';

function App() {
  return (
    <div className="App">
<Router>
        <Navigation />
        < br />
           < br />
           < br />
           < br />
           < br />
           < br />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/middleware" exact component={() => <Middleware key={eventKeys.UNREAL}/>} />
          <Route path="/games" exact component={() => <Games />} />
          <Route path="/support" exact component={() => <Support />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './Navigation';
import Footer from "./Footer";

import Home from './Pages/Home';
import Games from './Pages/Games';
import Support from './Pages/Support';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
<Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
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

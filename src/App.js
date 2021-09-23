import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './compoments/Navbar';
import About from './compoments/About';
import Contact from './compoments/Contact';
import Home from './compoments/Home';
import NoteState from './context/Notestate';
import Authstate from './context/Authstate';
import Login from './compoments/Login';
import Signup from './compoments/Signup';

function App() {
  return (

    <Authstate>
      <NoteState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/about"><About /></Route>
              <Route exact path="/contact"><Contact /></Route>
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/signup"><Signup /></Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </Authstate>

  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './compoments/Navbar';
import About from './compoments/About';
import Contact from './compoments/Contact';
import Home from './compoments/Home';
import NoteState from './context/Notestate';

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/contact"><Contact /></Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;

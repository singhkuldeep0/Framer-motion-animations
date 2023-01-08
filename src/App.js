import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Animate from './components/AnimateProps/Animate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Animate/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

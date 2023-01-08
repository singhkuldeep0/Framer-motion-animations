import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Index from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Index/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

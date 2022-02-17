import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'src/route';
import RenderRouter from './RenderRouter';
import interceptors from '../../utils/interceptors';
import '../../apis';
import './App.css'
interceptors();

function App() {
 
  return (
    <div className="App">
      <Router basename={'/'}>
        <RenderRouter routes={routes} />
      </Router>
    </div>
  )
}

export default App

import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom';
import Favourites from './pages/Favourites';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/favourites' element={<Favourites/>}/>
    </Routes>
  );
}

export default App;


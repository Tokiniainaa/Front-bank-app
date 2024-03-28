import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../Pages/NotFound.jsx';
import Home from '../Pages/Home/Home.jsx';

function App() {
  return (
<Router>
  <Routes>
    <Route exact path='/*' element={<NotFound/>}/>
    <Route exact path='/' element={<Home/>}></Route>
  </Routes>
</Router>
  );
}

export default App;

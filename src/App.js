import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { Edit } from './components/Edit';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit_user/:id' element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;

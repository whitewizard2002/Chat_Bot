import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/user/login';
import RegisterPage from './pages/user/register';
import ChatPage from './pages/user/chat';
import AdminPage from './pages/admin/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path="Login" index element={<LoginPage/>}/>
          <Route path='Register' element={<RegisterPage/>}/>
          <Route path='Chat' element={<ChatPage/>}/>
          <Route path='Admin' element={<AdminPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;

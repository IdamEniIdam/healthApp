import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/ForgotPassword';
import NoPageFound from './pages/NopageFound/NotFoundPage';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Suspense
    fallback={
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
      </div>
    }
  >
    <ToastContainer />
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/over-view" element={<PrivateRoute><Home /></PrivateRoute>}/>
          <Route path="/*" element={<NoPageFound />} />
        </Routes>
      </Router>
     
     </Suspense>
  );
}

export default App;

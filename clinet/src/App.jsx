import React, { useContext, useEffect } from 'react';
import { UserContext } from './Components/Contexts/UserContext';
import Footer from './Components/Views/Footer';
import Header from './Components/Views/Header';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Signin from './Components/Pages/SignIN/Signin';
// import LogSign from './Components/Pages/LOGSIN/LogSign';
import Answer from './Components/Pages/Answer/Answer'
import NewQuestion from './Components/Pages/Question/NewQuestion';
import Login from './Components/Pages/LogIN/Login';
import NotFound from './Components/Pages/404notfound/NotFound';

const App = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const checkLoggedIn = async () => {

    //check if token already exists in localStorage
    let token = localStorage.getItem('auth-token');
    if (token === null) {

      //token not in localStorage then set auth token empty
      localStorage.setItem('auth-token', '');
      token = '';
    } else {

      //if token exists in localStorage then use auth to verify token and get user info
      const userRes = await axios.get('http://localhost:4000/api/users', {
        headers: { 'x-auth-token': token }
      });

      //set the global state with user info
      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name
        }
      })
    }
  }

  const logout = () => {

    //set global state to undefined will logout the user
    setUserData({
      token: undefined,
      user: undefined,
    });

    //resetting localStorage 
    localStorage.setItem('auth-token', '');
    navigate('/login');
  };

  useEffect(() => {
    //check if the user is logged in
    checkLoggedIn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header log={logout} />
      <Routes>
      {/* <Route path="/logsin" element={<LogSign />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/newquestion" element={<NewQuestion />} />
        <Route path="/answer/:id" element={<Answer />} />
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
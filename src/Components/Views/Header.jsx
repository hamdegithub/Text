import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { UserContext } from '../Contexts/UserContext';

// Importing Image
import logo from '../Resources/logo.png';

const Header = ({ log }) => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();

    const question = () => {
      navigate('/login');
    }

    return (
        <header className='navbar-header'>
<nav className="navbar navbar-expand-lg bg-white">
  <div className="container">
    <div className="left">
    <Link to="/" className="navbar-brand"><img src={logo} className="wauto m-0" alt="Evangadi" /></Link>
</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-black">☰</span>
    </button>
<div className="right">
    <div className="collapse navbar-collapse" id="navbarText">

      <span className="navbar-text">
      <ul className="navbar-nav me-auto mb-lg-0 lists">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page"><p className="righ">Home</p></Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link mx-2 righ" ><p className="righ">How it works</p></Link>
        </li>
        <li className="nav-item lool">
        <button className='btn btn-primary px-5' onClick={!userData?.user ? question : log}>{!userData?.user ? "SIGNIN" : "LOGOUT"}</button>
          </li>
      </ul>
      </span>
    </div>
    </div>
  </div>
</nav>
        </header>
    )
}

export default Header;
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import Login from "../LogIN/Login";
import SignUp from "../SignIN/Signin";
import "./logsin.css"
function SignIn() {
  const [userData, setUserData] = useContext(UserContext);
  const [isLogIn, setLogIn] = useState(true);
  const [isLogIn2, setLogIn2] = useState(false);
  const navigate = useNavigate();

  const showForgot = (e) => {
    e.preventDefault();
    setLogIn2(true);
  };

  const showSignIn = (e) => {
    e.preventDefault();
    setLogIn(true);
    setLogIn2(false);
  };
  const showSignUp = (e) => {
    e.preventDefault();
    setLogIn(false);
    setLogIn2(false);
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user]);

  return (
    <section id="home">
      <div className="slide-home">
        <div className="slide-item">
          <div className="container">
            <div className="row hero-padd">
              <div className="col-md-6 col-12 col-sm-6">
                <div className="authfy-login">
                  {isLogIn ? (
                    <Login showSignUp={showSignUp} showForgot={showForgot} />
                  ) : (
                    <SignUp showSignIn={showSignIn} />
                  )}
                </div>
              </div>

              <div className="col-md-6 col-12 col-sm-6">
                <div className="padd-text fadeInLeft">
                  <small className="small-text">About</small>
                  <h2 className="title-h2">Evangadi Networks</h2>
                  <p className="font-p mg-bt-30">
                    No matter what stage of life you are in, whether you’re just
                    starting elementary school or being promoted to CEO of a
                    Fortune 500 company, you have much to offer to those who are
                    trying to follow in your footsteps.
                  </p>
                  <p className="font-p mg-bt-30">
                    Wheather you are willing to share your knowledge or you are
                    just looking to meet mentors of your own, please start by
                    joining the network here.
                  </p>
                  <a href="#" className="btn btn-blue">
                    How it works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

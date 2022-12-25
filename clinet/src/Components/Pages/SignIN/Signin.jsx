import React, { useContext, useEffect, useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../Contexts/UserContext';
import axios from 'axios';
import About from '../../Views/About';

const Signin = () => {
  const [icon, setIcon] = React.useState(true);
  const [onShow, setOnShow] = React.useState("password");
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [fname, setF] = useState("");
  const [lname, setL] = useState("");
  const [Usern, setUN] = useState("");
  const navigate = useNavigate();

  const show = () => {
    if (onShow === "password") {
      setOnShow("text");
      setIcon(false);
    } else {
      setIcon(true);
      setOnShow("password");
    }
  };

  const handleChange = () => {
    setForm({
      ...form,
      email: email,
      password: pass,
      Username: Usern,
      Firstname: fname,
      Lastname: lname,
    });
  };
  // console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const signRes = await axios.post("http://localhost:4000/api/users/", {
        userName: Usern,
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
      });
      // console.log(signRes);
      //update global state with response from backend(user-info)
      setUserData({
        token: signRes.data.token,
        user: signRes.data.user,
      });
      // console.log(userData);

      //set localStorage with the token
      localStorage.setItem("auth-token", signRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <body className="login">
      <div className="left2 me-5 col-lg-5">
        <nav className="sup2">
          <h5 className="aa text-center">Join the Network</h5>
          <form className="form2">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-warning stt">
                Sign IN
              </Link>
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="overflow-visible form-control2 mb-2"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
                handleChange();
              }}
            ></input>
            <div className="d-flex">
              <input
                type="text"
                placeholder="First Name"
                className="overflow-visible form-control2 mb-2 me-2"
                value={fname}
                onChange={(e) => {
                  setF(e.target.value);
                  handleChange();
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="overflow-visible form-control2 mb-2"
                value={lname}
                onChange={(e) => {
                  setL(e.target.value);
                  handleChange();
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="overflow-visible form-control2 pass mt-2 me-2"
              value={Usern}
              onChange={(e) => {
                setUN(e.target.value);
                handleChange();
              }}
            />
            <div className="d-flex mt-4">
              <input
                type={onShow}
                placeholder="Password"
                className="overflow-visible form-control2 pass"
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value);
                  handleChange();
                }}
              ></input>
              {icon ? (
                <VisibilityIcon onClick={show} />
              ) : (
                <VisibilityOffIcon onClick={show} />
              )}
              <br />
            </div>
            <center>
            <button
              className="btn btn-primary mt-4 lecy px-5 py-2"
              type="submit"
              onClick={handleSubmit}
            >
              Agree and Join
            </button>
            </center>
            <br />
            <p className="text-center">
              I agree to the{" "}
              <Link to="/signup" className="text-warning stt2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/signup" className="text-warning stt2">
                terms of service
              </Link>
            </p>
          </form>
        </nav>
      </div>

      <div className='right'>
        <About />
      </div>
    </body>
  );
};

export default Signin;
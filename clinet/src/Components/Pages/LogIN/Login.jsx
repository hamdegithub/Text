import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import Axios from "../../../Axios";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Login.css';
import About from "../../Views/About";

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [form, setForm] = useState({});
  const [icon, setIcon] = React.useState(true);
  const [onShow, setOnShow] = React.useState("password");

  const handleChange = () => {
    setForm({ ...form, email: email, password: pass });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post("/api/users/login", {
        email: email,
        password: pass,
      });
// console.log(loginRes)
      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        config: {
          headers: { "x-auth-token": loginRes.data.token },
        },
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("Error :" + err.response.data.msg);
      alert("Error :" + err.response.data.msg);
    }
  };

  const show = () => {
    if (onShow === "password") {
      setOnShow("text");
      setIcon(false);
    } else {
      setIcon(true);
      setOnShow("password");
    }
  };

  // const animateout = () => {
    // e.preventDefault();
    // -animation
// $(".header").click(function() {
//     $(".list").animate({ width: "300px" }, 5000),
//         animate({ color: "white" }, 1000),
//         animate({ backgroundColor: "black" }, 1000),
//         animate({ fontSize: "3em" }, 5000)
// });

// $(".anim").click(() => {
//   $(".ffall").animate({ width: "300px" }, 1);
// })

  // }

  return (
    <body className="login">
      <div className="left pb-5 me-5 col-lg-5">
        <nav className="sup">
          <div className="ffall">
          <h5 className="aa text-center">Join the Network</h5>
          <form className="form">
            <p className="text-center">
              Don't Already have an account?{" "}
              <Link to="/signin" className="text-warning stt">
                Create a new account
              </Link>
              {/* <c className="text-warning stt border-0 bg-white anim" onClick={animateout()}>Create a new account</c> */}
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="overflow-visible form-control mb-2"
              value={email}
              onChange={(e) => {
                setemail(e.target.value)
                handleChange();
              }}
            ></input>
            <div className="d-flex mt-4">
              <input
                type={onShow}
                placeholder="Password"
                className="overflow-visible form-control pass"
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value)
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
            <center className="mt-4">
            <button
              className="rounded-3 py-2 px-5 formbtn text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            </center>
            <br />
            <p className="text-center">
              I agree to the{" "}
              <Link to="/signup" className="text-warning stt">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/signup" className="text-warning stt">
                terms of service
              </Link>
            </p>
          </form>
          </div>
        </nav>
      </div>
      <div className="right">
        <About />
      </div>
    </body>
  );
}

export default Login;

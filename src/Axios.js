import axios from "axios";

const Axios = () => {
  return axios.create({
    baseURL: "https://back-uqt1.onrender.com/", // the url of our server
  });
};

export default Axios;

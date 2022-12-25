import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import images from '../../Resources/images.jfif';

const NotFound = () => {
    const [naver, setNaver] = React.useState('');
    const navigate = useNavigate();

const Basket = () => {
    navigate(`/${naver}`);
}
  return (
    <div className='Not'>
        <h1 className='text-center fw-bolder fs-1'>OOP'S 404 Page Not FOUND</h1>
        <center><img src={images} alt="OOPS" className='w-50 vh-100 my-5' /></center>
        
        <h3 className='text-center fw-bolder fs-4'>The Page you are looking for can't be found.</h3>
        <p  className='text-center fw-bolder fs-5 my-4'>Please Right where do you want to go Below</p>
        <center className="SAS">
        <input type="text" className='mb-3 rounded-3 shadow px-5 py-2 border-1 input mb-4' value={naver} onChange={e => setNaver(e.target.value)} />
        <button className='btn btn-primary rounded-3 mx-4 mb-2' onClick={Basket}>Navigate</button>
        </center>
    </div>
  )
}

export default NotFound;
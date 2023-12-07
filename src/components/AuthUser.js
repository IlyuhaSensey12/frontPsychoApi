import React, { useState } from 'react';
import axios from 'axios';

export default function AuthUser() {

    localStorage.clear();
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function Back(){
        window.location.replace('/');
    }

    const Login = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
                email,
                password
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.replace('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };


  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <div style={{width: '25%'}}>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Почта" aria-label="Почта" aria-describedby="basic-addon1"   
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Пароль" aria-label="Пароль" aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group mb-3 justify-content-center align-items-center">
          <button className='btn btn-light me-3 border rounded-3' onClick={Back}>Назад</button>
          <button className='btn btn-light me-3 border rounded-3' onClick={Login}>Войти</button> 
          </div>
        </div>
    </div>
  )
}

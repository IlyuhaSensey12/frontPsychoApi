import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function DoctorReg() {

    const [name,setName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [about,setAbout] = useState('');

    async function registration(event) 
    {
    event.preventDefault();
    try
    {
      await axios.post("http://localhost:8081/api/v1/auth/registerPsycho",
          {
            firstname: name,
            lastname: lastname,
            password: password,
            city: city,
            email: email,
            phone: phone,
            about: about
          });
      alert("User Registation Successfully");
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setCity('');
      setPhone('');
      setAbout('');
      window.location.replace('/');
    }
    catch(err)
    {
      alert("User Registation Failed");
    }
    }
    
    function Back()
    {
    window.location.replace('/');
    }
    
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
          <div style={{width: '25%'}}>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Ваше имя" aria-label="Ваше имя" aria-describedby="basic-addon1"   
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Фамилия" aria-label="Фамилия" aria-describedby="basic-addon1"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Почта" aria-label="Почта" aria-describedby="basic-addon1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Город" aria-label="Город" aria-describedby="basic-addon1"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Телефон" aria-label="Телефон" aria-describedby="basic-addon1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Пароль" aria-label="Пароль" aria-describedby="basic-addon1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Раскажите про себя" aria-label="Раскажите про себя" aria-describedby="basic-addon1"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          </div>
          <div className="input-group mb-3 justify-content-center align-items-center">
          <button className='btn btn-light me-3 border rounded-3' onClick={Back}>Назад</button>
          <button className='btn btn-light border rounded-3' onClick={registration}>Регистрация</button>  
          </div>
          </div>
        </div>
        )
}

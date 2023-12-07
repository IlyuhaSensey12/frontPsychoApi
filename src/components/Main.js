import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Main() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/showAll');
        setDoctors(response.data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    }
    fetchStudents();
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-start mt-5' style={{height: '100vh'}}>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom rounded-5" style={{ boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.9)'}}>
      <ul className="nav nav-pills">
        <li className="nav-item me-5 rounded-3"><a href="/" className="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>Главная</a></li>
        <li className="nav-item me-5 rounded-3"><a href="/" className="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>Тест</a></li>
        <li className="nav-item me-5 rounded-3"><a href="/FAQ" className="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>FAQ</a></li>
        <li className="nav-item me-5 rounded-3"><a href="/Blog" className="nav-link text-white" style={{color:'#488282',fontWeight:'bold'}}>Блог</a></li>
        <li className="nav-item me-5 bg-white rounded-3"><a href="/Registration" className="nav-link" aria-current="page" style={{color:'#488282',fontWeight:'bold'}}>Регистрация</a></li>
        <li className="nav-item me-5 bg-white rounded-3"><a href="/Auth" className="nav-link" aria-current="page" style={{color:'#488282',fontWeight:'bold'}}>Вход</a></li>
      </ul>
    </header>
      <div className="container" style={{ margin: '0', padding: '0' }}>
        <h1 className="header">Наши специалисты</h1>
        <div className="row">
          {doctors.map((doctor) => (
              <div key={doctor.id} className="col-lg-4 mb-4">
                <div className="card" style={{
                  backgroundColor: 'cadetblue',
                  borderRadius: '8px',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                }}>
                  <div className="card-body">
                    <h5 className="card-title">{doctor.firstname} {doctor.lastname}</h5>
                    <p className="card-text">
                      <strong>Телефон:</strong> {doctor.phone}<br />
                      <strong>Почта:</strong> {doctor.email}<br />
                      <strong>Опыт работы и описание:</strong> {doctor.about}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
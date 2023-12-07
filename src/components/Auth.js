import React from 'react'

export default function Auth() {

    function Back()
    {
    window.location.replace('/');
    }

    function User()
    {
    window.location.replace('/AuthUser');
    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
         <div style={{width: '25%'}}>
         <div className="input-group mb-3 justify-content-center align-items-center">
          <button className='btn btn-light border rounded me-3' onClick={Back}>Назад</button>
          <button className='btn btn-light border rounded me-3'>Доктор</button>
          <button className='btn btn-light border rounded' onClick={User}>Пользователь</button>    
          </div>
         </div>
    </div>
  )
}

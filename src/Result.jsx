import React from 'react'
import './App.css'

function Result() {
  return (
    <>
    <div className="row p-5" id="result">
      <div className="col-md-1 col-sm-0"></div>
      <div className="col-md-10 d-flex justify-content-center align-items-center">
      <div className="card text-center bmi">
      <div className="card-body">
        <img src={img} alt="no-img" height="400px" className="card-img-top" style={{width:'300px'}} />
        <h1 className='text-light mt-3'>{bmi}
        <span style={{fontSize:'18px'}}>  Kg/m²</span></h1>
        <h2 className='text-light fs-3 my-3'>Your BMI is {bmiCondition}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-light">Healthy BMI range : 18.5 Kg/m² - 25 Kg/m²</li>
            <li className="list-group-item">Better Health</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <button className='btn' style={{backgroundColor:'bisque',height:'50px',width:'35%'}} onClick={reset}>Try Again</button>
        </div>
        </div>
      </div>
      <div className="col-md-1"></div>
     </div>
    </>
  )
}

export default Result
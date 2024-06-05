// import { useState } from 'react'
import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react';


function App() {

  const [gender, setgender] = useState("")
  const [height, setheight] = useState(0)
  const [weight, setweight] = useState(0)
  const [bmi, setbmi] = useState(0)
  const [bmiCondition, setbmicondition] = useState("")
  const [img, setimg] =useState("")
  const [show, setshow] = useState(false)

  const [isheight, setIsheight] = useState(true)
  const [isweight, setIsweight] = useState(true)

  const validate = (e)=>{

    let name = e.target.name
    let value = e.target.value
    // console.log(name,value);
    if(!!value.match(/^[0-9]*$/)){
      if(name == 'height'){
        setheight(value)
        setIsheight(true)
      }else{
        setweight(value)
        setIsweight(true)
      }
  }
  else{
    if(name == 'height'){
      setheight(value)
      setIsheight(false)
    }else{
      setweight(value)
      setIsweight(false)
    }
  }
  }

  const bmigender = async (e)=>{
    //  e.preventDefault()
   
  /*   setgender(inp.value) */
    // console.log(e.target);
    let gender = e.target.name
    // console.log("gender:",gender);
    if(e.target.name == "male"){
      setgender(e.target.value)
    }
    else{
      setgender(e.target.value)
     }
    // setgender(e.target.name)
    // console.log(gender);
  }


  const calculate = ()=>{
    let bmivalue = (weight/((height/100)*(height/100))).toFixed(1)
    setbmi(bmivalue)
    // console.log(bmivalue)
    if((gender == "male")){
    if(bmivalue >=25.0)
      {
        setbmicondition("Over-Weight")
        setimg("./fat-boy.jpg")
      }
    else if(bmivalue >= 18.0){
      setbmicondition("Normal")
      setimg("./boy.jpg")
    }
    else{
      setbmicondition("Undernourished")
      setimg("./under-boy.webp")
    }
  }
  else  if((gender == "female")){
    if(bmivalue >=25.0)
      {
        setbmicondition("Over-Weight")
        setimg("./fat-girl.avif")
      }
    else if(bmivalue >= 18.0){
      setbmicondition("Normal")
      setimg("./girl.jpg")
    }
    else{
      setbmicondition("Undernourished")
      setimg("./under-girl.webp")
    }
  }else{
    console.log("invalid");
  }
    // if((gender == "male")&&(bmiCondition == "Over-Weight")){setimg("./fat-boy.jpg");}
    // if((gender == "male")&&(bmiCondition == "Normal")){setimg("./boy.jpg")}
    // if((gender == "male")&&(bmiCondition == "Undernourished")){setimg("./under-boy.webp")}
     
    // if((gender == "female")&&(bmiCondition == "Over-Weight")){setimg("./fat-girl.avif")}
    // if((gender == "female")&&(bmiCondition == "Normal")){setimg("./girl.jpg")}
    // if((gender == "female")&&(bmiCondition == "Undernourished")){setimg("./under-girl.webp")}
  
    // console.log(bmiCondition);
    setshow(true)
  }
  const reset = ()=>{
    setgender("")
    setIsheight(true)
    setIsweight(true)
    setbmi(0)
    setbmicondition("")
    setheight(0)
    setweight(0)
    setimg("")
    // console.log(gender,height,weight,img);

  }
  return (
    <>
     <div className="row p-5" id="test">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-3 align-items-center d-flex justify-content-center">
      <div className="card text-center border-4">
      <div className="card-body">
      <h3 className='text-light text-center card-title mt-4'>BMI Calculator</h3>
      <div className="cart-text" style={{ color: 'bisque' }}>BMI Index calculator</div>
      <form>
      <div className='d-flex align-items-center justify-content-center mt-5'>
      <button type="button" onClick={(e)=>bmigender(e)} value={"male"}  name="male" className="btn btn-danger">
      <i className="fa-solid fa-person fa-2xl mb-2"></i><br /> <h5 className='mt-2' name="male" aria-disabled>Male</h5>
        </button>
      <button type="button" onClick={(e)=>bmigender(e)} value={"female"} name="female" className="btn btn-danger ms-3">
     <i className="fa-solid fa-person-dress fa-2xl mb-2"></i> <br /><h5 className='mt-2' name="female">Female</h5></button> 
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4 bg mx-5 rounded' style={{height:'170px;', width:'100px;'}}>
       <h4 className='my-4 me-3 text-light ms-4'><i className="fa-solid fa-scale-unbalanced-flip mb-2"></i> <br />Height</h4>
       <TextField value={height || ""} id="standard-basic" label="Cm" variant="standard" className='me-3' name="height" onChange={(e)=>validate(e)} />
       { !isheight &&
      <p className='text-warning bold'>*Invalid Input</p> }
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4 bg mx-5 rounded' style={{height:'150px;', width:'100px;'}}>
       <h4 className='my-4 me-3 text-light ms-4'> <i className="fa-solid fa-weight-scale mb-2"></i> <br />Weight</h4>
       <TextField value={weight || ""} id="standard-basic" label="Kg" variant="standard" className='me-3' name="weight" onChange={(e)=>validate(e)} />
       { !isweight &&
      <p className='text-warning bold'>*Invalid Input</p> }
      </div>
      <button className='btn mt-5 mb-5' type='button' onClick={calculate} style={{backgroundColor:'bisque',height:'50px',width:'35%'}}><b>Calculate</b></button>
      </form>
      </div>
      </div>
      </div>
      <div className="col-md-1"></div>
     </div>
      { show ? 
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
            <li className="list-group-item">A healthy outside starts from the inside</li>
            {/* <li className="list-group-item">A third item</li> */}
          </ul>
          <button className='btn' style={{backgroundColor:'bisque',height:'50px',width:'35%'}} onClick={reset}>Try Again</button>
        </div>
        </div>
      </div>
      <div className="col-md-1"></div>
     </div> : 'null'}
    </>
  )
}

export default App
 
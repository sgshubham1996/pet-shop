import React, { useState } from 'react'
import "./Service.css"

function Service() {
  const[input,setInput]=useState({
    service:"",
    price:""
  })

  const[output,setOutput]=useState([])


  function handleChange(event){
    const nam = event.target.name;
    const val = event.target.value;

    setInput(function(preValue){
      return {...preValue,[nam]:val}
    })
  }

  function handleSubmit(event){

    setOutput((pre)=>{
      return [...pre,input]
    });

    setInput({
      service:"",
      price:""
    })
     
    event.preventDefault()
  }



  function deleteItem(id){
     const update = output.filter(function(ele,ind){
      return ind !== id
     })
     setOutput(update)
  }

  return (
    <div className='management' >
      <h1>Services offered by the veterinary shop</h1>
      <form onSubmit={handleSubmit} className='form' >
        <input name='service' placeholder='Service Name' value={input.service} onChange={handleChange} className='input' />
        <input name='price' placeholder='Price' value={input.price} onChange={handleChange} className='input' />
       
        <button>Submit</button>
      </form>
      <table className='table'border="1"  >
        <thead style={{backgroundColor:"greenyellow"}} >
          <tr>
            <th>Service Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:"goldenrod"}} >
          <tr>
           <td>
           Vaccinations
           </td>
           <td>5000</td>
          </tr>
          <tr>
           <td>
           Diagnostic testing
           </td>
           <td>6000</td>
          </tr>
          <tr>
           <td>
           Dental care
           </td>
           <td>7000</td>
          </tr>
          <tr>
           <td>
           Spay and neuter services
           </td>
           <td>8000</td>
          </tr>
          <tr>
           <td>
           Surgery
           </td>
           <td>9000</td>
          </tr>
          <tr>
           <td>
           Behavior counseling
           </td>
           <td>10000</td>
          </tr>
          <tr>
           <td>
           Nutritional counseling
           </td>
           <td>11000</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table className='table'border="1" > 
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody  style={{backgroundColor:"blueviolet"}} >
            {
              output.map(function(item,index){
                return <tr key={index} id={index} >
                    <td>{item.service}</td>
                    <td>{item.price}</td>
                   
                    
                    <i className="tableicon fa-solid fa-trash" onClick={()=>deleteItem(index)} ></i>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Service
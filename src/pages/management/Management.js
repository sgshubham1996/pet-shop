import React, { useState } from 'react'
import "./Management.css"

function Management() {
  const[input,setInput]=useState({
    pet:"",
    customer:"",
    email:""
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
      pet:"",
    customer:"",
    email:""
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
      <h1>Customer Information</h1>
      <form onSubmit={handleSubmit} className='form' >
        <input name='pet' placeholder='Pet Name' value={input.pet} onChange={handleChange} className='input' />
        <input name='customer' placeholder='Customer Name' value={input.customer} onChange={handleChange} className='input'  />
        <input name='email' placeholder='Email' value={input.email} onChange={handleChange} className='input'  />
        <button>Submit</button>
      </form>
      <div>
        <table border="1" className='table' >
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Customer Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              output.map(function(item,index){
                return <tr key={index} id={index} >
                    <td>{item.pet}</td>
                    <td>{item.customer}</td>
                    <td>{item.email}</td>
                    
                    <i className="fa-solid fa-trash" onClick={()=>deleteItem(index)} ></i>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Management
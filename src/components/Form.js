import React, { useState } from 'react'


function Form({handleAdditems }) {
    const [description, setDescription] = useState('')
    const [quantity, setquantity] = useState(1)
  
    function handleSubmit(e,i) {
      e.preventDefault();
      if(!description) return;
      handleAdditems({description,quantity,packed:false,id:Math.floor(Math.random() * 100) })
  
      setDescription('')
      setquantity(1)
    }
  
    return <form className="add-form" onSubmit={handleSubmit}>
      <h3>Things you need for your trip..</h3>
      <select value={quantity} onChange={(e) => setquantity(e.target.value)}>
        {Array.from({length:20},(e,i) => i + 1).map((num,i) => <option key={i} value={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  }

export default Form
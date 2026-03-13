import React, { useState } from 'react'
import './main2.css'
export default function Registration() {

  const [name,setName] = useState("")
  const [product,setProduct] = useState("")
  const [quantity,setQuantity] = useState("")
  const [color,setColor]=useState("")
  const [brand,setBrand] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    const user = {name,product,quantity,color,brand}

    let users = JSON.parse(localStorage.getItem("userData"))

    if(!Array.isArray(users)){
      users = []
    }

    users.push(user)

    localStorage.setItem("userData", JSON.stringify(users))

    alert(`Registration Request sent successfully by ${name}`)

    setName("")
    setProduct("")
    setColor("")
    setQuantity("")
    setBrand("")
  }

  return (
    <div className="container">
      <h1>Shop Your Product Here</h1>

      <form onSubmit={handleSubmit}>

        <label><b>Enter Your Name:</b></label>
        <input value={name} required onChange={(e)=>setName(e.target.value)} />
        <pre></pre>

        <label><b>Select Product:</b></label>
        <select value={product} onChange={(e)=>setProduct(e.target.value)} required>
          <option value="">Select</option>
          <option>Hand Bags</option>
          <option>Lipstick</option>
          <option>Hair Band</option>
          <option>Nail polish</option>
          <option>Perfume</option>
        </select>
        <pre></pre>

        <label><b>Select Quantity:</b></label>
        <select value={quantity} onChange={(e)=>setQuantity(e.target.value)} required>
          <option value="">Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <pre></pre>

        <label><b>Color of your choice:</b></label>
        <input value={color} required onChange={(e)=>setColor(e.target.value)} />
        <pre></pre>

        <label><b>Enter your required brand:</b></label>
        <input value={brand} required onChange={(e)=>setBrand(e.target.value)} />
        <pre></pre>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
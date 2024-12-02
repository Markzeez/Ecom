
// import { useState } from 'react'
// import axios from 'axios'

const PayStack = () => {

  // const [email, setEmail] = useState("")
  // const [amout, setAmount] = useState("")
  // const [firstname, setFirstname] = useState("")
  // const [lastname, setLastname] = useState("")
  // const [payresult, setPayresult] = useState("")

  // const url = `https://expressserver.phamestack.repl.co/paystack?amount=${amount}$email-${email}`;

  // const form = new FormData();
  // form.append('email',email)
  // form.append('firstname',firstname)
  // form.append('amount',amount)
  // form.append('lastname',lastname)
  // async function paystackpay(e){
  //   e.preventDefault();
  //   await axios.post( url,form,{
  //     headers:{
  //       'X-Requested-With': 'XMLHttpRequest'
  //     }
  //   }).then(respone=>{
  //     let data = JSON.parsel(respone.data)
  //     console.log(data.data.authorization_url)
  //     setPayresult(data.data.authorization_url)
  //     window.location.href=data.data.authorization_url
  //     return null
  //   }).catch(function(error){
  //     console.log(error)
  //   })
  // }



  return (
    <div className="App">
  <div className="container">
    <div className="item">
      <img
        className="item-image"
        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="product"
      />
      <div className="item-details">
        <p className="item-details__title">Payment</p>
      </div>
    </div>
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-field">
          <label>Email</label>
          <input type='email'/>
        </div>
        <div className="checkout-field">
          <label>Amount</label>
          <input type='number'/>
        </div>
        <div className="checkout-field">
          <label>Firstname</label>
          <input type='name'/>
        </div>
        <div className="checkout-field">
          <label>Lastname</label>
          <input type='name'/>
        </div>
       
      </div>
    </div>
    <button>Pay with paystack</button>
  </div>
</div>
  )
}

export default PayStack
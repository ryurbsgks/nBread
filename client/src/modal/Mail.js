import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Mail () {

  const [email, setEmail] = useState('');

  const handleInputValue = (e) => {
    setEmail(e.target.value);
  }

  const sendMail = () => {
    console.log('----------sendMail---------')
    console.log('----------email---------', email)
    axios.post(`${process.env.REACT_APP_API_URL}/mail`, {
      email: email
    })
    .then( (res) => {
      if (res.data.message !== 'success') {
        console.log('--------!success--------')
      } 
      console.log('--------success--------')
    }).catch( (err) => {
      console.log(err);
    });
  };
  
  return (
    <div>
      <div>
        <input type='email' onChange={handleInputValue} />
      </div>
      <div>
        <button type='button' onClick={sendMail}>인증번호 보내기</button>
      </div>
    </div>
  )
}

export default Mail;
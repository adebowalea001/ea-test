import React from 'react';
import { hydrate } from 'react-dom';
import User from './components/user.jsx';
import axios from 'axios';

function handleClick(cb) {
  axios.post('http://localhost:3000/get_user_details')
       .then(res => {
         cb(null, res.data);
       })
       .catch(res => {
         cb({});
       });
}

hydrate(<User handleClick={ handleClick } />, document.getElementById('root'));

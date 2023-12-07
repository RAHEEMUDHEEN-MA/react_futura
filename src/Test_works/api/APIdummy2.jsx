import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function APIdummy2() {
    
  const [first, setFirst] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((arrayitem)=>{
        setFirst(arrayitem.data.products)
    })
  }, [])
  

  return (
    <div>
      {first.map((demo)=>(
            <h1>{demo.brand}</h1>
      ))}
    </div>
  );
}

export default APIdummy2;

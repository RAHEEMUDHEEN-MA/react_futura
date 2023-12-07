import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CSSProperties } from 'react';



function MapCard() {
    const [first, setfirst] = useState(
        [{name:"rose" ,bio_name:"sjcshdjkshfkdalfjhlsfjdhsjkjkdfdkshfdsbjadhbs-77",img:"https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"},
        {name:"lilly" ,bio_name:"gfdsjfhsdkfjksdkfdksfkhdsfuisdfdhsiofuhidshy-75",img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi4t3W1AUeJ7bbZZ2Wb5D3P2FXuGbFRTzXDAwZ991gyg1__W5m"},
        {name:"orcid" ,bio_name:"eesdfkkjdslfdlsf8sfjsdnfuise8ihfebn7hfsbkfhsd8fdiusbfjse-87",img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSb-BUUzLAw4C2ggZVQa7p-HBx2kop5PvRK0oUd9pvW2vJA_r_d"},]
    )
  return (
        <div style={{display:"flex", justifyContent:'space-around'}}>
            {first.map((flower)=>
          
        
          <Card style={{width:"18rem" }}>
            <Card.Img style={{height:"20rem", objectFit:'fill'}} variant='top' src={flower.img}>

            </Card.Img >
            <Card.Body>
        <Card.Title>{flower.name}</Card.Title>
        <Card.Text>
        {flower.bio_name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
          </Card>
           
            
            )}
        </div>
    )
}

export default MapCard


                    
                    
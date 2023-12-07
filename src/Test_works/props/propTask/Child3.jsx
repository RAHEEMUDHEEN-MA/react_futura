import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function Child3({ fruit, veg, setveg ,setfruit}) {
  const [frtmode,setfrtmode]=useState(true)
  const [demofruit,setdemofruit]=useState([])


  useEffect(() => {
   setdemofruit([...fruit])
   console.log("demofrt",demofruit)
  }, [])

  useEffect(() => {
   
    if (!frtmode) {
      
      setfruit(demofruit)
    }
    else{
      setfruit(veg)
    }
  }, [frtmode])


  return (
    <div>
      <div
        className="p-5 m-4 bg-success"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {fruit.map((fruitdemox) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fruitdemox.picture} />
            <Card.Body>
              <Card.Title>{fruitdemox.name}</Card.Title>
              <Card.Text>{fruitdemox.color}</Card.Text>
              

            </Card.Body>
          </Card>
          
        ))}
      
      </div>
      <Button variant="primary" onClick={()=>(setfrtmode(!frtmode))} className="d-flex m-auto ">change</Button>
      
    </div>
  );
}

export default Child3;

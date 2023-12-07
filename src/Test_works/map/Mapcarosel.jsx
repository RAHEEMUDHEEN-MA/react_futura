import React, { useState } from 'react'
import { Carousel ,ExampleCarouselImage } from 'react-bootstrap'



function Mapcarosel() {
    const [first, setfirst] = useState([
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOF3eNJ_wO3Jm_KkILSJaIwNXGLkIlBPAhQ&usqp=CAU",name:"audi",description:"sadnjksajfbudbusabubjsdfjbjsdbgdhjvdfbvfdjnvhudfbvb"},
        {img:"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg",name:"bmw",description:"sadnjksajfbudbusabubjsdfjbjsdbgdhjvdfbvfdjnvhudfbvb"},
        {img:"https://www.financialexpress.com/wp-content/uploads/2022/09/Tesla-Model-S-1.jpg?w=1024",name:"tesla",description:"sadnjksajfbudbusabubjsdfjbjsdbgdhjvdfbvfdjnvhudfbvb"},
        {img:"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-A-Class-Limousine-100420211633.jpg",name:"benz",description:"sadnjksajfbudbusabubjsdfjbjsdbgdhjvdfbvfdjnvhudfbvb"}
    ])
  return (
    <div className='col-10 m-auto'>
       <Carousel variant='dark' style={{width:'80%', height:'70%', border:'1px solid gray', padding:'20px',borderRadius:'10rem'}}>
       {first.map((car)=>

       <Carousel.Item style={{borderRadius:'10rem'}}>
         <img style={{height:'100%', width:'100%' ,borderRadius:'10rem'}} src={car.img} alt="" />
         <Carousel.Caption>
           <h3>{car.name}</h3>
           <p>{car.description}</p>
         </Carousel.Caption>
       </Carousel.Item>
       )}

     </Carousel>
    </div>
  )
}

export default Mapcarosel

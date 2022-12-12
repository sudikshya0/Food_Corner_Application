import React from 'react'
import './Card.css'
const Card = ({name, image, price}) => {
  
    return (
    <div className="card-container" style={{width: "18rem"}}>
        <img className="card-img-top" src={image}/>
        <div className="card-body">
            <h2 className="card-text">{name}</h2>
            <span className="card-info">Rs. {price}</span>
        </div>
    </div>
  )
}

export default Card





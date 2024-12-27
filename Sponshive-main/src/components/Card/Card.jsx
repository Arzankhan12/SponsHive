import React from 'react'
import "./card.css"
import { useSelector } from 'react-redux';

const Card = (props) => { 
  const val  = useSelector(state=> state.val);
  return ( 
    <div className={`card ${props.card} floating ${(val == true) ? props.addCardAnime: ""}`}>
      <h2>GLASS MORPHISM</h2> 
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minima tenetur animi, tempore ducimus exercitat.</p>
      <button className='btnCard'>Button</button> 
    </div>
  )
}

export default Card 

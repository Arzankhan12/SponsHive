import React, { useState } from 'react'
import './landingpage.css'
import Navbar from "../../Navbar/Navbar"
import Card from '../../Card/Card'
import HiddenCards from '../../HiddenCards/HiddenCards.jsx'
import { useSelector, useDispatch } from 'react-redux';
import {clickWorkHandler,setVal} from '../../../features/LandingPage/LandingPageSlice.jsx'

const LandingPage = () => {      
  const [work2,setWork2] = useState(false);
  const dispatch = useDispatch();
  const val = useSelector(state => state.val);
  console.log("val: ",val);

  const handleCardsShow = () => { 
    dispatch(setVal());
    dispatch(clickWorkHandler()); 
  }

  return ( 
    <div className='LandingPage' >                                                          
      <div className={`hexagonP  ${val==true ? "hexagonPAminate" : ""}`} id="hexagonP" onClick={handleCardsShow}> 
          <div className="hexagon" id="hexagon" > 
            <div className="hexagonChild" id="hexagonChild" >
              <div className="hexagonGrandChild" id="hexagonGrandChild">
              <div  className="hexagonGreatGrandChild" id="hexagonGreatGrandChild">
                <div className='workText'>
                <div className={`work ${(work2==true) ? " work2" : "" }`} 
                onMouseEnter={()=>{
                  setWork2(true); 
                }} 
                 
                onMouseLeave={()=>{ 
                  setWork2(false);
                }} 
                >
                  SPONSHIVE
                  </div>
                  </div>
              </div> 
              </div> 
            </div> 
          </div>
          </div>  

        <HiddenCards />   
        <div className="landingPageChild">   
            <Navbar />
        </div> 
        <Card card={"card1"} addCardAnime={"card1Anime"}/>
        <Card card={"card2"} addCardAnime={"card2Anime"}/>
        <Card card={"card3"} addCardAnime={"card3Anime"}/>
    </div>
  )
}

export default LandingPage

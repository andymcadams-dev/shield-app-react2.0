import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ForcedFumble from './StatComponents/ForcedFumbleComponent'
import HudlPlay from './HudlPlayComponents/HudlPlayComponent';
import GameSelect from './HudlPlayComponents/GameSelectComponent';
import AlignmentPlusRadio from './AAFComponents/AlignmentComponents';
import PBU from './StatComponents/PassBreakUpComponent';
function Scorecard () {
  const [gameSelect, setGameSelect]=useState(
    ''
  )
  const handleGameSelectChange = e => { 
    setGameSelect(e.target.value)
  }
  const [hudlPlay, setHudlPlay]=useState(
    ''
  )
  const handleHudlPlayChange = e => {
    setHudlPlay(e.target.value)
  }

  const [alignmentPlusRadio, setAligmentPlusRadio]=useState(
    ''
  )
//  const handleAlignmentPlusChange = e => {
//     setAligmentPlusRadio(e.target.value)
//   } 

  const handlePBUOnChange = e => {
    PBU(e.target.valeue)
  }
  return ( 
    <>
      <GameSelect
      gameSelect={gameSelect}
      handleGameSelectChange={handleGameSelectChange}
      />
  
    <HudlPlay
    hudlPlay={hudlPlay}
    handleHudlPlayChange={handleHudlPlayChange}
    />

        <PBU 
    PBU={PBU}
    handlePBUOnChange={handlePBUOnChange}
    />
    </>
  ) 
         
    
        
}


export default Scorecard;
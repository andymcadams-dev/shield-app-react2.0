import React, { useState } from 'react';
import HudlPlay from './HudlPlayComponents/HudlPlayComponent';
import GameSelect from './HudlPlayComponents/GameSelectComponent';
import PlayerSelect from './PlayerComponents/PlayerComponent';
import PositionGroupSelect from './PlayerComponents/PositionGroupComponent';
import PlusMinus from './PlusMinusComponents/PlusMinusComponent';
import AlignmentGrade from './AAFComponents/AlignmentComponents';
import AssignmentGrade from './AAFComponents/AssignmentComponent';
import FinishGrade from './AAFComponents/FinishComponent';
import ForcedFumble from './StatComponents/ForcedFumbleComponent';
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

  const [positionGroupSelect, setPositionGroupSelect]=useState(
    ''
  )
  const handlePositionGroupSelectChange = e => { 
    setPositionGroupSelect(e.target.value)
  }
  const [playerSelect, setPlayerSelect]=useState(
    ''
  )
  const handlePlayerSelectChange = e => { 
    setPlayerSelect(e.target.value)
  }

  const [plusMinus, setPlusMinus]=useState(
    ''
  )
  const handlePlusMinusChange = e => { 
    setPlusMinus(e.target.value)
  }

  const [alignmentGrade, setAlignmentGrade]=useState(
    ''
  )
  const handleAlignmentGradeChange = e => { 
    setAlignmentGrade(e.target.value)
  }

  const [assignmentGrade, setAssignmentGrade]=useState(
    ''
  )
  const handleAssignmentGradeChange = e => { 
    setAssignmentGrade(e.target.value)
  }

  const [finishGrade, setFinishGrade]=useState(
    ''
  )
  const handleFinishGradeChange = e => { 
    setFinishGrade(e.target.value)
  }

  const handleForcedFumbleOnChange = e => {
    ForcedFumble(e.target.valeue)
  }

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

      <PositionGroupSelect
      positionGroupSelect={positionGroupSelect}
      handlePositionGroupSelectChange={handlePositionGroupSelectChange}
      />

      <PlayerSelect
      playerSelect={playerSelect}
      handlePlayerSelectChange={handlePlayerSelectChange}
      />

      <PlusMinus
      plusMinus={plusMinus}
      handlePlusMinusChange={handlePlusMinusChange}
      />

      <AlignmentGrade
      alignmentGrade={alignmentGrade}
      handleAlignmentGradeChange={handleAlignmentGradeChange}
      />

      <AssignmentGrade
      assignmentGrade={assignmentGrade}
      handleAssignmentGradeChange={handleAssignmentGradeChange}
      />

      <FinishGrade
      finishGrade={finishGrade}
      handleFinishGradeChange={handleFinishGradeChange}
      />

      <ForcedFumble 
      ForcedFumble={ForcedFumble}
      handleForcedFumbleOnChange={handleForcedFumbleOnChange}
      />

      <PBU 
      PBU={PBU}
      handlePBUOnChange={handlePBUOnChange}
      />
    
    </>
  ) 
         
    
        
}


export default Scorecard;
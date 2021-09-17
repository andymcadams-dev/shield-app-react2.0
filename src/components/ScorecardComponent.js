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
import FumbleRecovery from './StatComponents/FumbleRecoveryComponent';
import Interception from './StatComponents/InterceptionComponent';
import Sack from './StatComponents/SackComponent';
import Tackle from './StatComponents/TackleComponents';
import { Container, Row, Col } from 'reactstrap';

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

  const handleFumbleRecoveryOnChange = e => {
    FumbleRecovery(e.target.valeue)
  }

  const handleInterceptionOnChange = e => {
    Interception(e.target.valeue)
  }

  const handleSackOnChange = e => {
    Sack(e.target.valeue)
  }

  const handleTackleOnChange = e => {
    Tackle(e.target.valeue)
  }
  
  return ( 
    <>
      <Container>
        <Row>
          <Col>
            <GameSelect
            gameSelect={gameSelect}
            handleGameSelectChange={handleGameSelectChange}
            />
          </Col>
          <Col>  
            <HudlPlay
            hudlPlay={hudlPlay}
            handleHudlPlayChange={handleHudlPlayChange}
            />
          </Col>
          <Col>
            <PlusMinus
            plusMinus={plusMinus}
            handlePlusMinusChange={handlePlusMinusChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PositionGroupSelect
            positionGroupSelect={positionGroupSelect}
            handlePositionGroupSelectChange={handlePositionGroupSelectChange}
            />
          </Col>
          <Col>
            <PlayerSelect
            playerSelect={playerSelect}
            handlePlayerSelectChange={handlePlayerSelectChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <AlignmentGrade
            alignmentGrade={alignmentGrade}
            handleAlignmentGradeChange={handleAlignmentGradeChange}
            />
          </Col>
          <Col>
            <AssignmentGrade
            assignmentGrade={assignmentGrade}
            handleAssignmentGradeChange={handleAssignmentGradeChange}
            />
          </Col>
          <Col>
            <FinishGrade
            finishGrade={finishGrade}
            handleFinishGradeChange={handleFinishGradeChange}
            />
          </Col>
        </Row>
        <Row> 
          <Col>
            <ForcedFumble 
            ForcedFumble={ForcedFumble}
            handleForcedFumbleOnChange={handleForcedFumbleOnChange}
            />
          </Col>
          <Col>
            <PBU 
            PBU={PBU}
            handlePBUOnChange={handlePBUOnChange}
            />
          </Col>
          <Col>
            <FumbleRecovery 
            FumbleRecovery={FumbleRecovery}
            handleFumbleRecoveryOnChange={handleFumbleRecoveryOnChange}
            />
          </Col>
          <Col>
            <Interception 
            Interception={Interception}
            handleInterceptionOnChange={handleInterceptionOnChange}
            />
          </Col>
          <Col>
            <Sack 
            Sack={Sack}
            handleSackOnChange={handleSackOnChange}
            />
          </Col>
          <Col>
            <Tackle 
            Tackle={Tackle}
            handleTackleOnChange={handleTackleOnChange}
            />
          </Col>
        </Row>
      </Container>
    
    </>
  ) 
         
    
        
}


export default Scorecard;
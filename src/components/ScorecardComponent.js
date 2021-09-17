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
        <h1 className="scorecardtitle">Player Gradesheet</h1>
      </Row>
        <Row className="scorecard">
          <Col >
          <h2>Game</h2>
            <GameSelect
            gameSelect={gameSelect}
            handleGameSelectChange={handleGameSelectChange}
            />
          </Col>
          <Col> 
          <h2>Hudl Play</h2> 
            <HudlPlay
            hudlPlay={hudlPlay}
            handleHudlPlayChange={handleHudlPlayChange}
            />
          </Col>
          <Col>
          <h2>Grade</h2>
            <PlusMinus
            plusMinus={plusMinus}
            handlePlusMinusChange={handlePlusMinusChange}
            />
          </Col>
        </Row>
        <Row className="scorecard">
          <Col>
          <h2>Position Group</h2>
            <PositionGroupSelect
            positionGroupSelect={positionGroupSelect}
            handlePositionGroupSelectChange={handlePositionGroupSelectChange}
            />
          </Col>
          <Col>
          <h2>Player</h2>
            <PlayerSelect
            playerSelect={playerSelect}
            handlePlayerSelectChange={handlePlayerSelectChange}
            />
          </Col>
        </Row>
        <Row className="scorecard">
          <Col>
          <h2>Alignment</h2>
            <AlignmentGrade
            alignmentGrade={alignmentGrade}
            handleAlignmentGradeChange={handleAlignmentGradeChange}
            />
          </Col>
          <Col>
          <h2>Assignment</h2>
            <AssignmentGrade
            assignmentGrade={assignmentGrade}
            handleAssignmentGradeChange={handleAssignmentGradeChange}
            />
          </Col>
          <Col>
          <h2>Finish</h2>
            <FinishGrade
            finishGrade={finishGrade}
            handleFinishGradeChange={handleFinishGradeChange}
            />
          </Col>
        </Row>
        <Row className="scorecard"> 
          <Col>
          <h2>For Fum</h2>
            <ForcedFumble 
            ForcedFumble={ForcedFumble}
            handleForcedFumbleOnChange={handleForcedFumbleOnChange}
            />
          </Col>
          <Col>
          <h2>PBU</h2>
            <PBU 
            PBU={PBU}
            handlePBUOnChange={handlePBUOnChange}
            />
          </Col>
          <Col>
          <h2>Fum Rec</h2>
            <FumbleRecovery 
            FumbleRecovery={FumbleRecovery}
            handleFumbleRecoveryOnChange={handleFumbleRecoveryOnChange}
            />
          </Col>
          <Col>
          <h2>INT</h2>
            <Interception 
            Interception={Interception}
            handleInterceptionOnChange={handleInterceptionOnChange}
            />
          </Col>
          <Col>
          <h2>Sack</h2>
            <Sack 
            Sack={Sack}
            handleSackOnChange={handleSackOnChange}
            />
          </Col>
          <Col>
          <h2>Tackle</h2>
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
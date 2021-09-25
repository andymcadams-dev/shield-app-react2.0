import React, { useState } from 'react';
import HudlPlay from './HudlPlayComponents/HudlPlayComponent';
import GameSelect from './HudlPlayComponents/GameSelectComponent';
import PlayerSelect from './PlayerComponents/PlayerComponent';
import PositionGroupSelect from './PlayerComponents/PositionGroupComponent';
import PlusMinus from './PlusMinusComponents/PlusMinusComponent';
import Alignment from './AAFComponents/AlignmentComponents';
import Assignment from './AAFComponents/AssignmentComponent';
import Finish from './AAFComponents/FinishComponent';
import ForcedFumble from './StatComponents/ForcedFumbleComponent';
import PBU from './StatComponents/PassBreakUpComponent';
import FumbleRecovery from './StatComponents/FumbleRecoveryComponent';
import Interception from './StatComponents/InterceptionComponent';
import Sack from './StatComponents/SackComponent';
import Tackle from './StatComponents/TackleComponents';
import { Container, Row, Col, Button } from 'reactstrap';
import TackleForLoss from './StatComponents/TackleForLossComponent';

function Scorecard () {
  const [gameSelect, setGameSelect]=useState(//defining gameSelect [declaring state]
    ''      //I am a thing, Here is how to change me, here is what I start as
  )
  const handleGameSelectChange = e => { //using setGameSelect [declaring setstate] this sets everytime there is a change on the element.
    setGameSelect(e.target.value) //there is where you use the changing it
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

  const [ alignment, setAlignment ] = useState('')     
  
  const handleAlignmentChange = e => {
      setAlignment(e.target.value);
  }

  const [ assignment, setAssignment ]=useState(
    ''
  )
  const handleAssignmentChange = e => { 
    setAssignment(e.target.value)
  }

  const [finish, setFinish]=useState(
    ''
  )
  const handleFinishChange = e => { 
    setFinish(e.target.value)
  }

  const handleForcedFumbleChange = e => {
    ForcedFumble(e.target.checked)//spelling and need to setForcedFumble
  }

  const handlePBUChange = e => {
    PBU(e.target.checked)
  }

  const handleFumbleRecoveryChange = e => {
    FumbleRecovery(e.target.checked)
  }

  const handleInterceptionChange = e => {
    Interception(e.target.checked)
  }

  const handleSackChange = e => {
    Sack(e.target.value) //these should all be setSack or setTackle
  }

  const handleTackleChange = e => {
    Tackle(e.target.checked)
  }

  const handleTackleForLossChange = e => {
    TackleForLoss(e.target.checked)
  }
  
  return ( 
    <>
      <Container>
        <Row>
          <h1 className="scorecardtitle">Player Gradesheet</h1>
        </Row>
        <Row className="scorecard">
          <Col>
          <h2>Game </h2>
            <GameSelect
            gameSelect={gameSelect} //this is being passed into component as a prop =on the right of equal is {current state}
            handleGameSelectChange={handleGameSelectChange}//so is this  =on the right of equals is {function for changing current state}
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
          <h2>Position Group</h2>
            <PositionGroupSelect
            positionGroupSelect={positionGroupSelect}
            handlePositionGroupSelectChange={handlePositionGroupSelectChange}
            />
          </Col>
          </Row>
        <Row className="scorecard">
          
          <Col>
          <h2>Player</h2>
            <PlayerSelect
            playerSelect={playerSelect}
            handlePlayerSelectChange={handlePlayerSelectChange}
            />
          </Col>
          <Col>
          <h2>Grade</h2>
            <PlusMinus 
            plusMinus={alignment === "Alignment Minus" || 
                      assignment === "Assignment Minus" || 
                      finish === "Finish Minus" ? "Minus" : "Plus"  }
            />
          </Col>
        </Row>
        <Row className="scorecard">
          <Col>
          <h2>Alignment</h2>
            <Alignment
            alignment={alignment}
            handleAlignmentChange={handleAlignmentChange}
            />
          </Col>
          <Col>
          <h2>Assignment</h2>
            <Assignment
            assignment={assignment}
            handleAssignmentChange={handleAssignmentChange}
            />
          </Col>
          <Col>
          <h2>Finish</h2>
            <Finish
            finish={finish}
            handleFinishChange={handleFinishChange}
            />
          </Col>
        </Row>
        <Row className="scorecard"> 
          <Col>
          <h2>PBU</h2>
            <PBU 
            PBU={PBU}
            handlePBUChange={handlePBUChange}
            />
          </Col>
          <Col>
          <h2>For Fum</h2>
            <ForcedFumble 
            ForcedFumble={ForcedFumble}
            handleForcedFumbleChange={handleForcedFumbleChange}
            />
          </Col>
          <Col>
          <h2>Fum Rec</h2>
            <FumbleRecovery 
            FumbleRecovery={FumbleRecovery}
            handleFumbleRecoveryChange={handleFumbleRecoveryChange}
            />
          </Col>
          <Col>
          <h2>INT</h2>
            <Interception 
            Interception={Interception}
            handleInterceptionChange={handleInterceptionChange}
            />
          </Col>
          <Col>
          <h2>Sack</h2>
            <Sack 
            Sack={Sack}
            handleSackChange={handleSackChange}
            />
          </Col>
          <Col>
          <h2>Tackle</h2>
            <Tackle 
            Tackle={Tackle}
            handleTackleChange={handleTackleChange}
            />
          </Col>
          <Col>
          <h2>TFL</h2>
            <TackleForLoss 
            TackleForLoss={TackleForLoss}
            handleTackleForLossChange={handleTackleForLossChange}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <Button variant="warning">Submit</Button>{''}
          </Col>
        </Row>
      </Container>
    </>
  ) 
}

export default Scorecard;
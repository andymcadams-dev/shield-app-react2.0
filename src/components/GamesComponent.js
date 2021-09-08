import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderGame({game}) {
    return (
        <div className="col-md-5 m-1">
            <Card style={{width: '18rem'}}>
                <CardImg top src={game.image} alt={game.school} />
                <CardBody>
                <CardTitle>{game.school}</CardTitle>
                    <CardText>{game.date}</CardText>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{game.winloss}</ListGroupItem>
                        <ListGroupItem>{game.score}</ListGroupItem>
                        <ListGroupItem>{game.teamgrade}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>     
        </div>
    );            
}
    
function GamesInfo(props){
    if(props.game){
        return ( 
            <div className="container">
                <div className="row">
                <div className="col">
                <Breadcrumb>
                            <BreadcrumbItem><Link to="/Directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.game.school}</BreadcrumbItem>
                        </Breadcrumb>
                    <h2>{props.game.school}</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderGame game={props.game} />
                </div>
            </div>
        );
    }
    return <div />;
        
    }

export default GamesInfo;
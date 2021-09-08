import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({game}) {
    return (
                <div style={{border: '2px solid'}}>
                    <Card>
                        <Link to={`/directory/${game.school}`}>
                        <CardImg height="120" width="180" src={game.image} alt={game.school} />
                        <CardBody>
                            <CardTitle>{game.school}</CardTitle>
                            <CardText>{game.date}</CardText>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
    )
}

//This creates the directory component - also controlling the size and layout of the cards
function Directory(props){
    const directory = props.games.map(game => {
        return (
            <Col md={2} style={{margin:"1em"}} key={game.id} >
                <RenderDirectoryItem game={game} />
            </Col>
        )
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Games</BreadcrumbItem>
                    </Breadcrumb>
                    {/* Title of page*/}
                    <h2>Games</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
        
    );
}


export default Directory;
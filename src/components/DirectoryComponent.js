import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({game}) {
    return (
       
                    <Card border="dark" style={{width: '18rem'}}>
                    <Link to={'/directory/${game.school}'}></Link>
                <CardImg top src={game.image} alt={game.school} height="240" width="360" />
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
    )
}

//This creates the directory component
function Directory(props){
    const directory = props.games.map(game => {
        return (
            <div key={game.id} className="col-md-5 m-1">
                <RenderDirectoryItem game={game} />
            </div>
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
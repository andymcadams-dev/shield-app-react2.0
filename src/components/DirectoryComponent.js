import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({game}) {
    return (
        <Card>
                        <Link to={`/directory/${game.id}`}>
                        <CardImg width="100%" src={game.image} alt={game.school} />
                        <CardImgOverlay>
                            <CardTitle>{game.school}</CardTitle>
                        </CardImgOverlay>
                        </Link>
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
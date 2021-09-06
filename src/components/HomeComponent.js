import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.school} />
            <CardBody>
                <CardTitle>{item.school}</CardTitle>
                <CardText>{item.date}</CardText>
            </CardBody>
        </Card>
    )
}
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.game} />
                </div>
            </div>
        </div>
    )
}

export default Home;

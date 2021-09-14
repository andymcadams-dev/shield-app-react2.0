import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, List, ListGroupItemHeading } from 'reactstrap';

function Footer(props) {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <ListGroupItemHeading>Links</ListGroupItemHeading>
                        <List>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/directory">Games</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            
                        </List>
                    </Col>
                    <Col>
                        <img src="/assets/bighighfiverbb.png" width="90" height="90" />
                    </Col>
                    <Col>
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '} 
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '} 
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '} 
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>{' '} 
                    </Col>
                </Row>
            </Container>
        </React.Fragment> 
    );
}

export default Footer;
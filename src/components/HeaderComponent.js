import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
      super(props);
      this.toggleNav=this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs={4}>
                <img src="/assets/plu-logo.png" alt="logo" height="150" width="300"/>
              </Col>
              <Col xs={4}>
                <h1>S.H.I.E.L.D.S</h1>
              </Col>
              <Col xs={4}>
                <h2>Defend Stronger</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
          <Navbar dark sticky="top" expand="md">
              <div className="container">
                  <NavbarBrand className="mr-auto" href="/"><img src="/assets/plu-logo.png"
                  height="90" width="120" alt="PLU Logo" /></NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link" to="/home">
                                  <i className="fa fa-home fa-lg" /> Home
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/directory">
                                  <i className="fa fa-list fa-lg" /> Games
                              </NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink className="nav-link" to="/scorecard">
                              <i className="fa fa-info fa-lg" /> Scorecard
                          </NavLink>
                      </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/aboutus">
                                  <i className="fa fa-info fa-lg" /> About
                              </NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </div>
          </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
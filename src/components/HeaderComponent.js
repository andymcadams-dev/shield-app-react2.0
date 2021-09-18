import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
  NavItem, Jumbotron, Container, Col, Row, Button, Modal, ModalHeader,
ModalBody, Label, Input, FormGroup, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
      super(props);
      this.toggleNav=this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false,
        isModalOpen: false
      };

      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    handleLogin(event) {
      alert(`Username: ${this.username.value}
      Password: ${this.password.value}
      Remember: ${this.remember.checked}`);
      event.preventDefault();
    }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          
            <Row>
            <Col xs={4}>
                <h1>S.H.I.E.L.D.</h1>
              </Col>
              <Col xs={4}>
                <img src="/assets/plu-logo.png" alt="logo" height="100%" width="100%"/>
              </Col>
              <Col xs={4}>
                <h2>Defend Stronger</h2>
              </Col>
            </Row>
          
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
                      <span className="navbar-text ml-auto">
                        <Button outline onClick={this.toggleModal}>
                          <i className="fa fa-sign-in fa-lg" /> Login
                        </Button>
                      </span>
                  </Collapse>
              </div>
          </Navbar>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label htmlFor="userName">Username</Label>
                    <Input type="text" id="username" name="username"
                      innerRef={input => this.username = input} />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                      innerRef={input => this.remember = input} />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="remember"
                        innerRef={input => this.remember = input} />
                        Remember Me
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" color="secondary">Login</Button>
                </Form>
              </ModalBody>
          </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
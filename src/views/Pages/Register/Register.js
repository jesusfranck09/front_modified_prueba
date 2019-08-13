import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
// import { Link } from 'react-router-dom';
  
const SIGNUP = gql`
    mutation SIGNUP($data: UserCreateInput!){
        signup(data: $data){
            token
        }
    }
`

class Register extends Component {
  state = { 
    first_name: '',
    last_name: '',
    birth_date: '',
    email: '',
    password: '',
    profile_img: '',
}

handleInput = (e) => {
    const {id, value} = e.target
     this.setState({
        [id]:value
    });
}

handleForm = (e, signup) => {
    e.preventDefault();
    console.log('Enviando formulario...');
    signup({variables: { data: { ...this.state }}})
}

catchData = (data) => {
    alert('Signup exitoso!');
    this.props.history.push('/login');
}

 catchError = (error) => {
    console.log(error);
    alert('hubo un error...');
}

  render() {

    return (
      <Mutation mutation={SIGNUP}>
        {
          (signup, {data, error, loading}) => {
            if (loading) console.log(loading);
            if (data) this.handleData(data);
            if (error) this.handleError(error);

          return(

            <React.Fragment>      
            <form onSubmit={e => this.handleForm(e, signup)}>
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Registrate</h1>
                      <p className="text-muted">Registro</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Nombre" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="Text" placeholder="Nombre de Usuario" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-mail"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Correo" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Contraseña"/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="secondary" className="px-4" type='submit'>Aceptar</Button>

                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" >Olvidaste tu Contraseña?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    {/* <div>
                      <h2>Registrate</h2>
                      <Link to="/register">
                        <Button color="success" className="mt-3" active tabIndex={-1}>Registrarme ahora!</Button>
                      </Link>
                    </div> */}
 
              </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      </form>
              </React.Fragment>
             )  
          } 

        }
        </Mutation>
        
    );
  
}
}

export default Register;

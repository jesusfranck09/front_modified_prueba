import React, { Component } from 'react';
import {   Badge,Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';



import usersData from './dataOk'

function UserRow(props) {
  const user = props.user


  const getBadge = (registered) => {
    return registered === 'Active' ? 'success' :
    registered === 'Inactive' ? 'success' :
    registered === 'Pending' ? 'success' :
    registered === 'Banned' ? 'success' :
            'success'
  }

  return (
    <tr key={user.id.toString()}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td><Badge color={getBadge(user.registered)}>{user.registered}</Badge></td>
      <td>{user.role}</td>
      <td>{user.status}</td>
    </tr>
  )
}


class EmailsOk extends Component {

  render() {
    const userList = usersData.filter((user) => user.id < 10)

     return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify">Correos Válidos</i>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nombre</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Telefono1</th>
                      <th scope="col">Telefono2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default EmailsOk;

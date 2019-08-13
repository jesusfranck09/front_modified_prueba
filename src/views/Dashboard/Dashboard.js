import React, { Component} from 'react';
import { Card,CardBody,CardHeader, Col,Row,Table,} from 'reactstrap';
import Charts from '../chats/charts'
import ChartsDona from '../chats/chartdona'

var data = {
  series: [5, 3, 4]
};


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
               Tabla de Estadisticas
              </CardHeader>
              <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Detalles de Correos</th>
                     
                    </tr>
                  </thead>
                 
                </Table>
                <Charts data={data} />
                <ChartsDona data={data} />
              <CardBody>
             <Table>


             </Table>
             
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

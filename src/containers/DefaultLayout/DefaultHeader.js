import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UncontrolledDropdown, Nav, NavItem} from 'reactstrap';
import PropTypes from 'prop-types';
import {  AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.PNG'
import {FormControl,Form,Button} from 'react-bootstrap'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        
        {/* className="text-white bg-primary py-5 d-md-down-none"  */}
        <AppSidebarToggler className="d-lg-none" display="md" mobile  />
        <AppNavbarBrand 
          full={{ src: logo, width: 89, height: 25, alt: 'ADS' }}
        
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar >
          <NavItem className="px-3" >
            <NavLink to="/dashboard" className="nav-link" >Inicio</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Usuarios</Link>
          </NavItem>
        </Nav>
        <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
        
        <Nav className="ml-auto" navbar >
        <UncontrolledDropdown nav direction="down">
      
          
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}

      
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;

import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px'
    };

    return (
      <div>
        <Row >
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Smart Car Washing</h1>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                
                <div className="m-l">
                  <h2 className="h4">Manage Car wash admins with ease</h2>
                  <p className="text-muted">
                    Built to manage different Car Wash Admins
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                
                <div className="m-l">
                  <h2 className="h4">Check Application Progress</h2>
                  <p className="text-muted">
                    Used to check progress of the application
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;

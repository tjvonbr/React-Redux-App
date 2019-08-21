import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import '../App.css';

const Trail = props => {
  return (
  <Card className="trail-card">
    <Image className="trail-card-image" src={ props.trail.imgSmallMed} wrapped ui={false} fluid />
    <Card.Content className="content-wrapper">
      <Card.Header className="trail-card-header">{ props.trail.name }</Card.Header>
      <Card.Meta className="trail-card-location">{ props.trail.location }</Card.Meta>
      <Card.Meta className="trail-card-length">{ props.trail.length } miles</Card.Meta>
      <Card.Description className="trail-card-summary">
        { props.trail.summary }
      </Card.Description>
    </Card.Content>
    <div className="redirect-btn">
      <button className="more-btn select-btn">Select</button>
      <button className="more-btn seeMore-btn">See more information</button>
    </div>
  </Card>
  );
};

export default Trail;

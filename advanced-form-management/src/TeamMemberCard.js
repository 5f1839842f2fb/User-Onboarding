import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const TeamMemberCard = (props) => {
  return (
    <Card body>
        <CardTitle>{props.teamMember.name}</CardTitle>
        <CardText>Email: {props.teamMember.email}</CardText>
    </Card>
    )
}

export default TeamMemberCard
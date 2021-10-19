import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FacilitiesData = (props) => {
    const {name, img, sponsors, sales, discription} = props.facilitie
    return (
        <div>
            <Col className="p-4">
            <Card style={{height: "650px", width: "600px"}}>
                <div>
                <Card.Img style={{width: "500px"}} variant="top" src={img} />
                </div>
                <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>
                    {discription}
                </Card.Text>
                <Card.Title>Sponsors: {sponsors}</Card.Title>
                <Card.Title>Sales: {sales}</Card.Title>
                </Card.Body>
                </Card>
        </Col>
        </div>
    );
};

export default FacilitiesData;
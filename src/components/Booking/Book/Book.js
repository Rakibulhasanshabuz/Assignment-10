import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Book = (props) => {
    console.log(props)
    const {name, img, sponsors, sales, discription} = props.book
    return (
        <div>
            <Col className="serviceData-container">
            <Card style={{height: "700px", width: "600px"}}>
                <div className="cart-img">
                <Card.Img style={{width: "500px"}} variant="top" src={img} />
                </div>
                <Card.Body>
                <Card.Title>Dance Name: {name}</Card.Title>
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

export default Book;
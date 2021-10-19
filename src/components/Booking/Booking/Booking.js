import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import healthData from '../../../fakeData/health.json'

const Booking = () => {
 
    const {serviceKey} = useParams();
    const booking = healthData.filter((item) => item.key === serviceKey)
    const {name, img, sponsors, sales, discription} = booking[0]; 
    return (
        <div>
            <h2 className="my-5"><span className="text-danger">Your Booking Vaccine is:</span> {serviceKey}<span className="text-info">({name})</span></h2>
            <div className="d-flex justify-content-center mb-4">
            <div>
            <Row xs={1} md={3} className="g-4">
            <Col className="serviceData-container">
            <Card style={{height: "700px", width: "600px"}}>
                <div className="cart-img">
                <Card.Img style={{width: "500px"}} variant="top" src={img} />
                </div>
                <Card.Body>
                <Card.Title>Name: <span className="text-primary">{name}</span></Card.Title>
                <Card.Text>
                    {discription}
                </Card.Text>
                <Card.Title>Sponsors: {sponsors}</Card.Title>
                <Card.Title>Sales: {sales}</Card.Title>
                </Card.Body>
                </Card>
        </Col>
            </Row>
            </div>
            </div>
        </div>
    );
};

export default Booking;
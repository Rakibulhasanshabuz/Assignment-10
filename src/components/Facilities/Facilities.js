import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FacilitiesData from './FacilitiesData';

const Service = () => {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch('./health.json')
        .then(res => res.json())
        .then(data => setFacilities(data));
    }, [])
    return (
        <div>
            <h1 className="text-warning">Our Facilities</h1>
            <div className="my-5">
            <Row xs={1} md={3} className="g-4">
                {
                    facilities.map(facilitie => <FacilitiesData facilitie={facilitie} key={facilitie.key}></FacilitiesData>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Service;
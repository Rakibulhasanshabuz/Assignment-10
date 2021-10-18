import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect (() => {
        fetch('health.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="container">
            <h1 className="text-warning my-5">Our Services</h1>
            <div className="row g-4 service-container">
            {
                services.map(service => <Service
                key={service.key}
                service={service} 
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;
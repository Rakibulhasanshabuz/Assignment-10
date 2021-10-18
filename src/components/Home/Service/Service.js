import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, sponsors, sales, img, key} = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 service pb-3">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <h3>Sponsors: {sponsors}</h3>
            <h3>Sales: {sales}</h3>
            <Link to={`/booking/${key}`}>
                <button className="btn btn-success">Regestration for {name}</button>
            </Link>
        </div>
    );
};

export default Service;
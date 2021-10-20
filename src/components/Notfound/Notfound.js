import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const Notfound = () => {
    return (
        <div>
            <Link to="/"><button className="btn btn-warning mb-3">Go Back</button></Link>
            <img style={{width:'100%'}} src={notfound} alt="" />
            
        </div>
    );
};

export default Notfound;
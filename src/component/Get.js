import React from 'react';
import '../App.css';
import {
    useParams,
    Link
  } from "react-router-dom";
import gambar from '../css/sbadmin/img/undraw_rocket.svg';

const gambar2 = require('../css/sbadmin/img/undraw_rocket.svg');


function Get() {

    let { id } = useParams();


    return(
        <div className="Get"> 
            <h1>Get : {id}</h1>
            <img src={`${process.env.PUBLIC_URL}/img/undraw_rocket.svg`} />
            <img src={gambar} />
            <Link to="/admin">About</Link>
        </div>
    );
}

export default Get;
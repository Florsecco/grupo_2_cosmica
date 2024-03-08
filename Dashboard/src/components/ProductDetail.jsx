import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    console.log(params);
    console.log('entre');
    return (
        <div>
            <h1>soy un detalle de </h1>
        </div>
    )
}

export default ProductDetail;
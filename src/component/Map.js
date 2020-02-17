import React, { useState, useEffect } from 'react';
import HexagonGrid from 'react-hexagon-grid';


const hexagons = ['one', 'two', 3, 4, 'this']

export default function Map() {

    return (
        <div> 
            <HexagonGrid gridWidth={300} gridHeight={200} hexagons={hexagons}/>
        </div>
    );
}
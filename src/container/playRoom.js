import React, { useState, useEffect } from 'react';
import Map from '../component/map';
import TurnTable from '../component/turnTable';

export default function playRoom() {



    return (
        <div className='map'> 
        <Map />
        <TurnTable />
        </div>
    );
}

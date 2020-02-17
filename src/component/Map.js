import React, { useState, useEffect } from 'react';
import '../stylesheets/map.css';
import { HexGrid, Layout, Hexagon, GridGenerator, Text, Pattern, Path, Hex } from 'react-hexgrid';

const num = [1, 2, 3, 4, 5];
export default function Map() {



    return (
        <div className='map'> 
        <HexGrid width={'60vw'} height={'40vh'}>
          <Layout size={{ x: 6, y: 6 }} spacing={1.1} origin={{x: 0, y: 0}}>
            {num.map(n => {
                return num.map( n2 => {
                    return <Hexagon q={n} r={-n2} s={0} />
                })
            })}
          </Layout>
        </HexGrid>
        </div>
    );
}

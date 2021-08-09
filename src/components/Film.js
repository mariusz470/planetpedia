import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import ARROWCLOSE from '../Assets/ARROWCLOSE.svg';
import ARROWOPEN from '../Assets/ARROWOPEN.svg';
import FilmTable from './FilmTable';
import MobilePlanets from './MobilePlanets';

const Arrow = styled.img`
    width: 2rem;
    cursor: pointer;
`


const Film = ({planets, title}) => {
    const [show, setShow] = useState(false);
    const mobile = useMediaQuery({ query: '(max-width: 1224px)' })

    if(!show) {
        return(
            <div style={{ display:"flex", justifyContent: "space-between", padding: "20px" }} onClick={()=>setShow(true)} >
                <p> {title} </p><Arrow src={ARROWOPEN}  />
            </div>
        )
    }

    return (
        <div>
            <div style={{display:"flex", justifyContent: "space-between", padding: "20px" }}>

            <p> {title} </p><Arrow src={ARROWCLOSE} onClick={()=>setShow(false)} />
            </div>
            {mobile ? <MobilePlanets planets ={planets} /> : <FilmTable planets={planets} /> }
        </div>
    )
}

export default Film

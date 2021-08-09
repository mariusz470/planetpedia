import React from 'react'
import styled from 'styled-components'

const PlanetWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    font-weight: lighter;
    color: #5f5f5f;
    padding-bottom: 20px;
    text-align: left;
    padding-left: 10px;
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
    &:nth-child(1) {
        background: linear-gradient(to bottom, #eeeded, #FFF) ;
    }
`

const MobilePlanets = ({planets}) => {
    return (
        <div>
            {planets.map(planet=>{
                return(
                    <PlanetWrapper key={planet.id}>
                        <div>Planet Name</div><div>{planet.name || "unknown"}</div>
                        <div>Rotation period</div><div>{planet.rotationPeriod || "unknown"}</div>
                        <div>Orbital period</div><div>{planet.orbitalPeriod || "unknown"}</div>
                        <div>Diameter</div><div>{planet.diameter || "unknown"}</div>
                        <div>Climate</div><div>{planet.climates.join(" ") || "unknown"}</div>
                        <div>Surface water</div><div>{planet.surfaceWater || "unknown"}</div>
                        <div>Population</div><div>{planet.population || "unknown"}</div>
                    </PlanetWrapper>
                )
            })}
        </div>
    )
}

export default MobilePlanets

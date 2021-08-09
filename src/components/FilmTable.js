import React from 'react'
import styled from 'styled-components';
import {FaSort} from "react-icons/fa";

import useSort from '../utils/useSort';

const Table = styled.table`
    width: 100%;
    font-size: 1rem;
    color: #5f5f5f;
    text-align: right;
`;

const SortIcon = styled(FaSort)`
    font-size: 1rem;
    margin-left: 10px;
`

const FilmTable = ({planets}) => {
    const { items, requestSort } = useSort(planets);
  
  
    return (
        <Table >
            <thead >
                <tr>
                <th style={{textAlign:"left", paddingLeft:"10px"}} onClick={() => requestSort('name')}>Planet Name <SortIcon/></th>
                <th onClick={() => requestSort('rotationPeriod')}>Rotation period <SortIcon/></th>
                <th onClick={() => requestSort('orbitalPeriod')}>Orbital period <SortIcon/></th>
                <th onClick={() => requestSort('diameter')}>Diameter <SortIcon/></th>
                <th onClick={() => requestSort('climates')}>Climate <SortIcon/></th>
                <th onClick={() => requestSort('surfaceWater')}>Surface water <SortIcon/></th>
                <th onClick={() => requestSort('population')}>Population <SortIcon/></th>
                </tr>
            </thead>
            <tbody>
            {items.map(planet => {
                return (<tr key={planet.id} >
                <td style={{textAlign:"left", paddingLeft:"10px"}}>{planet.name || "unknown"}</td>
                <td>{planet.rotationPeriod || "unknown"}</td>
                <td>{planet.orbitalPeriod || "unknown"}</td>
                <td>{planet.diameter || "unknown"}</td>
                <td>{planet.climates.join(" ") || "unknown"}</td>
                <td>{planet.surfaceWater || "unknown"}</td>
                <td>{planet.population || "unknown"}</td>
            </tr>)
            })
            }
            </tbody>

        </Table>
    )
}

export default FilmTable

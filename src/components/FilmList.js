import React from 'react'
import styled from "styled-components";

import { getData } from '../utils/getData';
import Film from './Film';

const FilmWrapper = styled.div`
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: bold;
    color: #5FBBCF;
    max-width: 100%;

    @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

const FilmList = () => {
    const films = getData();
    return (
        <div style={{width: "100%"}} >
            {films.map(film => <FilmWrapper key={film.id}>  <Film title={film.title} planets={film.planets} /> <br/> </FilmWrapper>)}

        </div>
    )
}

export default FilmList

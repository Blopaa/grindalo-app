import styled from '@emotion/styled'
import React from 'react'
import {ReactComponent as NotFound} from '../../../assets/icons/not_found.svg'

const NotFoundSpot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg{
        width: 15rem;
        height: auto;
    }
    p{
        color: ${({theme}) => theme.colors.secondary.base};
        font-size: 1rem;
        font-family: sans-serif;
        font-weight: bold;
    }
`

const NotSpotFoundMolecule = () => {
    return (
        <NotFoundSpot>
            <NotFound/>
            <p>No se encontro ningun spot :(</p>
        </NotFoundSpot>
    )
}

export default NotSpotFoundMolecule

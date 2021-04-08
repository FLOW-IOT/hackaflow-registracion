import React from 'react'
import LogoFlow from '../assets/LOGOBUENO.JPG'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-height: 150px;
    padding: 30px 15px 45px 25px;
`

const Header = () => {
    return (
        <Container>
            <img src={LogoFlow}/>
        </Container>
    )
}

export default Header

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-height: 130px;
    padding: 25px;
    color: white;
    font-family: 'roboto', sans-serif;
    font-weight: bold;
    font-size: 36px;
    background-color: #1E1E1E;
`

const Navbar = () => {
    return (
        <Container>
            <h2>Mi cuenta</h2>
        </Container>
    )
}

export default Navbar

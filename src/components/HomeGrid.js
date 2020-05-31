import React from 'react'
import styled from 'styled-components'

import Cover from './Cover'

const StyledHomeGrid = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const HomeGrid = ({ list }) => (
    <StyledHomeGrid>
        {list.map(id => (
            <Cover key={id} {...{ id }} />
        ))}
    </StyledHomeGrid>
)

export default HomeGrid

import React from 'react'
import styled from 'styled-components'

const StyledHeadline = styled.p`
    padding: 15px 5px 0 5px;
    border-top: 1px solid var(--primary);
`

const Headline = ({ text }) => <StyledHeadline>{text}</StyledHeadline>

export default Headline

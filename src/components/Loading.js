import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div {
        position: relative;
        width: 640px;
        height: 640px;

        div {
            display: inline-block;
            position: absolute;
            width: 160px;
            background: var(--yellow);
            animation: load 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        div:nth-child(1) {
            left: 0;
            animation-delay: -0.24s;
        }
        div:nth-child(2) {
            left: 240px;
            animation-delay: -0.12s;
        }
        div:nth-child(3) {
            left: 480px;
            animation-delay: 0;
        }

        @keyframes load {
            0% {
                top: 0;
                height: 640px;
            }
            50%,
            100% {
                top: 160px;
                height: 320px;
            }
        }
    }
`

const Loading = () => {
    return (
        <StyledLoading>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyledLoading>
    )
}

export default Loading

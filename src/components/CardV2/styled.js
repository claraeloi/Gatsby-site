import styled, { css } from "styled-components";

export const CardV2Wrapper = styled.div`
    background: ${ props => props.background ? props.background: '#ff69b4'};

    h5{
        color: #ffcce6;
    }

    p{
        color: #ffcce6;
    }

    ${props =>
        props.primary && 
        css`
            background: #b54ee4;

            h5{
                color: #ecd3f8;
            }

            p{
                color: #ecd3f8;
            }
        `
    };
`
import styled, { css } from "styled-components";
import Icons from "../../components/Icons"

export const EmailWrapper = styled(Icons.Email)`
    color: ${ props => props.color ? props.color: '#ff1a8c'};
    width: ${ props => props.width ? props.width: '30px'};

    ${props =>
        props.secondary && 
        css`
            color: #ff1a8c;
            width: 30px;
            margin-right: 10px
        `
    };
`

export const TelephoneWrapper = styled(Icons.Telephone)`
    color: #ff1a8c;
    width: 30px;
    margin-right: 10px
`

export const LocationWrapper = styled(Icons.Location)`
    color: #ff1a8c;
    width: 30px;
    margin-right: 10px
`
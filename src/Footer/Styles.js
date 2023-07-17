import styled from "styled-components"

export const FooterSection = styled.footer`
    margin-top: 100px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: darkblue;
    }
    h3{
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        
        &:hover{
            cursor: pointer;
        }

        @media(max-width: 768px){
            font-size: 1.5rem;
        }
    }
`
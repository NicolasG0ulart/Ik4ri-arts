import styled from "styled-components"
import SearchImg from "../assets/search.png"

export const Header = styled.header`
    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
export const InputSearch = styled.input`
    background-color: #EBEBEB;
    border-radius: 4px;
    height: 40px;
    width: 644px;
    border: none;
    outline: none;

    font-size: 14px;
    color: #737373;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    padding-inline: 30px;

    background-image: url(${SearchImg});
    background-repeat: no-repeat;
    background-position: right center;
    @media(max-width: 1280px){
        width: 450px;
    }
    @media(max-width: 1280px){
        display: none;
    }
`
export const Button = styled.button`
    background-color: #3772FF;
    border-radius: 4px;
    height: 40px;
    width: 188px;
    border: none;

    font-size: 14px;
    color: #F9F9F9;
    font-family: 'Inter', sans-serif;
    font-weight: 700;

    &:hover{
        cursor: pointer;
    }
    @media(max-width: 1280px){
        width: 130px;
    }
    @media(max-width: 768px){
        width: 100px;
        height: 35px;
    }
`
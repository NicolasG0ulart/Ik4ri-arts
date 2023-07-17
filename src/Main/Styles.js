import styled from "styled-components"

export const Main = styled.main`
    margin-top: 100px;
    wdith: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media(max-width: 768px){
        margin-top: 30px;
        gap: 50px;
    }

`
export const FirstSection = styled.section`
    display: flex;
    justify-content: space-between;
`
export const TextsLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    h1{
        font-family: 'Inter', sans-serif;
        font-size: 3rem;
        font-weight: 600;
        width: 570px;
        @media(max-width: 768px){
            width: auto;
            font-size: 1.5rem;
        }
    }
    button{
        background-color: #3772FF;
        border-radius: 4px;
        height: 40px;
        width: 188px;
        border: none;
        font-size: 14px;
        color: #F9F9F9;
        font-weight: 700;
    
        &:hover{
            cursor: pointer;
        }
        @media(max-width: 768px){
            width: 100%;
        }
        @media(max-width: 400px){
            width: 90vw;
        }
    }
    @media(max-width: 1280px){
        gap: 30px;
    }
    @media(max-width: 768px){
        gap: 15px;
    }
`
export const SubTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: #737373;
    @media(max-width: 768px){
        font-size: 14px;
    }
`
export const Numbers = styled.div`
    margin-top: 40px;
    display: flex;

    div{
        width: 120px;
        h3{
            font-size: 2rem;
            font-weight: 600;
            @media(max-width: 768px){
                font-size: 1.5rem;
            }
            @media(max-width: 475px){
                font-size: 1.3rem;
            }
        }
        p{
            font-size: 1rem;
            font-weight: 500;
            color: #737373;
            @media(max-width: 768px){
                font-size: 14px;
            }
        }
        @media(max-width: 475px){
            width: 110px;
        }
        @media(max-width: 475px){
            width: 100px;
        }
    }
    @media(max-width: 768px){
        margin-top: 0;
    }
`
export const ImageRight = styled.img`
    border-radius: 4px;
    height: 430px;
    @media(max-width: 1280px){
        display: none;
    }
`
export const SecondSection = styled.section`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1280px){
        flex-direction: column;
        gap: 30px;
    }
`
export const ImagesLeft = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 768px){
        flex-direction: column;
    }

`
export const ImagesSectionTwo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 4px;
    @media(max-width: 768px){
        width: 80vw;
        height: 80vw;
    }
    @media(max-width: 475px){
        width: 90vw;
        height: 90vw;
    }
`
export const TextRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        color: #0C0C0C;
        font-size: 2.5rem;
        font-weight: 500;
        width: 330px;
        @media(max-width: 768px){
            font-size: 1.25rem;
        }
        @media(max-width: 400px){
            width: 100%;
        }
    }
    button{
        background-color: #3772FF;
        border-radius: 4px;
        height: 40px;
        width: 188px;
        border: none;
        font-size: 14px;
        color: #F9F9F9;
        font-weight: 700;
    
        &:hover{
            cursor: pointer;
        }
        @media(max-width: 768px){
            width: 100%;
        }
        @media(max-width: 400px){
            width: 90vw;
        }
    }
    
    @media(max-width: 1280px){
        gap: 30px;
    }
`
export const LastSection = styled.section`    
    h3{
        color: #0C0C0C;
        font-size: 2.5rem;
        font-weight: 500;
        @media(max-width: 768px){
            font-size: 1.25rem;
        }
    }
`
export const ImagesLast = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width: 768px){
        gap: 20px;
    }
`
export const ImagesLastSection = styled.img`
    width: 20vw;
    border-radius: 4px;
    @media(max-width: 1024px){
        width: 25vw;
    }
    @media(max-width: 768px){
        width: 80vw;
    }
    @media(max-width: 475px){
        width: 90vw;
    }
`
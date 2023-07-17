import React from "react";
import * as S from "./Styles"

//images
import ImageTop from "../assets/fushiguro.PNG"
import Naruto from "../assets/naruto.PNG"
import Muchiro from "../assets/muichiro.PNG"
import Dragon from "../assets/dragon.PNG"
import CronoMarle from "../assets/cronomarle.PNG"
import Kame from "../assets/kame.PNG"
import Shikamaru from "../assets/shikamaru.PNG"


export default function Main(){

    return(
        <S.Main>
            <S.FirstSection>
                <S.TextsLeft>
                    <h1>Descubra novos artistas e suas obras</h1>
                    <S.SubTitle>Uma nova geração de jovens artistas surgem</S.SubTitle>
                    <button>EXPLORAR</button>
                    <S.Numbers>
                        <div>
                            <h3>+2 mil</h3>
                            <p>Artistas</p>
                        </div>
                        <div>
                            <h3>+7 mil</h3>
                            <p>Vendas</p>
                        </div>
                        <div>
                            <h3>+16 mil</h3>
                            <p>Avaliações</p>
                        </div>
                    </S.Numbers>
                </S.TextsLeft>
                <S.ImageRight src={ImageTop} alt="Uma arte de Ikari"/>
            </S.FirstSection>

            <S.SecondSection>
                <S.ImagesLeft>
                    <S.ImagesSectionTwo src={Naruto} alt="Arte de ikari"/>
                    <S.ImagesSectionTwo src={Muchiro} alt="Arte de ikari"/>
                    <S.ImagesSectionTwo src={Dragon} alt="Arte de ikari"/>
                </S.ImagesLeft>
                <S.TextRight>
                    <h3>
                        Confira as últimas coleções
                    </h3>
                    <button>VER MAIS</button>
                </S.TextRight>
            </S.SecondSection>

            <S.LastSection>
                <h3>Mais algumas artes</h3>
                <S.ImagesLast>
                    <S.ImagesLastSection href="youtube.com" src={CronoMarle} alt="Arte de ikari"/>
                    <S.ImagesLastSection src={Kame} alt="Arte de ikari"/>
                    <S.ImagesLastSection src={Shikamaru} alt="Arte de ikari"/>
                </S.ImagesLast>
            </S.LastSection>
        </S.Main>
    )
}
import React from "react";
import * as S from "./Styles"

export default function Header(){

    return(
        <S.Header>
            <h3>Art-Ikari</h3>
            <S.InputSearch type="text" placeholder="Buscar"/>
            <S.Button>ENTRAR</S.Button>
        </S.Header>
    )
}
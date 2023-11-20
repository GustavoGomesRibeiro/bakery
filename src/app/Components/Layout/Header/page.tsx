import React from "react";

import * as S from "./styled";

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.ContentLogo>
          <S.Logo>LOGO</S.Logo>
        </S.ContentLogo>

        <S.ContentLinks>
          <S.Ul>
            <S.Link>Home</S.Link>
            <S.Link>Home 2</S.Link>
            <S.Link>Home 3</S.Link>
            <S.Link>Home 4</S.Link>
          </S.Ul>
        </S.ContentLinks>
      </S.Content>
    </S.Container>
  );
}

import styled from "styled-components";

export const LogoStyled = styled.a`
  padding: 20px 0;
  border-radius: 10px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const FirstWord = styled.span`
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

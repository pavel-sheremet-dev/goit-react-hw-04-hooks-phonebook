import styled from "styled-components";

export const SectionStyled = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;

  /* @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 200px;
    }
  } */
`;

export const SectionTitle = styled.h1`
  margin-bottom: 20px;
  font-size: ${({ hLevel }) => {
    if (hLevel === "h1") {
      return "25px";
    }
    if (hLevel === "h2") {
      return "25px";
    }
  }};
  ${({ visuallyHidden }) =>
    visuallyHidden &&
    `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  `}
`;

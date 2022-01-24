import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 10px;
  padding-bottom: 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;

  ${({ isHidden }) =>
    isHidden &&
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
  `};
`;

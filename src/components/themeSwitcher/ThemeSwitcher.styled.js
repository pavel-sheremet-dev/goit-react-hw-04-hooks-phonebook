import styled from "styled-components";

export const ThemeBtn = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
  background-color: transparent;
  cursor: pointer;
`;

export const ThemeIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.fontColor};
  transform: rotate(0.12turn) scale(${({ scale }) => scale});
  opacity: ${({ opacity }) => opacity};
  transition: opacity 125ms linear, fill 125ms linear, transform 125ms linear;
`;

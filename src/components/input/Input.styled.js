import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputName = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputField = styled.input`
  display: block;
  width: 250px;
  height: 40px;
  padding-left: 10px;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputColor};
  outline: none;
  cursor: pointer;
  transition: background-color 250ms linear;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.placeholderFontColor};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentinputColor};
  }
`;

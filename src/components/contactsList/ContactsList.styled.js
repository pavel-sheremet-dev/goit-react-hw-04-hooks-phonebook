import styled from "styled-components";

export const Contacts = styled.ul`
  @media screen and (min-width: 480px) {
    width: calc(100% + 10px);
    height: calc(100vh - 120px);
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: ${({ theme }) => theme.colors.scrollBackground};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.mainBrandColor};
    }
  }
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.p`
  display: flex;
  flex-direction: column;
  min-width: 170px;
`;

export const ContactName = styled.span`
  margin-bottom: 5px;
`;

export const ContactPhone = styled.span`
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

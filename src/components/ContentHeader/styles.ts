import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px; 
  position: sticky; 
  top: 0px; 
  z-index: 55;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${({ theme }) => theme.colors.white};

    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;

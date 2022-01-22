import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 25px 0;
  position: sticky;
  top: -25px;
  z-index: 55;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: 760px) {
    flex-direction: column;
  }
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

  @media (max-width: 760px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Controllers = styled.div`
  display: flex;

  @media (max-width: 760px) {
    width: 100%;
    justify-content: space-between;
  }
`;

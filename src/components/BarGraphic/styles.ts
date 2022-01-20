import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
`;

export const LeftSide = styled.div`
  padding: 30px 20px;

  > h2 {
      margin-bottom: 10px;
      padding-left: 16px;
  }
`;

export const RightSide = styled.div`
  flex: 1; 
  height: 160px;
`;

export const LegendContainer = styled.ul`
  list-style: none;
  width: 100%;
  max-height: 175px;
  /* background-color: red; */
  overflow-y: scroll; 
  display: flex;
  justify-content: center;
  align-items: center;


  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const Legend = styled.li`
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 5px; 
  width: 50%;

  > div {
    background-color: ${(props) => props.color};
    width: 45px;
    height: 45px;
    border-radius: 5px;
    font-style: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28px; 
    text-align: center;
  }

  > span {
    margin-left: 8px;
  }
`;
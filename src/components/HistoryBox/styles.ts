import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin: 10px 0;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
  padding: 0 17px;
  > h2 {
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  min-width: 25%;
  display: flex;
  justify-content: space-evenly;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 7px;

  > div {
    background-color: ${(props) => props.color};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    font-style: 18px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > span {
    margin-left: 8px;
  }
`;

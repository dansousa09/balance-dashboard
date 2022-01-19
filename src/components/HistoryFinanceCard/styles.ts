import styled from "styled-components";

interface ITagColorProps {
  color: string;
}

export const Container = styled.li`
  position: relative;
  width: 100%;
  margin: 10px 0;
  padding: 16px 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding-left: 10px;
  }
  > div span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TagColor = styled.div<ITagColorProps>`
  background-color: ${(props) => props.color};
  position: absolute;
  width: 10px;
  height: 60%;
  left: 0;
  border-radius: 1px;
`;

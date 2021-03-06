import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};

    margin: 0 10px;

    transition: all ease 0.3s;
    opacity: 0.4;
    transform: scale(0.95);

    &:hover {
      opacity: 0.7;
      transform: scale(1);
    }
  }

  .tag-filter-recurrent::after {
    content: "";
    display: block;
    width: 55px;
    margin: 4px auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }
  .tag-filter-eventual::after {
    content: "";
    display: block;
    width: 55px;
    margin: 2px auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }

  .tag-actived {
    opacity: 1;
    transform: scale(1);
  }
`;

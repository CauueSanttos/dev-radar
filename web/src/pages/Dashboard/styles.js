import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 320px;
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  div + div {
    margin-top: 20px;
  }

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DevList = styled.main`
  flex: 1;
  margin-left: 30px;
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;

  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
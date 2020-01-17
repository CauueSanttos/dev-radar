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

  form {
    margin-top: 30px;

    button {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background: #7d40e7;
      border-radius: 2px;
      padding: 15px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.5s;

      &:hover {
        background: #6931ca;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const InputBlock = styled.div`
  label {
    color: #ACACAC;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  div {
    margin-top: 0 !important;
  }
`

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

export const DevItem = styled.li`
  background: #FFF;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }

  a {
    color: #8e4dff;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: #5a2ea6;
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
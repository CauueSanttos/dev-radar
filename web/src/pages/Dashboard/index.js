import React from 'react';

import { 
  Container, 
  Sidebar, 
  InputGroup, 
  InputBlock, 
  DevList, 
  DevItem,
  UserInfo
} 
from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <form>
          <InputBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </InputBlock>

          <InputBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </InputBlock>

          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </InputBlock>
            <InputBlock>
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </InputBlock>
          </InputGroup>

          <button type="submit">Salvar</button>
        </form>
      </Sidebar>

      <DevList>
        <ul>
          <DevItem>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/38498938?s=460&v=4" alt="Cauê Santos"/>
              <UserInfo>
                <strong>Cauê Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </UserInfo>
            </header>
            <p>Coding is life!</p>
            <a href="https://github.com/CauueSanttos">Acessar perfil no Github</a>
          </DevItem>
          <DevItem>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/38498938?s=460&v=4" alt="Cauê Santos"/>
              <UserInfo>
                <strong>Cauê Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </UserInfo>
            </header>
            <p>Coding is life!</p>
            <a href="https://github.com/CauueSanttos">Acessar perfil no Github</a>
          </DevItem>
          <DevItem>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/38498938?s=460&v=4" alt="Cauê Santos"/>
              <UserInfo>
                <strong>Cauê Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </UserInfo>
            </header>
            <p>Coding is life!</p>
            <a href="https://github.com/CauueSanttos">Acessar perfil no Github</a>
          </DevItem>
          <DevItem>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/38498938?s=460&v=4" alt="Cauê Santos"/>
              <UserInfo>
                <strong>Cauê Santos</strong>
                <span>ReactJS, React Native, Node.js</span>
              </UserInfo>
            </header>
            <p>Coding is life!</p>
            <a href="https://github.com/CauueSanttos">Acessar perfil no Github</a>
          </DevItem>
        </ul>
      </DevList>
    </Container>
  );
}

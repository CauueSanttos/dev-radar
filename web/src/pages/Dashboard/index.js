import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <form autoComplete="off" onSubmit={handleAddDev}>
          <InputBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </InputBlock>

          <InputBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </InputBlock>

          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
                required 
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
                required 
              />
            </InputBlock>
          </InputGroup>

          <button type="submit">Salvar</button>
        </form>
      </Sidebar>

      <DevList>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <UserInfo>
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </UserInfo>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </DevItem>
          ))}
        </ul>
      </DevList>
    </Container>
  );
}

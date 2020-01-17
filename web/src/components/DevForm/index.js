import React, { useState, useEffect } from 'react';

import { Container, InputGroup, InputBlock } from './styles';

export default function DevForm({ onSubmit }) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <Container autoComplete="off" onSubmit={handleSubmit}>
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
    </Container>
  );
}

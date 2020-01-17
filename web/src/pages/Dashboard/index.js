import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Sidebar, DevList } from './styles';

import DevForm from '../../components/DevForm';
import DevItem from '../../components/DevItem';

export default function Dashboard() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </Sidebar>

      <DevList>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </DevList>
    </Container>
  );
}

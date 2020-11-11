import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit"> Pesquisar </button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/31252029?s=460&u=f18e74c573f5755d6d266c06af0809c2ab52d526&v=4"
          alt=""
        />
        <div>
          <strong>AndreVTavares/nextlevelweek3-web</strong>
          <p>App realizado na Next Level Week 3 da rocketseat</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/31252029?s=460&u=f18e74c573f5755d6d266c06af0809c2ab52d526&v=4"
          alt=""
        />
        <div>
          <strong>AndreVTavares/nextlevelweek3-web</strong>
          <p>App realizado na Next Level Week 3 da rocketseat</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/31252029?s=460&u=f18e74c573f5755d6d266c06af0809c2ab52d526&v=4"
          alt=""
        />
        <div>
          <strong>AndreVTavares/nextlevelweek3-web</strong>
          <p>App realizado na Next Level Week 3 da rocketseat</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;

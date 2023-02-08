import { Header } from '@components/Header';
import { Scoreboard } from '@components/Scoreboard';

import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Scoreboard />
    </Container>
  )
};
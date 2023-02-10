import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Scoreboard } from '@components/Scoreboard';

import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Scoreboard />
      <Button />
    </Container>
  )
};
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Scoreboard } from '@components/Scoreboard';

import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Scoreboard />
      <Button icon='add' text='Nova refeição' />
    </Container>
  )
};
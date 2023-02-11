import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Scoreboard } from '@components/Scoreboard';

import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Scoreboard isButton number='90,86%' text='das refeições dentro da dieta ' />
      <Button icon='add' text='Nova refeição' />
      <Input />
    </Container>
  )
};
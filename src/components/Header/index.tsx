import { Container, Logo } from './styles'

import logo from '@assets/logo.png';
import { IconComponent } from '@components/Icon';
import THEME from '@theme/index';

export const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <IconComponent icon='account-circle' size={THEME.FONT_SIZE.XXXL}  />
    </Container>
  )
}
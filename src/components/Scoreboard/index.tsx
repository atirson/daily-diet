import { IconComponent } from '@components/Icon';
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Subtitle, ContainerIcon, ScoreboardStyleProps } from './styles'
import THEME from '@theme/index';

type Props = TouchableOpacityProps & {
  type?: ScoreboardStyleProps;
};

export const Scoreboard = ({ type = 'SUCCESS', ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <ContainerIcon>
        <IconComponent 
          icon='north-east' 
          size={THEME.FONT_SIZE.XL} 
          color={
            type === 'SUCCESS' ? THEME.COLORS.GREEN_DARK :
            THEME.COLORS.RED_DARK
          } 
        />
      </ContainerIcon>
      <Title>90,26%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}
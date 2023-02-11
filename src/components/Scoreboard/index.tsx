import { IconComponent } from '@components/Icon';
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Subtitle, ContainerIcon, ScoreboardStyleProps } from './styles'
import THEME from '@theme/index';

type Props = TouchableOpacityProps & {
  type?: ScoreboardStyleProps;
  isButton?: boolean;
  number: string;
  text: string;
};

export const Scoreboard = ({ type = 'SUCCESS', isButton = false, number, text, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <ContainerIcon>
        {
          isButton &&
          <IconComponent 
            icon='north-east' 
            size={THEME.FONT_SIZE.XL} 
            color={
              type === 'SUCCESS' ? THEME.COLORS.GREEN_DARK :
              THEME.COLORS.RED_DARK
            } 
          />
        }
        
      </ContainerIcon>
      <Title>{number}</Title>
      <Subtitle>{text}</Subtitle>
    </Container>
  )
}
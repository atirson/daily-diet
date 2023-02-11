import { TouchableOpacityProps } from 'react-native';
import { Container, Hour, Title, Type, CardStyleProps } from './styles'

type Props = TouchableOpacityProps & {
  hour: string;
  title: string;
  type: CardStyleProps;
}

export const Card = ({ hour, title, type, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Title>{title}</Title>
      <Type type={type} />
    </Container>
  )
}
import { Container, Icon } from './styles'

import { MaterialIcons } from '@expo/vector-icons'

type Props =  {
  icon: keyof typeof MaterialIcons.glyphMap;
  size: number;
  color?: string;
};

export const IconComponent = ({ icon, size, color }: Props) => {
  return (
    <Container>
      <Icon name={icon} size={size} color={color} />
    </Container>
  )
}
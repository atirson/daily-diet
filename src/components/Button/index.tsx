import { IconComponent } from '@components/Icon';
import { Text, TouchableOpacityProps } from 'react-native';
import { ButtonComponent, ButtonText, ButtonStyleProps } from './styles';
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  type?: ButtonStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export const Button = ({ type = 'DARK', icon, ...rest }: Props) => {
  return (
    <ButtonComponent type={type} {...rest}>
      {
        icon && 
          <IconComponent 
            icon={icon} 
            size={24} 
            color={
              type === 'DARK' ? '#fff' : '#000'
            } 
          />
      }
      <ButtonText type={type}>Teste</ButtonText>
    </ButtonComponent> 
  )
};
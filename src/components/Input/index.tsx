import { TextInputProps } from 'react-native';
import { Container, Label, InputComponent } from './styles';

type Props = TextInputProps & {
  label: string;
  isInputArea?: boolean;
};

export const Input = ({label, isInputArea = false, ...rest}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent
        multiline
        numberOfLines={isInputArea ? 8 : 3}
        scrollEnabled
        {...rest}
      />
    </Container>
  )
}
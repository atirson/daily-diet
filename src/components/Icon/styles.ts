import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  color?: string;
}

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, color }) => ({
  color: color ? color : theme.COLORS.GRAY_700
}))``;
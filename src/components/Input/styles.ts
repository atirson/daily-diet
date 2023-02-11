import styled, { css } from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

export const Container = styled.View`
  height: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputComponent = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  cursorColor: theme.COLORS.GRAY_400,
}))`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 16px;
  
`;
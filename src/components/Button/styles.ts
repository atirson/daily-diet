import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = 'DARK' | 'LIGHT';

type Props = {
  type?: ButtonStyleProps;
}


export const ButtonComponent = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  margin-top: 20px;

  ${({ theme, type }) => type === 'DARK' && css`
    background-color: ${theme.COLORS.GRAY_600};
  `}

  ${({ theme, type }) => type === 'LIGHT' && css`
    background-color: ${theme.COLORS.GRAY_100};
    border: 1.25px solid ${theme.COLORS.GRAY_600};
  `}

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<Props>`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  ${({ theme, type }) => type === 'DARK' && css`
    color: ${theme.COLORS.GRAY_100};
  `}

  ${({ theme, type }) => type === 'LIGHT' && css`
    color: ${theme.COLORS.GRAY_600};
  `}
`;
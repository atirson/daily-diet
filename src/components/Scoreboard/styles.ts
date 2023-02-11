import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ScoreboardStyleProps = 'SUCCESS' | 'FAILURE' | 'DEFAULT';

type Props = {
  type: ScoreboardStyleProps; 
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;

  ${({ theme, type }) => type === 'SUCCESS' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `}

  ${({ theme, type }) => type === 'FAILURE' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `}

  ${({ theme, type }) => type === 'DEFAULT' && css`
    background-color: ${theme.COLORS.GRAY_200};
  `}

  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const ContainerIcon = styled.View`
  width: 100%;
  top: 5px;
  right: 5px;
  align-items: flex-end;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
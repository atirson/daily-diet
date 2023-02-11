import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CardStyleProps = 'SUCCESS' | 'FALIURE';

type Props = {
  type: CardStyleProps;
}

export const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
   ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_700};
      font-family: ${theme.FONT_FAMILY.BOLD};
   `}

    margin-left: 16px;
    padding-right: 10px;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-left: 10px;
`;

export const Type = styled.View<Props>`
  height: 14px;
  width: 14px;
  border-radius: 7px;

  ${({ theme, type }) => type === 'SUCCESS' && css`
     background-color: ${theme.COLORS.GREEN_MID};
  `}

  ${({ theme, type }) => type === 'FALIURE' && css`
    background-color: ${theme.COLORS.RED_MID};
  `}

  margin-right: 16px;
  position: absolute;
  right: 0;
`;
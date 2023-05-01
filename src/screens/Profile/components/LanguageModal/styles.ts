import styled from 'styled-components/native';

export const OutSideArea = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
`;

export const OptionsView = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.ultraLightGray};
  padding: 8px 0;
  justify-content: space-between;
`;

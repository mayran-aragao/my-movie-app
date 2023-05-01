import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.75 })`
  flex-direction: row;
  width: 100%;
  max-height: 150px;
  elevation: 3;
  background-color: ${({ theme }) => theme.colors.ultraLightGray};
  border-radius: 8px;
`;

export const Description = styled.View`
  flex: 1;
  flex-shrink: 1;
  margin-left: 10px;
  gap: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  justify-content: space-between;
  padding-top: 5px;
  padding-right: 5px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 150px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

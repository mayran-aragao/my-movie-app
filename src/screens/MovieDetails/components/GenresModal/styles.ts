import styled from 'styled-components/native';

export const OutSideArea = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  padding-horizontal: 20px;
`;

export const GenresList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  height: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const GenreOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
`;

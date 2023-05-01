import { FlatList, FlatListProps, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { IMovieDetails } from '../MovieDetails/interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${24 + (StatusBar.currentHeight || 24)}px 20px 0 20px;
  justify-content: center;
`;

export const FavoriteList = styled(
  FlatList as new (
    props: FlatListProps<IMovieDetails>
  ) => FlatList<IMovieDetails>
).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    gap: 20,
  },
})`
  flex: 1;
`;

export const ImageView = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 224px;
  align-self: center;
`;

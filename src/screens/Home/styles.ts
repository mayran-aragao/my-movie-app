import { FlatList, FlatListProps, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { IMovieProps } from './interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${24 + (StatusBar.currentHeight || 24)}px 20px 0 20px;
`;

export const MovieList = styled(
  FlatList as new (props: FlatListProps<IMovieProps>) => FlatList<IMovieProps>
).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`
  flex: 1;
`;

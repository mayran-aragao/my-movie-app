import { FlatList, FlatListProps, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { IMovieProps } from './interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${24 + (StatusBar.currentHeight || 24)}px 20px 0 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

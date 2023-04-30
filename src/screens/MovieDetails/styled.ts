import styled from 'styled-components/native';
import { ICastDetails, IFavoriteButtonProps } from './interfaces';
import { FlatList, FlatListProps } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 230px;
  border-radius: 8px;
  border-width: 0.5px;
  margin-right: 10px;
`;

export const ImageView = styled.View``;

export const TextView = styled.View`
  flex-shrink: 1;
`;

export const Rating = styled.View`
  flex-direction: row;
  width: 60px;
  height: 60px;
  border-width: 1px;
  border-radius: 30px;
  border-color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Body = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const CastList = styled(
  FlatList as new (props: FlatListProps<ICastDetails>) => FlatList<ICastDetails>
)`
  flex: 1;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Favorite = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})<IFavoriteButtonProps>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme, isMyFavorite }) =>
    isMyFavorite ? theme.colors.danger : theme.colors.success};
  justify-content: center;
  align-items: center;
`;

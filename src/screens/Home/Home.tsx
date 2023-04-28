import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import ApiService from '../../shared/services/ApiService';

import { Input } from '../../components/Input';
import MovieCard from './components/MovieCard';

import { IMovieProps } from './interfaces';

import { Container, MovieList } from './styles';
import { ListRenderItem } from 'react-native';

const Home = ({
  navigation,
}: NativeStackScreenProps<any, 'Home'>): JSX.Element => {
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [page, setPage] = useState<number>(1);

  const getMovies = async () => {
    try {
      const { data } = await ApiService.get('/movie/popular', {
        params: { language: 'pt-BR', page },
      });

      setMovies((prevState) => [...prevState, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const renderItem: ListRenderItem<IMovieProps> = ({ item }) => {
    return <MovieCard item={item} />;
  };

  return (
    <Container>
      <Input placeholder='Pesquisar por titulo do filme' leftIcon='magnify' />

      <MovieList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item: any) => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        refreshing={false}
        onRefresh={() => setPage(1)}
        onEndReached={() => setPage((count) => count + 1)}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default Home;

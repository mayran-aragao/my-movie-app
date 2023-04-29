import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import ApiService from '../../shared/services/ApiService';

import { Input } from '../../components/Input';
import MovieCard from './components/MovieCard';

import { IMovieProps } from './interfaces';

import { Container, MovieList } from './styles';
import { ListRenderItem } from 'react-native';
import { Loading } from '../../components/Loading';

let searchTimerID: NodeJS.Timeout;

const Home = ({
  navigation,
}: NativeStackScreenProps<any, 'Home'>): JSX.Element => {
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const { data } = await ApiService.get('/movie/popular', {
        params: { language: 'pt-BR', page },
      });

      setMovies(
        page == 1
          ? data.results
          : (prevState) => [...prevState, ...data.results]
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetSearchTerm = (typedWord: string) => {
    clearTimeout(searchTimerID);

    setSearchTerm(typedWord);

    if (!typedWord.length) {
      setMovies([]);
      setPage(1);
      getMovies();

      return;
    }

    searchTimerID = setTimeout(() => handleSearchMovie(typedWord), 400);
  };

  const handleSearchMovie = async (typedWord: string) => {
    try {
      setIsLoading(true);

      const { data } = await ApiService.get('/search/movie', {
        params: { query: typedWord },
      });

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshing = () => {
    if (searchTerm.length) {
      return;
    }

    setPage(1);
  };

  const handleEndOfList = () => {
    if (searchTerm.length) {
      return;
    }

    setPage((page) => page + 1);
  };

  const handleOnPressMovieCard = (id: number) => {
    navigation.navigate('MovieDetails', { id });
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const renderItem: ListRenderItem<IMovieProps> = ({ item }) => {
    return <MovieCard item={item} onPress={handleOnPressMovieCard} />;
  };

  return (
    <Container>
      <Input
        placeholder='Pesquisar por titulo do filme'
        leftIcon='magnify'
        onChangeText={handleSetSearchTerm}
        value={searchTerm}
      />

      {!movies.length && <Loading isLoading={isLoading} size='large' />}

      {!!movies.length && (
        <MovieList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item: IMovieProps, index) => `${item.id + index}`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          refreshing={false}
          onRefresh={handleRefreshing}
          onEndReached={handleEndOfList}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<Loading isLoading={isLoading} size='large' />}
        />
      )}
    </Container>
  );
};

export default Home;

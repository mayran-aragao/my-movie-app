import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ApiService from '../../shared/services/ApiService';
import useDebounce from '../../shared/hooks/useDebounce';

import { Input } from '../../components/Input';
import MovieCard from './components/MovieCard';
import { Loading } from '../../components/Loading';
import Icon from '../../components/Icon';
import { ToastBottomAndroid } from '../../components/ToastBottomAndroid';
import GenresModal from './components/GenresModal';
import { useAppSelector } from '../../store/hooks/useAppSelector';

import { IGenresProps, IGenresResponse, IMovieProps } from './interfaces';

import { Container, MovieList, Header, Image, ImageView } from './styles';

const Home = ({
  navigation,
}: NativeStackScreenProps<any, 'Home'>): JSX.Element => {
  const listRef = useRef<FlatList>(null);
  const language = useAppSelector((store) => store.language.language);
  const sortBy = useAppSelector((store) => store.sortBy.sortBy);

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [genres, setGenres] = useState<IGenresProps[]>([]);
  const [filterGenre, setFilterGenre] = useState<number | null>(null);

  const debounceSearchTerm = useDebounce<string>(searchTerm, 500);

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const endPoint = getEndpoint();

      const requestParams = {
        page,
        language,
        sort_by: sortBy,
        ...(debounceSearchTerm.length ? { query: debounceSearchTerm } : {}),
        ...(filterGenre ? { with_genres: filterGenre } : {}),
      };

      const { data } = await ApiService.get(endPoint, {
        params: requestParams,
      });

      setMovies(
        page == 1
          ? data.results
          : (prevState) => [...prevState, ...data.results]
      );

      if (page == 1) {
        listRef.current?.scrollToIndex({
          animated: true,
          index: 0,
        });
      }
    } catch (error: any) {
      ToastBottomAndroid(`Aconteceu um erro: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetSearchTerm = (typedWord: string) => {
    setPage(1);
    setSearchTerm(typedWord);
  };

  const handleRefreshing = () => {
    if (page === 1) {
      getMovies();
      return;
    }

    setPage(1);
  };

  const handleEndOfList = () => {
    setPage((prev) => ++prev);
  };

  const handleOnPressMovieCard = (id: number) => {
    navigation.navigate('MovieDetails', { id });
  };

  const handleSetGenreFilter = (id: number) => {
    setShowModal(false);
    setPage(1);

    if (filterGenre == id) {
      setFilterGenre(null);
      return;
    }

    setFilterGenre(id);
  };

  const getGenresList = async () => {
    try {
      const { data } = await ApiService.get<IGenresResponse>(
        '/genre/movie/list',
        {
          params: { language, page },
        }
      );

      if (!data.genres.length) {
        return;
      }

      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const getEndpoint = () => {
    if (debounceSearchTerm) {
      return '/search/movie';
    }

    return '/discover/movie';
  };

  useEffect(() => {
    getMovies();
  }, [page, filterGenre, debounceSearchTerm, language, sortBy]);

  useEffect(() => {
    getGenresList();
  }, []);

  const renderItem: ListRenderItem<IMovieProps> = ({ item }) => {
    return <MovieCard item={item} onPress={handleOnPressMovieCard} />;
  };

  return (
    <Container>
      <GenresModal
        genres={genres}
        visible={showModal}
        onClickOutside={() => setShowModal(false)}
        onSelect={handleSetGenreFilter}
        selectedId={filterGenre}
      />

      <Header>
        <Input
          placeholder='Pesquisar por titulo do filme'
          leftIcon='magnify'
          onChangeText={handleSetSearchTerm}
          value={searchTerm}
          style={{ width: '90%' }}
        />

        <Icon
          name='filter-menu-outline'
          size={24}
          onPress={() => setShowModal(true)}
        />
      </Header>

      {!!movies.length ? (
        <MovieList
          ref={listRef}
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item: IMovieProps, index) => `${item.id}`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          refreshing={false}
          onRefresh={handleRefreshing}
          onEndReached={handleEndOfList}
          onEndReachedThreshold={0.5}
        />
      ) : (
        !isLoading && (
          <ImageView>
            <Image source={require('../../assets/no-favorites.jpg')} />
          </ImageView>
        )
      )}

      <Loading isLoading={isLoading} size='large' />
    </Container>
  );
};

export default Home;

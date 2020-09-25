// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.filteringOnChange = this.filteringOnChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  /* Função única que capta cada forma de seleção (input, select ou check)
  por meio de um if, e retorna esse filtro de acordo com o e.target,
  setando o estado de acordo com o mesmo. */
  filteringOnChange() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtered = movies;
    if (searchText) {
      filtered = movies
        .filter((movie) => movie.title.toUpperCase()
          .includes(searchText.toUpperCase()) || movie.subtitle.toUpperCase()
          .includes(searchText.toUpperCase()) || movie.storyline.toUpperCase()
          .includes(searchText.toUpperCase()));
    }
    if (bookmarkedOnly) {
      filtered = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtered = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={(e) => this.setState({ bookmarkedOnly: e.target.checked })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <AddMovie onclick={onClick} />
        <MovieList
          movies={this.filteringOnChange()}
        />

      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.Object).isRequired };

// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={title}
          data-testid="title-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={subtitle}
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderImagepath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={imagePath}
          data-testid="image-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={storyline}
          data-testid="storyline-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rate" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={rating}
          data-testid="rating-input"
          onChange={this.handleChange}
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="select" data-testid="genre-input-label">
      Gênero
        <select
          name="genre"
          value={genre}
          data-testid="genre-input"
          onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button type="button" data-testid="send-button" onClick={onClick}>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImagepath()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderGenre()}
        {this.renderButton()}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

// import FEATURED_API from './api/moviedb/';

import Movie from './components/Movie';
import SearchBar from './components/forms/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], searchTerm: '' };
  }

  componentDidMount() {
    this.getFeatured();
  }

  getFeatured = () => {
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API}&page=1`;

    axios
      .get(FEATURED_API)
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleValueChange = (value) => {
    console.log('inside handleValueChange in App');
    console.log(value);
    console.log(this.state.searchTerm);
    this.setState({ searchTerm: value });
    console.log(this.state.searchTerm);

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${value}`;

    axios
      .get(SEARCH_API)
      .then((response) => {
        console.log(response.data.results);
        this.setState({ movies: response.data.results });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const searchWord = this.state.searchTerm;

    return (
      <div>
        <SearchBar
          term={searchWord}
          onSubmit={this.handleValueChange}
          click={this.getFeatured}
        />
        <Row className='justify-content-center'>
          {this.state.movies.map((movie) => (
            <div key={movie.id}>
              <Movie movie={movie} />
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;

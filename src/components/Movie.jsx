import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../components/Movie.css';
import noImage from '../components/no-image.png';

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const Movie = (props) => {
  const image = props.movie.poster_path
    ? IMG_API + props.movie.poster_path
    : noImage;

  const overview = props.movie.overview
    ? props.movie.overview
    : 'No overview provided.';

  console.log(props.movie.overview);

  return (
    <Col>
      <Card bg='secondary' style={{ width: '20rem' }} className='mb-2 movie'>
        <Card.Img variant='top' src={image} style={{ height: '477px' }} />
        <Card.Body className='overview'>{overview}</Card.Body>
        <Card.Header className='movie-header'>
          <Row>
            <Col className='text-left text-truncate'>{props.movie.title}</Col>
            <Col className='text-right'>{props.movie.vote_average}</Col>
          </Row>
        </Card.Header>
      </Card>
    </Col>
  );
};

export default Movie;

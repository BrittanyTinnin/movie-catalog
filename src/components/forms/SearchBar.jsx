import React, { Component } from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import icon from './images/movie-icon.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const term = this.state.searchTerm;
    const onSubmit = this.props.onSubmit;

    onSubmit(term);
    this.setState({ searchTerm: '' });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Navbar bg='secondary' expand='md' className='mb-3'>
        <Navbar.Brand className='text-light'>
          <img
            src={icon}
            width='30'
            height='30'
            className='mr-1'
            alt='Movie Catalog'
          />
          Movie Catalog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar' />
        <Navbar.Collapse id='basic-navbar'>
          <Form inline className='ml-auto' onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Search'
                style={{ width: '20rem' }}
                value={this.state.searchTerm}
                onChange={this.handleChange}
                className='m-1'
              />
              <Button variant='light' className='m-1' type='submit'>
                Search
              </Button>
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { SearchCard } from './SearchCard';

export const Search = ({ getSearch, search, match }) => {
  return (
    <Container className="bg-light my-4 py-4 d-flex justify-content-around flex-wrap">
      {search.search.length > 0 ? (
        search.search.map((obj) => {
          return <SearchCard summary={obj} />;
        })
      ) : (
        <h1>uff no summary</h1>
      )}
    </Container>
  );
};

Search.prototype = {
  getSearch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getSearch })(Search);

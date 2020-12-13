import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { SearchCard } from './SearchCard';
import { getSearch } from '../../actions/search';

export const Search = ({ search, getSearch, match }) => {
  useEffect(() => {
    getSearch(match.params.field, match.params.query);
  }, [getSearch, match.params.field, match.params.query]);
  return (
    <Container className="bg-light my-4 py-4 d-flex justify-content-around flex-wrap">
      {search.search !== null && search.search.length > 0 ? (
        search.search.map((obj) => {
          return <SearchCard key={obj._id} summary={obj} />;
        })
      ) : (
        <h1>No summaries found</h1>
      )}
    </Container>
  );
};

Search.prototype = {
  search: PropTypes.object.isRequired,
  getSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getSearch })(Search);

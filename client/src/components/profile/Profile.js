import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { ProfileDeck } from './ProfileDeck';
import { ProfileInfo } from './ProfileInfo';
import { getProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { LoadingSpinner } from '../layout/LoadingSpinner';
import { getUserSummaries } from '../../actions/summary';

export const Profile = ({
  getProfile,
  auth: { user },
  profile,
  getUserSummaries,
  summary,
}) => {
  useEffect(() => {
    getProfile();
    getUserSummaries();
  }, [getProfile, getUserSummaries]);

  return (
    <Container className="bg-light my-4 py-4">
      {!profile.loading && !summary.loading ? (
        <>
          <ProfileInfo profile={profile.profile.profile} user={user} />
          {console.log(summary)}
          <Tabs
            fill
            className="d-flex justify-content-around mb-4"
            defaultActiveKey="Recent"
          >
            <Tab eventKey="Recent" title="Recent">
              <ProfileDeck cards={summary.summaries.recent} />
            </Tab>
            <Tab eventKey="Owned" title="Owned">
              <ProfileDeck cards={summary.summaries.bought} />
            </Tab>
            <Tab eventKey="Bookmarked" title="Bookmarked">
              <ProfileDeck cards={summary.summaries.bookmarked} />
            </Tab>
            <Tab eventKey="Uploaded" title="Uploaded">
              <ProfileDeck cards={summary.summaries.uploaded} />
            </Tab>
          </Tabs>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getUserSummaries: PropTypes.func.isRequired,
  summary: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  summary: state.summary,
});

export default connect(mapStateToProps, { getProfile, getUserSummaries })(
  Profile
);

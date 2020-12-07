import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { ProfileDeck } from './ProfileDeck';
import { ProfileInfo } from './ProfileInfo';
import { getProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

export const Profile = ({
  getProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const [data, setData] = useState([
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
    {
      title: 'Computer Science',
      text:
        'In computer science, a Boolean expression is an expression used in programming languages that produces a Boolean value when evaluated. A Boolean value is either true or false.',
    },
  ]);
  return (
    <Container className="bg-light my-4 py-4">
      {profile !== null ? (
        <>
          <ProfileInfo profile={profile.profile} user={user} />

          <Tabs
            fill
            className="d-flex justify-content-around mb-4"
            defaultActiveKey="Recent"
          >
            <Tab eventKey="Recent" title="Recent" block>
              <ProfileDeck cards={data} />
            </Tab>
            <Tab className="" eventKey="Owned" title="Owned">
              <ProfileDeck cards={data} />
            </Tab>
            <Tab className="" eventKey="Bookmarked" title="Bookmarked">
              <ProfileDeck cards={data} />
            </Tab>
            <Tab className="" eventKey="Uploaded" title="Uploaded">
              <ProfileDeck cards={data} />
            </Tab>
          </Tabs>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Profile);

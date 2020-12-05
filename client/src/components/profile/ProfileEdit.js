import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import {
  Image,
  Col,
  Row,
  Button,
  Alert,
  Form,
  Container,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import categoriesData from '../../utils/categoriesData.json';

const ProfileEdit = ({ setAlert }) => {
  const [profile, setProfile] = useState({
    bio: 'current bio',
    institution: 'bar ilan',
    fieldOfStudy: 'computer science',
    profileImg: 'img',
  });

  const [interests, setInterests] = useState([
    {
      name: 'Administration',
      objName: 'administration',
      checked: false,
    },
    {
      name: 'Social work',
      objName: 'socialWork',
      checked: false,
    },
    {
      name: 'Accounting',
      objName: 'accounting',
      checked: false,
    },
    {
      name: 'Humanities',
      objName: 'humanities',
      checked: false,
    },
    {
      name: 'Engineering',
      objName: 'engineering',
      checked: false,
    },
    {
      name: 'Medical Studies',
      objName: 'medicalStudies',
      checked: false,
    },
    {
      name: 'Education',
      objName: 'education',
      checked: false,
    },
    {
      name: 'Architecture',
      objName: 'architecture',
      checked: false,
    },
    {
      name: 'Computer Science',
      objName: 'computerScience',
      checked: false,
    },
    {
      name: 'Psychology',
      objName: 'psychology',
      checked: false,
    },
    {
      name: 'Social Sciences',
      objName: 'socialSciences',
      checked: false,
    },
    {
      name: 'Communication',
      objName: 'communication',
      checked: false,
    },
  ]);

  const { bio, institution, fieldOfStudy, profileImg } = profile;

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onCheck = (e) => {
    let tempState = [...interests];
    tempState[e.target.dataset.index].checked = !tempState[
      e.target.dataset.index
    ].checked;
    setInterests(tempState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //taking interests and converting to db structure
    let educations;
    let arr = [
      ...interests.map((cat) => {
        if (cat.checked) return cat.objName;
      }),
    ];
    arr = arr.filter((cat) => cat !== undefined);
    for (let index = 0; index < arr.length; index++) {
      if (index === 0) educations = arr[index];
      else educations = educations.concat(',', arr[index]);
    }

    //new profile
    const newProfile = {
      bio: profile.bio,
      school: profile.institution,
      degree: profile.fieldOfStudy,
      interests: { education: educations },
    };

    console.log(newProfile);
  };

  return (
    <Container className="bg-light my-4 py-4 ">
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row>
          <Col className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/lilach-katzabi.jpg"
                style={{ height: '125px', width: '125px' }}
                roundedCircle
                className="mb-1"
              />
              <Image
                src="/icons/upload-g.svg"
                style={{
                  width: '60px',
                  height: '60px',
                  position: 'absolute',
                }}
              />
            </div>
            <h2>Lilak Katzabi</h2>
          </Col>
        </Row>
        <hr />
        <Container className="my-4">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="institution"
                name="institution"
                value={institution}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="field Of Study"
                name="fieldOfStudy"
                value={fieldOfStudy}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <textarea
              type="text"
              placeholder="bio"
              className="form-control"
              style={{ width: '100%' }}
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Container>
        <hr />

        <Form.Label className="text-center">What are your interest?</Form.Label>

        <Form.Group className="d-flex flex-wrap justify-content-around">
          {interests.map((cat, index) => {
            return (
              <Form.Check
                className="m-2"
                type="checkbox"
                data-index={index}
                label={cat.name}
                name={cat.objName}
                checked={cat.checked}
                onChange={(e) => onCheck(e)}
              />
            );
          })}
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="mr-2">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </Container>
  );
};

ProfileEdit.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);

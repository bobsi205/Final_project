import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CategoryBox = (props) => {
  console.log(props);
  return (
    <Nav.Link className="p-0" as={Link} to={`/action/${props.id}`}>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="imgZoom d-flex"
          style={{
            height: '180px',
            width: '100%',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h3 className="m-auto ">{props.name}</h3>
        </div>
      </div>
    </Nav.Link>
  );
};

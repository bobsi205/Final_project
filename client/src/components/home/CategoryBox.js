import React from 'react';


export const CategoryBox = (props) => {
  return (
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
  );
};

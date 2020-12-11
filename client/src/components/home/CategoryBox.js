import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const CategoryBox = ({ cat }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div
      style={{ overflow: 'hidden' }}
      key={cat.id}
      onClick={() => {
        setRedirect(true);
      }}
    >
      <div
        className="imgZoom d-flex"
        style={{
          height: '180px',
          width: '100%',
          backgroundImage: `url(${cat.img})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h3 className="m-auto ">{cat.name}</h3>
      </div>
      {redirect ? <Redirect push to={`/search/category/${cat.id}`} /> : <></>}
    </div>
  );
};

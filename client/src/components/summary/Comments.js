import React from 'react';
import { Media, Image } from 'react-bootstrap';

export const Comments = ({ comment }) => {
  return (
    <Media className="my-2" key={comment._id}>
      <Image
        className="rounded-circle m-2"
        src={comment.picture}
        height="58"
        width="58"
      />
      <Media.Body
        className="py-2 px-4"
        style={{ backgroundColor: '#F1F1F1', borderRadius: '1rem' }}
      >
        <h5>
          {comment.firstName} {comment.lastName}
        </h5>
        <p>{comment.text}</p>
      </Media.Body>
    </Media>
  );
};

export default Comments;

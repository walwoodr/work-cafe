import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="index-cafe four columns">
      <Link to={`/cafes/${props.cafe.id}`}>
        <div onClick={e => props.viewingComponent(e)}>
          <strong>{props.cafe.name}</strong>
          <p className="address"><strong>Address:</strong><span>{props.cafe.address}</span></p>
        </div>
      </Link>
      <p><a href={props.cafe.website} target="_blank" rel="noopener noreferrer">Yelp page</a></p>
    </div>
  )
}

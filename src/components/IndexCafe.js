import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Link to={`/cafes/${props.cafe.id}`}><strong>{props.cafe.name}</strong></Link>
    </div>
  )
}

import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {

  const results = props.data;
  let gif;
  if (results.length) {
    gif = results.map(gif => <Gif url={gif.images.downsized_medium.url} key={gif.id} />);
  } else {
    gif = <NoGifs />
  }

  return (
    <ul style={{ listStyleType: 'none', maxHeight: '600 px' }} >
      {gif}
    </ul>
  );
}

export default GifList;

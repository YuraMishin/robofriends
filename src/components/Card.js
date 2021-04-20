import React from 'react';

const Card = () => {
  return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={'https://robohash.org/1?size=200x200'}/>
      <div>
        <h2>Name</h2>
        <p>Email</p>
      </div>
    </div>
  );
}

export default Card;

import React from 'react'
import { PropagateLoader } from 'react-spinners';

const Loader = () => {
    return (
      <PropagateLoader
        color={'#5e8ef6'}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
      />
    );
}

export default Loader
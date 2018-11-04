import React from 'react';

const SensorComponent = ({value}) => {

  const styles = {
    marginTop: `${ (100*3) - ( value * (10*3)) }px`,
    width: '100%',
    height: `${ (value * (10*3)) }px`,
    backgroundColor: 'yellow',

  };

  return (
    <div
      style={styles}
    ></div>
  )
}
     
export default SensorComponent
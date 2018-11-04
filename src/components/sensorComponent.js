import React from 'react';

const SensorComponent = ({value}) => {

  const styles = {
    docker: {
        marginTop: '50px',
        marginLeft: '200px',
        width: '30px',
        height: '300px',
        border: '1px solid #f4f4f4',
        backgroundColor: '#f4f4f4',
    },
    sensor : {  
        marginTop: `${ (100*3) - ( value * (10*3)) }px`,
        width: '100%',
        height: `${ (value * (10*3)) }px`,
        backgroundColor: 'green',
        transition: 'margin-top 2s, height 2s',
    }
  };

  return (
    <div style={styles.docker}>
        <div style={styles.sensor}></div>
        <div>{`${value * 10}%`}</div>
    </div>
  )
}
     
export default SensorComponent
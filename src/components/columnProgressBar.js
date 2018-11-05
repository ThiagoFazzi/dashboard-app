import React from 'react';

const ColumnProgressBar = ({percentage, color, barWidth, barHeight}) => {

  const styles = {
    docker: {
        display: 'inline-block',
        margin: '10px 20px',
        width: `${barWidth}px`,
        height: `${barHeight}px`,
        border: '1px solid #f4f4f4',
        backgroundColor: '#f4f4f4'
    },
    sensor : {  
        marginTop: `${ barHeight - ( percentage * (barHeight / 10)) }px`,
        width: '100%',
        height: `${ (percentage * (barHeight / 10)) }px`,
        backgroundColor: `${color}`,
        transition: 'margin-top 2s, height 2s',
    }
  };

  return (
    <div style={styles.docker}>
        <div style={styles.sensor}></div>
        <div>{`${percentage * 10}%`}</div>
    </div>
  )
}
     
export default ColumnProgressBar
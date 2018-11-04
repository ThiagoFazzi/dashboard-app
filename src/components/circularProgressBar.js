import React from 'react'

const CircularProgressBar = ({percentage, strokeWidth, sqSize}) => {


  const sqSizeT = sqSize;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSizeT} ${sqSizeT}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * (percentage*10) / 100

  const styles = {
    circleBackground: {
      fill: 'none',
      stroke: '#f4f4f4'
    },
    circleProgress: {
      fill: 'none',
      stroke: 'green',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeDasharray: `${dashArray}`, 
      strokeDashoffset: `${dashOffset}`,
      transition: 'stroke-dashoffset 1s, stroke-dasharray 1s',
    },
    circleText: {
      fontSize: '3em',
      fontWeight: 'bold',
      fill: 'green',
    }
  }

  return (
    <svg
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}>
        <circle
          style={styles.circleBackground}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`} />
        <circle
          style={styles.circleProgress}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`} />
        <text
          style={styles.circleText}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle">
          {`${percentage * 10}%`}
        </text>
    </svg>
  )
}

export default CircularProgressBar
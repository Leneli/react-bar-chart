import React from 'react';
import PropTypes from 'prop-types';

const BarChart = ({ color, height, columnWidth, paddingWidth, points }) => {
  const width = columnWidth * points.length + paddingWidth * (points.length - 1);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {points.map((point, index) => {
        const colHeight = height * point.percent / 100;
        const x = (columnWidth + paddingWidth) * (point.order - 1);
        const y = height - colHeight;

        return (
          <rect
            key={`point_${index}`}
            x={x}
            y={y}
            width={columnWidth}
            height={colHeight}
            fill={point.color || color}
          />
        );
      })}
    </svg>
  );
};

BarChart.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    color: PropTypes.string,
  })).isRequired,
  height: PropTypes.number,
  color: PropTypes.string,
  columnWidth: PropTypes.number,
  paddingWidth: PropTypes.number,
};

BarChart.defaultProps = {
  height: 200,
  columnWidth: 10,
  paddingWidth: 10,
  color: '#61dafb',
};

export default BarChart;

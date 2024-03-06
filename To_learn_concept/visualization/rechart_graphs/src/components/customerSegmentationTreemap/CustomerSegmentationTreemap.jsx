import React from 'react';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './CustomerSegmentationTreemap.module.scss';

const transformDataForTreemap = (data) => {
  return [
      {
          name: 'Segments',
          children: data.map(item => ({
              name: item.segment,
              value: item.value
          }))
      }
  ];
};


function CustomizedContent({ depth, x, y, width, height, name, value, minValue, maxValue }) {
  const generateGreenShade = (value, minValue, maxValue) => {
    const percentage = (value - minValue) / (maxValue - minValue);
    const lightness = 70 - (percentage * 30);
    return `hsl(85, 50%, ${lightness}%)`;
  };

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: generateGreenShade(value, minValue, maxValue),
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
      >
        {name}
      </text>
    </g>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ddd' }}>
        <p>{`${name}: ${value}`}</p>
      </div>
    );
  }

  return null;
};

function CustomerSegmentationTreemap({ data }) {
  const transformedData = transformDataForTreemap(data);
  const minValue = Math.min(...data.map(entry => entry.value));
  const maxValue = Math.max(...data.map(entry => entry.value));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={transformedData}
          dataKey="value"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent minValue={minValue} maxValue={maxValue} />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomerSegmentationTreemap;

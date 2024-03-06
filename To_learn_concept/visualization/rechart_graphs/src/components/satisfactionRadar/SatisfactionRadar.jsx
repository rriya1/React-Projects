import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function SatisfactionRadar({data}) {
  const normalizedData = data.map(item => ({
    ...item,
    fullMark: 5,
  }));
  return (
    <div>
       <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={normalizedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="product" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar name="Satisfaction" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default SatisfactionRadar

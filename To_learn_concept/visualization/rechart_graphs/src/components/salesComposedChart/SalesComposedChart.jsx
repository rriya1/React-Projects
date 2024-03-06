import React from 'react'
import styles from "./SalesComposedChart.scss"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';


function SalesComposedChart({ data }) {

  return (
    <div className={styles.composedChart}>
            <ResponsiveContainer width="100%" height={280}>
        <ComposedChart
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="achievement" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="target" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesComposedChart

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';

const formatData = (dataReceived) => dataReceived.map((item, index) => ({
  name: item.axis, // Use axis for the X-axis labels
  value: item.value, // The actual value to be plotted
}));

function ProductSalesLineChart({data}) {
  const formattedData = formatData(data);

  const [chartData, setChartData] = useState(formattedData);
  const [zoomState, setZoomState] = useState({
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    top: 'dataMax+1',
    bottom: 'dataMin-1',
  });
  const [isInitialView, setIsInitialView] = useState(true); // New state to control Y-axis domain

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = zoomState;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      setZoomState((prevZoomState) => ({
        ...prevZoomState,
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // Ensure correct order of left and right
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    setIsInitialView(false); // User is zooming in, so not in initial view anymore

    // Calculate the new Y-axis domain based on zoomed data
    const fromIndex = Math.max(chartData.findIndex(d => d.name === refAreaLeft), 0);
    const toIndex = Math.min(chartData.findIndex(d => d.name === refAreaRight) + 1, chartData.length);
    const zoomedData = chartData.slice(fromIndex, toIndex);
    const bottom = Math.min(...zoomedData.map(d => d.value));
    const top = Math.max(...zoomedData.map(d => d.value));

    setZoomState(prevState => ({
      ...prevState,
      refAreaLeft: '',
      refAreaRight: '',
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
    }));
  };

  const zoomOut = () => {
    setIsInitialView(true); // Resetting to initial view

    setZoomState({
      ...zoomState,
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin-1',
    });
  };

  return (
    <div style={{ userSelect: 'none', width: '100%' }}>
      <button type="button" onClick={zoomOut}>
        Zoom Out
      </button>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          onMouseDown={(e) => setZoomState({ ...zoomState, refAreaLeft: e.activeLabel })}
          onMouseMove={(e) => zoomState.refAreaLeft && setZoomState({ ...zoomState, refAreaRight: e.activeLabel })}
          onMouseUp={zoom}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey="name" domain={[zoomState.left, zoomState.right]} type="category" />
          <YAxis allowDataOverflow domain={isInitialView ? [0, 'dataMax'] : [zoomState.bottom, zoomState.top]} type="number" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />

          {zoomState.refAreaLeft && zoomState.refAreaRight ? (
            <ReferenceArea x1={zoomState.refAreaLeft} x2={zoomState.refAreaRight} strokeOpacity={0.3} />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProductSalesLineChart;

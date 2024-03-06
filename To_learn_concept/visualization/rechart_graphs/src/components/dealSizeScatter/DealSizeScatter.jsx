import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

function DealSizeScatter({data}) {
    const colorByStatus = {
        300: 'red', // Won
        200: 'black', // Lost
        100: 'blue', // In Progress
    };

    const transformData = (dealSizes) => {
        return dealSizes.map(deal => ({
          x: deal.deal_id,
          y: deal.amount,
          z: deal.status === 'Won' ? 300 : deal.status === 'Lost' ? 200 : 100,
          status: deal.status, 
        }));
    };
    const transformedDealSize = transformData(data);

    const customLegend = (
        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0}}>
            {Object.entries(colorByStatus).map(([key, color]) => {
                const status = key === '300' ? 'Won' : key === '200' ? 'Lost' : 'In Progress';
                return (
                    <li key={key} style={{marginRight: '10px', display: 'flex', alignItems: 'center'}}>
                        <span style={{display: 'inline-block', width: '10px', height: '10px', backgroundColor: color, marginRight: '5px'}}></span>
                        {status}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="deal_id" />
                    <YAxis type="number" dataKey="y" name="amount" unit="$" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Deals" data={transformedDealSize} fill="#8884d8">
                        {transformedDealSize.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colorByStatus[entry.z]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
            {customLegend}
        </div>
    )
}

export default DealSizeScatter

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function RevenueTicketStacked({tickets, revenue}) {
    // Date transform function
    const transformDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Converts month to 2 digits
        return `${year}.${month}`;
    };

    // Modified mergeData function
    const mergeData = (revenueData, ticketData) => {
        const combinedData = {};
        
        revenueData.forEach(item => {
          const date = transformDate(item.date); // Use transformed date
          if (!combinedData[date]) combinedData[date] = { date };
          combinedData[date].revenue = item.revenue;
        });
        
        ticketData.forEach(item => {
          const date = transformDate(item.date); // Use transformed date
          if (!combinedData[date]) combinedData[date] = { date };
          combinedData[date].tickets = item.tickets;
        });
        
        return Object.values(combinedData).sort((a, b) => new Date(a.date.replace('.', '-')) - new Date(b.date.replace('.', '-')));
    };

    const transformedData = mergeData(revenue, tickets);

    return (
      <div>
      <ResponsiveContainer width="100%" height={300}>
          <AreaChart
              data={transformedData}
              margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
              }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Area yAxisId="left" type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area yAxisId="right" type="monotone" dataKey="tickets" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
      </ResponsiveContainer>
  </div>
    );
}

export default RevenueTicketStacked;

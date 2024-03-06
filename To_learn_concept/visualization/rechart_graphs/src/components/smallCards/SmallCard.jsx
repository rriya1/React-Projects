import React from 'react';

function SmallCard({ revenueData, salesData, campaignData, taskData }) {
  let total, description,link;

  if (revenueData) {
    total = revenueData.reduce((acc, curr) => acc + curr.revenue, 0).toFixed(2);
    description = 'Total Revenue';
    link="/icons/revenue.png";
  } else if (salesData) {
    total = salesData.reduce((acc, curr) => acc + curr.achievement, 0);
    description = 'Total Sales Achievement';
    link="/icons/currency.png";
  } else if (campaignData) {
    total = campaignData.reduce((acc, curr) => acc + curr.conversions, 0);
    description = 'Total Campaign Conversions';
    link="/icons/conversion.png";
  } else if (taskData) {
    total = taskData.reduce((acc, curr) => acc + curr.tasks, 0);
    description = 'Total Tasks Completed';
    link="/icons/task.png";
  }

  return (
    <div>
      <img src={link} alt="Data Image" style={{ maxWidth: '150px', marginBottom: '20px' }} />

      {/* <link style={{maxWidth: '100px', marginBottom: '20px' }} href={link} /> */}
      <h2>{total}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SmallCard;

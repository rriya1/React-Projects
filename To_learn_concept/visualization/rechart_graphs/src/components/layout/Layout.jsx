import React from 'react'
import { Row, Col } from 'antd';
import BasicCard from '../card/BasicCard';
import CustomerSegmentationTreemap from "../customerSegmentationTreemap/CustomerSegmentationTreemap"
import SalesComposedChart from '../salesComposedChart/SalesComposedChart';
import SatisfactionRadar from '../satisfactionRadar/SatisfactionRadar';
import DealSizeScatter from '../dealSizeScatter/DealSizeScatter';
import RevenueTicketStacked from '../revenueTicketStacked/RevenueTicketStacked';
import ProductSalesLineChart from '../productSalesLineChart/ProductSalesLineChart';
import SmallCardContainer from '../smallCards/SmallCardContainer';


function Layout({data}) {
  return (
<div className="container">
<Row style={{ height: '400px' }}>
    <Col span={15}>
      <Row>
        <Col span={24}><BasicCard extraName="heading"><h1>Its the heading</h1></BasicCard></Col>
      </Row>
      <Row>
        <Col span={24}><BasicCard extraName="row-extra"><SmallCardContainer data={data}/></BasicCard></Col>
      </Row>
    </Col>
    <Col span ={9}><BasicCard ><RevenueTicketStacked tickets={data.support_tickets} revenue={data.revenue_over_time}/></BasicCard></Col>

   </Row>
   <Row  style={{ height: '400px' }}>
    <Col span={12}><BasicCard><SalesComposedChart data={data.sales_performance} /></BasicCard></Col>
    <Col span={6}><BasicCard><CustomerSegmentationTreemap data = {data.customer_segments}/></BasicCard></Col>
    <Col span={6}><BasicCard><SatisfactionRadar data={data.satisfaction_scores}/></BasicCard></Col>
   </Row>

   <Row style={{ height: '400px' }}>
    <Col span={15}><BasicCard><DealSizeScatter data={data.deal_sizes}/></BasicCard></Col>
    <Col span={9}><BasicCard><ProductSalesLineChart data={data.product_sales}/></BasicCard></Col>
   </Row>
</div>
  )
}

export default Layout

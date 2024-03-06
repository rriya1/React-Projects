import React from 'react'
import BasicCard from '../card/BasicCard'
import { Row,Col } from 'antd'
import SmallCard from './SmallCard'
import "./SmallCardContainer.scss"

function SmallCardContainer({data}) {
  return (
    <div className="conatiner">
        <Row>
            <Col span={24}> whats these cards for</Col>
        </Row>
        <Row>
            <Col span={5}><BasicCard extraName="small-card"><SmallCard revenueData={data.revenue_over_time}/></BasicCard></Col>
            <Col span={5}><BasicCard extraName="small-card"><SmallCard salesData={data.sales_performance}/></BasicCard></Col>
            <Col span={5}><BasicCard extraName="small-card"><SmallCard campaignData={data.campaign_performance}/></BasicCard></Col>
            <Col span={5}><BasicCard extraName="small-card"><SmallCard taskData={data.tasks_activities}/></BasicCard></Col>
        </Row>
    </div>
  )
}

export default SmallCardContainer

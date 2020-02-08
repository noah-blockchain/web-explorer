import React, { PureComponent } from 'react'
import './section_charts-details.less'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default ({ data = [],filter }) => {
  const charts = [...data].reverse()
  return (
    <section className="section section_block-details-coins">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Coin price history</h2>
          <div className="section__body">
            <div className="charts-filter-container">
              <div
                onClick={() => filter.setRange('WEEK')}
                className={`charts-filter ${filter.range=== 'WEEK' ? 'active' : ''}`}>Week</div>
              <div
                onClick={() => filter.setRange('MONTH')}
                className={`charts-filter ${filter.range === 'MONTH' ? 'active' : ''}`}>Month</div>
              <div
                onClick={() => filter.setRange('YEAR')}
                className={`charts-filter ${filter.range === 'YEAR' ? 'active' : ''}`} >Year</div>
            </div>
            <ResponsiveContainer width='94%' aspect={5.0 / 2.0}>
              <LineChart
                horizontal={false}
                data={charts}
              >
                <XAxis stroke="#000" dataKey="date"/>
                <YAxis stroke="#000"/>
                <CartesianGrid stroke="#eee" strokeDasharray="2 2"/>
                <Tooltip cursor={{ fill: 'transparent' }}/>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="rgb(105, 120, 255)"
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

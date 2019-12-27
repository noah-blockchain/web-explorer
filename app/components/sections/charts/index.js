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

export default ({ data = [] }) => {
  const charts = [...data].reverse()
  return (
    <section className="section section_block-details-coins">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Coin price history</h2>
          <div className="section__body">
            <div className="charts-filter-container">
              <div className="charts-filter">Day</div>
              <div className="charts-filter active">Month</div>
              <div className="charts-filter">Year</div>
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

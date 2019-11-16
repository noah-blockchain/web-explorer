import React, { PureComponent } from 'react'
import './section_charts-details.less'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'

export default ({ data }) => {


  const charts = [
    { date: '01-10-2019', value: 3200 },
    { date: '01-10-2019', value: 4400 },
    { date: '01-10-2019', value: 4800 },
    { date: '01-10-2019', value: 3100 },
    { date: '01-10-2019', value: 2800 },
    { date: '01-10-2019', value: 4000 },
    { date: '01-10-2019', value: 4700 }
  ]

  return (
    <section className="section section_block-details-coins">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Coin price history</h2>
          <div className="section__body">
            <LineChart
              horizontal={false}
              width={600} height={360} data={charts}
                       margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
              <XAxis stroke="#000" dataKey="date"/>
              <YAxis stroke="#000" />
              <CartesianGrid stroke="#eee" strokeDasharray="2 2"/>
              <Tooltip cursor={{fill: 'transparent'}}/>
              <Line type="monotone" dataKey="value" stroke="rgb(105, 120, 255)" activeDot={{ r: 4 }}/>
            </LineChart>
          </div>
        </div>
      </div>
    </section>
  )
}

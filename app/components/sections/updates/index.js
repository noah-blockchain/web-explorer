import React from 'react'
import './section_updates.less'
import { numberWithCommas } from '../../../utils/numbers'

export default ({ data = {} }) => {
  const cards = [
    // {
    //   name: 'Uptime in days',
    //   value: data.uptime,
    //   icon: require('./images/shield.svg')
    // },
    // {
    //   name: 'Emission',
    //   value: data.emission,
    //   icon: require('./images/diamond.svg')
    // },
    // {
    //   name: 'Price NOAH',
    //   value: data.noahPrice,
    //   icon: require('./images/coin.svg')
    // },
    // {
    //   name: 'Average Commission per day',
    //   value: data.averageCommission,
    //   icon: require('./images/pie-graph-split.svg')
    // },
    {
      name: 'Transactions',
      value: data.txTotalCount,
      icon: require('./images/transaction.svg'),
      link: '/transactions'
    },
    {
      name: 'Transactions per second',
      value: data.txPerSecond,
      icon: require('./images/speed.svg')
    },
    {
      name: 'Active validators',
      value: data.activeValidators,
      icon: require('./images/validators.svg')
    },
    {
      name: 'Free float',
      value: numberWithCommas(Number(data.freeFloatNoah).toFixed(2)),
      icon: require('./images/diamond.svg'),
    },
    {
      name: 'Emission',
      value: numberWithCommas(Number(data.noahEmission)),
      icon: require('./images/coin.svg')
    },
    {
      name: 'Total Delegated',
      value: numberWithCommas(Number(data.totalDelegatedNoah).toFixed(2)),
      icon: require('./images/emission.svg')
    },
    {
      name: 'Uptime',
      value: data.uptime,
      icon: require('./images/uptime.svg')
    },
    {
      name: 'Status',
      value: data.status,
      icon: require('./images/status.svg')
    }
  ]

  return (
    <section className="section section_updates">
      <div className="wrapper_section-content">
        <div className="section__cards">
          {cards.map((item, i) => (
            <div className="section__card" key={i}>
              <img
                className="section__card-image"
                src={item.icon}
                alt={item.name}
              />
              <div className="section__card-content">
                {item.link ? (
                  <a className="section__card-name--link" href={item.link}>
                    {item.name}
                  </a>
                ) : (
                  <p className="section__card-name">{item.name}</p>
                )}
                <p className="section__card-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

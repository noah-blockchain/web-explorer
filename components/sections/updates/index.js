import React from 'react'
import './section_updates.less'

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
      name: 'Last block',
      value: data.lastBlock,
      icon: require('./images/blockchain.svg'),
      link: '/blocks'
    },
    {
      name: 'Transactions',
      value: data.transactions,
      icon: require('./images/transaction.svg'),
      link: '/transactions'
    },
    {
      name: 'Transactions per second',
      value: data.transactionsPerSecond,
      icon: require('./images/diamond.svg')
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

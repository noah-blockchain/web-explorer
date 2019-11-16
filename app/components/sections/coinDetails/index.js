import React from 'react'
import './section_block-details.less'
import convertDate from '~/utils/convertDate'

export default ({ data }) => {
  if (data === null) {
    return (
      <section className="section section_block-details">
        <div className="wrapper_section-content">
          <div className="section__card">
            <h2 className="section__title">Not Found</h2>
          </div>
        </div>
      </section>
    )
  }

  const fields = [
    {
      name: 'Crr',
      value: data.crr,
      modification: 'translucent'
    },
    {
      name: 'Volume',
      value: data.volume,
      modification: 'link'
    },
    {
      name: 'Reserve Balance',
      value: data.reserveBalance
    },
    {
      name: 'Name',
      value: data.name
    },
    {
      name: 'Symbol',
      value: data.symbol
    },
    {
      name: 'Price',
      value: data.price
    },
    {
      name: 'Capitalization',
      value: data.capitalization
    },
    {
      name: 'Delegated',
      value: data.delegated
    },
    {
      name: 'creator',
      value: data.creator,
      modification: 'translucent',
      href: '/wallets/' + data.creator
    },
    {
      name: 'Time',
      value: convertDate(data.timestamp),
      modification: 'translucent'
    }
  ]

  return (
    <section className="section section_block-details">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            {fields.map((item, i) => (
              <div
                className={`section__field section__field--${item.modification ||
                  'default'}`}
                key={i}
              >
                <p className="section__field-name">{item.name}</p>
                <p className="section__field-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

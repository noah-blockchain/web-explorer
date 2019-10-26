import React from 'react'
import './section_coins-details.less'
import Link from 'next/link'

export default ({ data }) => {
  if (data === null) {
    return (
      <section className="section section_transaction-details">
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
      name: 'Сrr',
      value: data.crr,
      modification: 'translucent',
    },
    {
      name: 'Volume',
      value: data.volume,
      modification: 'translucent'
    },
    {
      name: 'Reserve Balance',
      value: data.reserveBalance,
      modification: 'translucent'
    },
    {
      name: 'Name',
      value: data.name,
      modification: 'translucent',
    },
    {
      name: 'Symbol',
      value: data.symbol,
      modification: 'translucent'
    }
  ]

  return (
    <section className="section section_transaction-details">
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
                {item.href ? (
                  <Link href={item.href}>
                    <a className="section__field-value link">{item.value}</a>
                  </Link>
                ) : (
                  <p className="section__field-value">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

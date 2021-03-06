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
      name: 'TxHash',
      value: data.txs,
      modification: 'translucent'
    },
    {
      name: 'Height',
      value: data.height,
      modification: 'link'
    },
    {
      name: 'Validators',
      value: data.validators
    },
    {
      name: 'Tx count',
      value: data.txCount
    },
    {
      name: 'Size',
      value: data.size
    },
    {
      name: 'Reward',
      value: data.reward
    },
    {
      name: 'Time',
      value: convertDate(data.time),
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

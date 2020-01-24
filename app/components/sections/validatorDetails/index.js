import React from 'react'
import './section_block-details.less'
import convertDate from '~/utils/convertDate'
import BigNumber from 'bignumber.js'

export default ({ data }) => {
  // console.log('data', data)
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
      name: 'Name',
      value: data?.name,
      modification: 'translucent'
    },
    {
      name: 'Public key',
      value: data.public_key,
      modification: 'link'
    },
    {
      name: 'Description',
      value: data?.description
    },
    {
      name: 'Site',
      value: data?.site_url
    },
    {
      name: 'Stake',
      value: data.stake
    },
    {
      name: 'Status',
      value: data.status
    },
    {
      name: 'Profitability',
      value: '20%'
    },
    {
      name: 'Uptime',
      value: Math.floor(data?.uptime) + '%'
    },
    {
      name: 'Fee for Delegation',
      value: new BigNumber(data.commission).toFormat(2)
    },
    {
      name: 'Launch date',
      value: data.date
    },
    {
      name: 'Share of stake',
      value: new BigNumber(data.part).toFormat(8)
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

import React from 'react'
import './section_block-details.less'
import convertDate from '~/utils/convertDate'

export default ({ data }) => {
  console.log('data', data)
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
      name: 'Uptime',
      value: data?.uptime
    }
    // ,
    // {
    //   name: 'Delegated',
    //   value: data.delegated
    // },
    // {
    //   name: 'creator',
    //   value: data.creator,
    //   modification: 'translucent',
    //   href: '/wallets/' + data.creator
    // },
    // {
    //   name: 'Time',
    //   value: convertDate(data.timestamp),
    //   modification: 'translucent'
    // },

    // {
    //   name: 'Start price',
    //   value: data.start_price,
    //   modification: 'translucent',
    // },
    // {
    //   name: 'Start volume',
    //   value: data.start_volume,
    //   modification: 'translucent'
    // },
    // {
    //   name: 'Start reserve balance',
    //   value: data.start_reserve_balance,
    //   modification: 'translucent',
    // }
  ]

  return (
    <section className="section section_block-details">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            {fields.map((item, i) => (
              // <img src={item.icon_url}></img>
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

import React from 'react'
import './section_block-details.less'
import convertDate from '~/utils/convertDate'
import { generate_avatar } from '../../../utils/generation'

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
    },

    {
      name: 'Start price',
      value: data.start_price,
      modification: 'translucent'
    },
    {
      name: 'Start volume',
      value: data.start_volume,
      modification: 'translucent'
    },
    {
      name: 'Start reserve balance',
      value: data.start_reserve_balance,
      modification: 'translucent'
    }
  ]

  return (
    <section className="section section_block-main-details">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            <div className="coin-info">
              {data.icon_url.length > 0 ? <img className="coin-avatar" src={data.icon_url}/>
                :<img className="coin-avatar" src={generate_avatar(data.symbol + data.creator  + data.crr + data.start_reserve_balance)}/>}
              <div className="coin-description">
                <span>{data.description}</span>
              </div>
            </div>
            <div className="left-info">
              {fields.slice(0, 7).map((item, i) => (
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
            <div className="right-info">
              {fields.slice(7, 14).map((item, i) => (
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
      </div>
    </section>
  )
}

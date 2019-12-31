import React from 'react'
import './section_block-details.less'
import convertDate from '~/utils/convertDate'
import { generate_avatar } from '../../../utils/generation'
import Link from 'next/link'

const Details = ({ data, modificataion = 'desktop' }) => {
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
      name: 'Сonstant Reserve Ratio',
      value: data.crr + " NOAH"
    },
    {
      name: 'Volume',
      value: Number(data.volume).toFixed(3)
    },
    {
      name: 'Reserve Balance',
      value: Number(data.reserveBalance).toFixed(3) + " NOAH"
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
      value: Number(data.price).toFixed(3) + " NOAH"
    },
    {
      name: 'Capitalization',
      value: Number(data.capitalization).toFixed(3) + " NOAH"
    },
    {
      name: 'Delegated',
      value: Number(data.delegated).toFixed(3)
    },
    {
      name: 'Time',
      value: convertDate(data.timestamp)
    },

    {
      name: 'Start price',
      value: Number(data.start_price).toFixed(3)
    },
    {
      name: 'Start volume',
      value: Number(data.start_volume).toFixed(3)
    },
    {
      name: 'Start reserve balance',
      value: Number(data.start_reserve_balance).toFixed(3)
    }
  ]


  const creator = {
    name: 'Creator',
    value: data.creator,
    modification: 'translucent'
  }
  if (data.creator !== 'NOAHx') {
    fields.push({
      ...creator,
      href: '/wallets/' + data.creator
    })
  } else {
    fields.push(creator);
  }


  return (
    <section className={`section section_block-main-details--${modificataion}`}>
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            <div className="coin-info">
              {data.icon_url.length > 0 ? <img className="coin-avatar" src={data.icon_url}/>
                : <img className="coin-avatar"
                       src={generate_avatar(data.symbol + data.creator + data.crr + data.start_reserve_balance)}/>}
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
                  {item.href ? (
                    <Link href={item.href}>
                      <a className="section__field-value link">
                        {item.value}
                      </a>
                    </Link>
                  ) : (
                    <p className="section__field-value">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  return (
    <div>
      <Details data={data} modificataion={'desktop'}/>
      <Details data={data} modificataion={'mobile'}/>
    </div>
  )
}

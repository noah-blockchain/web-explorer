import React from 'react'
import './section_transaction-details.less'
import convertDate from '~/utils/convertDate'
import Link from 'next/link'
import Base64 from './../../../utils/base64';

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
  console.log(data.payload, "PAYLOAD")
  const fields = [
    {
      name: 'TxHash',
      value: data.txs,
      modification: 'translucent',
      href: '/transactions/' + data.txs
    },
    {
      name: 'Type',
      value: data.type,
      modification: 'translucent'
    },
    {
      name: 'Block',
      value: data.block,
      modification: 'translucent'
    },
    {
      name: 'From',
      value: data.addressOut,
      modification: 'translucent',
      href: '/wallets/' + data.addressOut
    },
    {
      name: 'Time',
      value: convertDate(data.time),
      modification: 'translucent'
    },
    {
      name: 'Amount',
      value: data.amount,
      modification: 'translucent'
    },
    {
      name: 'Message',
      value: data.payload.length > 0 ? Base64.decode(data.payload) : "-",
      modification: 'translucent'
    },
  ]

  console.log(data)
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

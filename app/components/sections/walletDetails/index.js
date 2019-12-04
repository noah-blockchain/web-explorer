import React from 'react'
import './section_wallet-details.less'
import convertDate from '~/utils/convertDate'
import Link from 'next/link'
import { numberWithCommas } from '../../../utils/numbers'

export default ({ data }) => {
  if (data === null) {
    return (
      <section className="section section_wallet-details">
        <div className="wrapper_section-content">
          <div className="section__card">
            <h2 className="section__title">Not Found</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section section_wallet-details">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            <div className={`section__field section__field--default`}>
              <p className="section__field-name">Address</p>
              <p className="section__field-values">{data.address}</p>
            </div>
            <div className={`section__field section__field--default`}>
              <p className="section__field-name">Assets</p>
              <p className="section__field-values">
                {Object.keys(data.balances).map(key => (
                  <span className="section__field-value" key={key}>
                         <Link href={`/coins/${data.balances[key].coin}`}>
                          <a className="link_theme_none">
                            <span className="link">{data.balances[key].coin} </span> balance:{' '}
                            { numberWithCommas(Number(data.balances[key].amount).toFixed(2))}
                          </a>
                        </Link>


                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

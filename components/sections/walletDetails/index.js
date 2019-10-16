import React from 'react'
import './section_wallet-details.less'
import convertDate from '~/utils/convertDate'

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

  console.log(data, "DATA")
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
                    {data.balances[key].coin} balance: {data.balances[key].amount}
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

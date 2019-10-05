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

  const fields = [
    {
      name: 'id',
      value: data._id
    },
    {
      name: 'Assets',
      value: data.assets
    }
  ]

  return (
    <section className="section section_wallet-details">
      <div className="wrapper_section-content">
        <div className="section__card">
          <h2 className="section__title">Information</h2>
          <div className="section__body">
            <div className={`section__field section__field--default`}>
              <p className="section__field-name">id</p>
              <p className="section__field-values">{data._id}</p>
            </div>
            <div className={`section__field section__field--default`}>
              <p className="section__field-name">Assets</p>
              <p className="section__field-values">
                {Object.keys(data.assets).map(key => (
                  <span className="section__field-value" key={key}>
                    {key} balance: {data.assets[key].balance}
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

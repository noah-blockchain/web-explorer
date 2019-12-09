import React from 'react'
import './section_validators-details.less'
import convertDate from '../../utils/convertDate'
import shrinkString from '../../utils/shrinkString'
import Link from 'next/link'
import BigNumber from 'bignumber.js'

const Default = () => (
  <img
    className="sort-icon"
    src={require('./images/default.svg')}
    alt="default"
  />
)

const Desc = () => (
  <img className="sort-icon" src={require('./images/desc.svg')} alt="desc" />
)
const Asc = () => (
  <img className="sort-icon" src={require('./images/asc.svg')} alt="asc" />
)

const Icons = ({ order_by, filter, name }) => {
  // console.log(name, filter, order_by)
  if (name === filter) {
    if (order_by === 'DESC') return <Desc />
    if (order_by === 'ASC') return <Asc />
  }
  return <Default />
}

const Desktop = props => {
  const { data, modificataion = '', filter } = props
  return (
    <div>
      <div className="filters-container">
        <div>
          <h4>Validators </h4>
        </div>
        <div className="filter-block">
          <div className="filter" onClick={() => filter.setFilter('commission')}>
            <span className="clickable">Fee</span>
            <Icons
              name="commission"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('Uptime')}>
            <span className="clickable">Uptime</span>
            <Icons
              name="Uptime"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('total_stake')}>
            <span className="clickable">Stake</span>
            <Icons
              name="total_stake"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('capitalization')}>
            <span className="clickable">Part</span>
            <Icons
              name="capitalization"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>

        </div>
      </div>
    <table className={`table__table table__table--${modificataion}`}>
      <tbody className="table__body">
        {data.map((item, i) => (
          <tr className="table__row" key={i}>
            <th className="table__cell">
              <svg height="18" width="18" style={{top: '40px', position: 'relative'}}>
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  stroke={item.status === 1 ? 'red' : '#4CAF50'}
                  stroke-width="4"
                  fill={item.status === 1 ? 'red' : '#4CAF50'}
                />
              </svg>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Public key</span>
                <Link href={`/validators/${item.public_key}`}>
                  <a className="coins-link">{item.public_key}</a>
                </Link>
              </div>
              <div className="table-col">
                <span className="coins-label">Fee</span>
                <span className="coins-value">{new BigNumber(item.commission).toFormat(2)} </span>
              </div>

            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Uptime</span>
                <span className="coins-value">  {Math.floor(item.uptime) + "%"}</span>
              </div>
              <div className="table-col">
                <span className="coins-label">Stake</span>
                <span className="coins-value">   {new BigNumber(item.stake).toFormat(2)} </span>
              </div>
            </th>


            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Date</span>
                <span className="coins-value"> {convertDate(item.created_at)}</span>
              </div>
              <div className="table-col">
                <span className="coins-label">Part</span>
                <span className="coins-value">{item.part ? new BigNumber(item.part).toFormat(2)+"% NOAH" : '0% NOAH'} </span>
              </div>
            </th>


          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

const Mobile = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <tbody className="table__body">
      {data.map((item, i) => (
        <tr className="table__row" key={i}>
          <th className="table__cell">
          <Link href={`/validators/${item.public_key}`}>
                <a className="link_theme_none">
                  <div className="table__val__title">
                    <div className="table__val__name">
            <span className="table__cell-item">
              <strong>Name</strong> {item.meta.name}
            </span>
            <span className="table__cell-item">
              <strong>Description</strong>{' '}
              {(item.meta.description)}
            </span>
            <span className="table__cell-item">
              <strong>Site</strong> {item.meta.site_url}
            </span>
            <span className="table__cell-item table__link">
              <strong>Public key</strong> {shrinkString(item.public_key, 10)}
            </span>
            <span className="table__cell-item">
              <strong>Fee</strong> {item.commission}
            </span>
            <span className="table__cell-item">
              <strong>Name</strong> {item.uptime}
            </span>
            <span className="table__cell-item">
              <strong>Stake</strong> {item.stake}
            </span>
            <span className="table__cell-item">
              <strong>Status</strong> {item.status === 1 ? 'offline' : 'online'}
            </span>
            <span className="table__cell-item">
              <strong>Age</strong> {convertDate(item.created_at)}
            </span>
            <span className="table__cell-item">
              <strong>Part</strong> {item.part}
            </span>
            </div>
                  </div>
                </a>
              </Link>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
)

export default props => {
  const { pagination } = props
  console.log("props",props)
  return (
    <div className="coins-container">
      <div className="transactions coins-tx table_theme_simple">
        <Desktop modificataion="desktop" {...props} />
        <Mobile modificataion="mobile" {...props} />
      </div>
    </div>
  )
}

import React from 'react'
import './section_validators-details.less'
import convertDate from '../../utils/convertDate'
import shrinkString from '../../utils/shrinkString'
import Link from 'next/link'
import Pagination from '../pagination'
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
    <table className={`table__table table__table--${modificataion}`}>
      <thead className="table__header">
        <tr>
          <th className="table__cell" onClick={() => filter.setFilter('title')}>
            <span className="clickable">Title</span>
          </th>
          <th
            className="table__cell"
            onClick={() => filter.setFilter('commission')}
          >
            <span className="clickable">Fee</span>
            <Icons
              name="commission"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </th>
          <th
            className="table__cell"
            onClick={() => filter.setFilter('Uptime')}
          >
            <span className="clickable">Uptime</span>
            <Icons
              name="uptime"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </th>
          <th
            className="table__cell"
            onClick={() => filter.setFilter('total_stake')}
          >
            <span>Stake</span>
            <Icons
              name="Stake"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </th>
          <th className="table__cell">
            <span>Status</span>
          </th>
          <th className="table__cell">
            <span>Age</span>
          </th>
          <th
            className="table__cell"
            onClick={() => filter.setFilter('capitalization')}
          >
            <span>Part</span>
            {/* <Icons
              name="capitalization"
              filter={filter.filter}
              order_by={filter.order_by}
            /> */}
          </th>
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((item, i) => (
          <tr className="table__row" key={i}>
            <th className="table__cell table__link">
              <Link href={`/validators/${item.public_key}`}>
                <a className="link_theme_none">
                  <div className="table__val__title">
                    <div className="table__val__name">{item.meta.name}</div>
                  </div>
                  <span>{item.public_key}</span>
                </a>
              </Link>
            </th>
            <th className="table__cell">
              {new BigNumber(item.commission).toFormat(2)}
            </th>
            <th className="table__cell">
              {new BigNumber(item.uptime).toFormat(2)}
            </th>
            <th className="table__cell">
              {new BigNumber(item.stake).toFormat(2)}
            </th>
            <th className="table__cell">
              <svg height="15" width="15">
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  stroke="black"
                  stroke-width="0.1"
                  fill={item.status === 1 ? 'red' : '#4CAF50'}
                />
              </svg>
            </th>
            <th className="table__cell">{convertDate(item.created_at)}</th>
            <th className="table__cell">
              {item.part ? new BigNumber(item.part).toFormat(2)+"% NOAH" : ''}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Mobile = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <tbody className="table__body">
      {data.slice(0, 10).map((item, i) => (
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
            {/* <span className="table__cell-item">
              <strong>Icon</strong> {(item.meta.icon_url)}
            </span> */}
            <span className="table__cell-item">
              <strong>Site</strong> {item.meta.site_url}
            </span>
            <span className="table__cell-item">
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
  return (
    <div className="coins-container">
      <div className="transactions coins-tx table_theme_simple">
        <Desktop modificataion="desktop" {...props} />
        <Mobile modificataion="mobile" {...props} />
      </div>
      {/* <Pagination {...pagination} /> */}
    </div>
  )
}

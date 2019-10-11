import React from 'react'
import Link from 'next/link'
import './transactions.less'
import convertDate from '~/utils/convertDate'
import shrinkString from '~/utils/shrinkString'

const Desktop = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <thead className="table__header">
      <tr>
        <th className="table__cell">TxHash</th>
        <th className="table__cell">Address In 1</th>
        <th className="table__cell">Address Out</th>
        <th className="table__cell">Time</th>
      </tr>
    </thead>
    <tbody className="table__body">
      {data.slice(0, 10).map((item, i) => (
        <tr className="table__row" key={i}>
          <th className="table__cell table__link">
            <Link href={`/transactions/${item.txs}`}>
              <a className="link_theme_none">{shrinkString(item.txs, 14)}</a>
            </Link>
          </th>
          <th className="table__cell" dangerouslySetInnerHTML={{__html: shrinkString(item.addressIn, 14)}}></th>
          <th className="table__cell">{shrinkString(item.addressOut, 14)}</th>
          <th className="table__cell">{convertDate(item.time)}</th>
        </tr>
      ))}
    </tbody>
  </table>
)

const Mobile = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <thead className="table__header">
      <tr>
        <th className="table__cell">TxHash</th>
        <th className="table__cell">
          <span className="table__cell-item">Adr. In</span>
          <span className="table__cell-item">Adr. Out</span>
        </th>
        <th className="table__cell">Time</th>
      </tr>
    </thead>
    <tbody className="table__body">
      {data.slice(0, 10).map((item, i) => (
        <tr className="table__row" key={i}>
          <th className="table__cell table__link">
            <Link href={`/transactions/${item.txs}`}>
              <a className="link_theme_none">{shrinkString(item.txs, 14)}</a>
            </Link>
          </th>
          <th className="table__cell">
            <span className="table__cell-item">
              {shrinkString(item.addressIn, 14)}
            </span>
            <span className="table__cell-item">
              {shrinkString(item.addressOut, 14)}
            </span>
          </th>
          <th className="table__cell">{convertDate(item.time)}</th>
        </tr>
      ))}
    </tbody>
  </table>
)

export default ({ data = [], pagination }) => {
  return (
    <div className="transactions table_theme_simple">
      <h4 className="table__title">Transactions</h4>
      <Desktop modificataion="desktop" data={data} />
      <Mobile modificataion="mobile" data={data} />
      <Link href="/transactions">
        <a className="table__more">show more</a>
      </Link>
    </div>
  )
}

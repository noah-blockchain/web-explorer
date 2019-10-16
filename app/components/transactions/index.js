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
        <th className="table__cell">Block</th>
        <th className="table__cell">Time</th>
        <th className="table__cell">From</th>
        <th className="table__cell">Type</th>
        <th className="table__cell">Amount</th>
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
          <th className="table__cell">{item.block}</th>
          <th className="table__cell">{convertDate(item.time)}</th>
          <th className="table__cell table__link">
            <Link href={`/wallets/${item.addressOut}`}>
              <a className="link_theme_none">
                {shrinkString(item.addressOut, 14)}
              </a>
            </Link>
          </th>
          <th className="table__cell">{item.type}</th>
          <th className="table__cell">{item.amount}</th>
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
          <span className="table__cell-item">Block</span>
          <span className="table__cell-item">Adr. Out</span>
          <span className="table__cell-item">Type</span>
          <span className="table__cell-item">Amount</span>
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
            <span className="table__cell-item">{item.block}</span>
            <div className="table__link">
              <Link href={`/wallets/${item.addressOut}`}>
                <a className="link_theme_none">
                  {shrinkString(item.addressOut, 14)}
                </a>
              </Link>
            </div>
            <span className="table__cell-item">{item.type}</span>
            <span className="table__cell-item">{item.amount}</span>
          </th>
          <th className="table__cell">{convertDate(item.time)}</th>
        </tr>
      ))}
    </tbody>
  </table>
)

export default ({ data = [] }) => {
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

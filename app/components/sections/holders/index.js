import React from 'react'
import Link from 'next/link'
import './holders.less'
import shrinkString from '~/utils/shrinkString'
import Pagination from '~/components/pagination'

export default ({ data = [], pagination }) => {
  return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Coin holders</h4>
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Address</th>
            <th className="table__cell">Amount</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.slice(0, 10).map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell table__link">
                <Link href={`/wallets/${item.address}`}>
                  <a className="link_theme_none">{shrinkString(item.address, 32)}</a>
                </Link>
              </td>
              <td className="table__cell">{Number(item.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination {...pagination} />

    </div>
  )
}

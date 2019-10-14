import React from 'react'
import Link from 'next/link'
import './blocks.less'
import convertDate from '~/utils/convertDate'
import shrinkString from '~/utils/shrinkString'

export default ({ data = [] }) => {
  return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Blocks</h4>
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Height</th>
            <th className="table__cell">Txs</th>
            <th className="table__cell">Time</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.slice(0, 10).map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell table__link">
                <Link href={`/blocks/${item.height}`}>
                  <a className="link_theme_none">{item.height}</a>
                </Link>
              </td>
              <td className="table__cell">{shrinkString(item.txs, 8)}</td>
              <td className="table__cell">{convertDate(item.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/blocks">
        <a className="table__more">show more</a>
      </Link>
    </div>
  )
}

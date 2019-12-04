import React from 'react'
import Link from 'next/link'
import './blocks.less'
import convertDate from '~/utils/convertDate'
import shrinkString from '~/utils/shrinkString'

export default ({ data = [] }) => {
  return (
    <div className="blocks table_theme_simple">
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Height</th>
            <th className="table__cell">Txs</th>
            <th className="table__cell">Reward</th>
            <th className="table__cell">Validators</th>
            <th className="table__cell">Tx count</th>
            <th className="table__cell">Size</th>
            <th className="table__cell">Time</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell table__link">
                <Link href={`/blocks/${item.height}`}>
                  <a className="link_theme_none">{item.height}</a>
                </Link>
              </td>
              <td className="table__cell">
                {shrinkString(item.txs, 8)}
              </td>
              <td className="table__cell">
                {Number(item.reward).toFixed(2)}

              </td>
              <td className="table__cell">{item.validators}</td>
              <td className="table__cell">{item.txCount}</td>
              <td className="table__cell">{item.size}</td>
              <td className="table__cell">{convertDate(item.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

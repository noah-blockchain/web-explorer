import React from 'react'
import Link from 'next/link'
import './delegators.less'
import convertDate from '~/utils/convertDate'
import shrinkString from '~/utils/shrinkString'
import { generate_avatar } from '../../../utils/generation'

export default ({ data = [] }) => {
  return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Coin delegators</h4>
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Public key</th>
            <th className="table__cell">Value</th>
            <th className="table__cell">Noah value</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.slice(0, 4).map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell">Np{(item.public_key, 8)}</td>
              <td className="table__cell">{Number(item.value).toFixed(2)}</td>
              <td className="table__cell">
                {Number(item.noah_value).toFixed(2)}
              </td>
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

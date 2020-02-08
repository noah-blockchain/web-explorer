import React from 'react'
import Link from 'next/link'
import './delegators.less'
import shrinkString from '~/utils/shrinkString'
import Pagination from '~/components/pagination'

export default ({ data = [], pagination }) => {
  if (data.length < 1)
    return (
      <div className="blocks table_theme_simple">
        <h4 className="table__title">Coin delegators</h4>

        <div className="not-found-delegators">
        </div>
      </div>
    )
  return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Coin delegators</h4>
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Address</th>
            <th className="table__cell">Value</th>
            <th className="table__cell">Noah value</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.slice(0, 4).map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell table__link">
                {/* <Link href={`/delegators/${item.address}`}>
                  <a className="link_theme_none"> */}
                {shrinkString(item.address, 8)}
                {/* </a>
                </Link> */}
              </td>
              <td className="table__cell">{Number(item.value).toFixed(2)}</td>
              <td className="table__cell">
                {Number(item.noah_value).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination {...pagination} />
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import './validators.less'
import shrinkString from '~/utils/shrinkString'
import { generate_avatar } from '../../../utils/generation'
import Pagination from '~/components/pagination'

export default ({ data = [], pagination }) => {
  if(data.length < 1) return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Coin validators</h4>

      <div className="not-found">
        <h4>Validators not found</h4>
      </div>
    </div>
  )
  return (
    <div className="blocks table_theme_simple">
      <h4 className="table__title">Coin validators</h4>
      <table className="table__table">
        <thead className="table__header">
          <tr>
            <th className="table__cell">Image</th>

            <th className="table__cell">Public key</th>
            <th className="table__cell">Name</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data.slice(0, 5).map((item, i) => (
            <tr className="table__row" key={i}>
              <td className="table__cell">
                {item.icon_url.length > 0 ? <img className="tab-avatar" src={item.icon_url}/>
                :<img className="tab-avatar" src={generate_avatar(item.public_key)}/>}
              </td>

              <td className="table__cell">Np{shrinkString(item.public_key, 8)}</td>
              <td className="table__cell">{item.name.length > 0 ? item.name: "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination {...pagination} />
    </div>
  )
}

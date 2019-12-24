import React from 'react'
import './section_wallets-details.less'
import shrinkString from '../../utils/shrinkString'
import Link from 'next/link'
import Pagination from '~/components/pagination'
import { generate_avatar } from '../../utils/generation'

const Default = () => (
  <img
    className="sort-icon"
    src={require('./images/default.svg')}
    alt="default"
  />
)

const Desc = () => (
  <img className="sort-icon" src={require('./images/desc.svg')} alt="desc"/>
)
const Asc = () => (
  <img className="sort-icon" src={require('./images/asc.svg')} alt="asc"/>
)

const Icons = ({ order_by, filter, name }) => {
  // console.log(name, filter, order_by)
  if (name === filter) {
    if (order_by === 'DESC') return <Desc/>
    if (order_by === 'ASC') return <Asc/>
  }
  return <Default/>
}

const Desktop = props => {
  const { data, modificataion = '', filter } = props
  return (
    <div>
      <div className="filters-container">
        <div>
          <h4>Wallets</h4>
        </div>
        <div className="filter-block">

          <div className="filter" onClick={() => filter.setFilter('balance')}>
            <span className="clickable">Balance</span>
            <Icons
              name="balance"
              filter={filter.filter}
              order_by={filter.balance}
            />
          </div>

        </div>
      </div>
      <table className={`table__table table__table--${modificataion}`}>
        <tbody className="table__body">
        {data.map((item, i) => (
          <tr className="table__row" key={i}>
            <th className="table__cell-avatar">
              <img src={generate_avatar(item.address)} className="avatar-coins-table"/>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Address</span>
                <Link href={`/wallets/${item.address}`}>
                  <a className="coins-link">{item.address}</a>
                </Link>
              </div>
              <div className="table-col">
                <span className="coins-label">Balance</span>
                <span className="coins-value">{item.balance} </span>
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
          <Link href={`/wallets/${item.address}`}>
            <a className="link_theme_none">
              <div className="table__val__title">
                <div className="table__val__name">
            <span className="table__cell-item table__link">
              <strong>Address</strong> {shrinkString(item.address, 10)}
            </span>
                  <span className="table__cell-item">
              <strong>Balance</strong> {item.balance}
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
      <Pagination {...pagination} />
    </div>
  )
}

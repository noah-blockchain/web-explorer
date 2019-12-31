import React from 'react'
import './section_coins-details.less'
import convertDate from '../../utils/convertDate'
import shrinkString from '../../utils/shrinkString'
import Link from 'next/link'
import Pagination from '../pagination'
import BigNumber from 'bignumber.js'
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
          <h4>Coins</h4>
        </div>
        <div className="filter-block">
          <div className="filter" onClick={() => filter.setFilter('crr')}>
            <span className="clickable">Сrr</span>
            <Icons
              name="crr"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('volume')}>
            <span className="clickable">Volume</span>
            <Icons
              name="volume"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>



          <div className="filter" onClick={() => filter.setFilter('reserve_balance')}>
            <span className="clickable">Reserve balance</span>
            <Icons
              name="reserve_balance"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('symbol')}>
            <span className="clickable">Symbol</span>
            <Icons
              name="symbol"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('price')}>
            <span className="clickable">Price</span>
            <Icons
              name="price"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>

          <div className="filter" onClick={() => filter.setFilter('capitalization')}>
            <span className="clickable">Capitalization</span>
            <Icons
              name="capitalization"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>


          <div className="filter" onClick={() => filter.setFilter('timestamp')}>
            <span className="clickable">Date</span>
            <Icons
              name="timestamp"
              filter={filter.filter}
              order_by={filter.order_by}
            />
          </div>
        </div>
      </div>
      <table className={`table__table table__table--${modificataion}`}>
        <tbody className="table__body">
        {data.map((item, i) => (
          <tr className="table__row" key={i}>
            <th className="table__cell-avatar">
              <img src={generate_avatar(item.symbol + item.creator + item.crr + item.reserveBalance)} className="avatar-coins-table"/>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Name</span>
                <Link href={`/coins/${item.symbol}`}>
                  <a className="coins-link">{item.name}</a>
                </Link>
              </div>
              <div className="table-col">
                <span className="coins-label">Symbol</span>
                <Link href={`/coins/${item.symbol}`}>
                  <a className="coins-link">{item.symbol}</a>
                </Link>
              </div>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Price</span>
                <span className="coins-value">{new BigNumber(item.price).toFormat(2)} NOAH</span>
              </div>
              <div className="table-col">
                <span className="coins-label">Volume</span>
                <span className="coins-value">{new BigNumber(item.volume).toFormat(2)} </span>
              </div>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Reserve Balance</span>
                <span className="coins-value">{new BigNumber(item.reserveBalance).toFormat(2)} NOAH</span>
              </div>
              <div className="table-col">
                <span className="coins-label">Crr</span>
                <span className="coins-value">{item.crr}</span>
              </div>
            </th>
            <th className="table__cell">
              <div className="table-col">
                <span className="coins-label">Delegated</span>
                <span className="coins-value">{new BigNumber(item.delegated).toFormat(2)}</span>
              </div>
              <div className="table-col">
                <span className="coins-label">Capitalization</span>
                <span className="coins-value">{new BigNumber(item.volume * item.price).toFormat(2)} NOAH</span>
              </div>
            </th>
            <th className="table__cell ">
              <div className="table-col">
                <span className="coins-label">Creator</span>
                <Link href={`/wallets/${item.creator}`}>
                  <a className="coins-link">
                    {shrinkString(item.creator, 14)}
                  </a>
                </Link>
              </div>
              <div className="table-col">
                <span className="coins-label">Date</span>
                <span className="coins-value">{convertDate(item.timestamp)}</span>
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
    {data.slice(0, 10).map((item, i) => (
      <tr className="table__row" key={i}>
        <th className="table__cell">
            <span className="table__cell-item">
              <strong>Сrr</strong> {item.crr}
            </span>
          <span className="table__cell-item">
              <strong>Volume</strong> {Number(item.volume).toFixed(6)}
            </span>
          <span className="table__cell-item">
              <strong>Reserve Balance</strong>{' '}
            {Number(item.reserveBalance).toFixed(6)}
            </span>
          <span className="table__cell-item table__link">
               <Link href={`/coins/${item.symbol}`}>
                <a className="link_theme_none"><strong>Name</strong> {item.name}</a>
              </Link>
            </span>
          <span className="table__cell-item table__link">
              <Link href={`/coins/${item.symbol}`}>
                <a className="link_theme_none"><strong>Symbol</strong> {item.symbol}</a>
              </Link>
            </span>

          <span className="table__cell-item">
              <strong>Price</strong> {new BigNumber(item.price).toFormat(2)}
            </span>
          <span className="table__cell-item">
              <strong>Delegated</strong> {item.delegated}
            </span>
          <span className="table__cell-item">
              <strong>Capitalization</strong> {new BigNumber(item.capitalization).toFormat(2)}
            </span>

          <span className="table__cell-item">
              <strong>Date</strong> {convertDate(item.timestamp)}
            </span>
          <span className="table__cell-item table__link">
              <strong>Creator</strong>{' '}
            <Link className="table__link" href={`/wallets/${item.creator}`}>
                <a className="link_theme_none">
                  {shrinkString(item.creator, 14)}
                </a>
              </Link>
            </span>
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

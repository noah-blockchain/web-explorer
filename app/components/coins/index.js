import React from 'react'
import './section_coins-details.less'
import convertDate from '../../utils/convertDate'
import shrinkString from '../../utils/shrinkString'
import Link from 'next/link'
import Pagination from '../pagination'
import BigNumber from 'bignumber.js';

const Default = () => (
  <img className="sort-icon" src={require('./images/default.svg')} alt="default"/>
)

const Desc = () => (
  <img className="sort-icon" src={require('./images/desc.svg')} alt="desc"/>

)
const Asc = () => (
  <img className="sort-icon" src={require('./images/asc.svg')} alt="asc"/>
)


const Icons = ({order_by, filter, name}) => {
  console.log(name, filter, order_by)
  if (name === filter) {
    if (order_by === 'DESC') return <Desc/>
    if (order_by === 'ASC') return <Asc/>
  }
  return <Default/>
}


const Desktop = (props) => {
  const { data, modificataion = '', filter } = props
  console.log(filter)
  return (
    <table className={`table__table table__table--${modificataion}`}>
      <thead className="table__header">
      <tr>
        <th className="table__cell" onClick={() => filter.setFilter('crr')}>
          <span className="clickable">Сrr</span>
          <Icons
            name="crr"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell"
            onClick={() => filter.setFilter('volume')}>
          <span className="clickable">Volume</span>
          <Icons
            name="volume"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell"
            onClick={() => filter.setFilter('reserve_balance')}>
          <span className="clickable">Reserve Balance</span>
          <Icons
            name="reserve_balance"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell">
          <span className="clickable">Name</span>
        </th>
        <th className="table__cell" onClick={() => filter.setFilter('symbol')}>
          <span className="clickable">Symbol</span>
          <Icons
            name="symbol"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell" onClick={() => filter.setFilter('price')}>
          <span>Price</span>
          <Icons
            name="price"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell">
          <span>Delegated</span>
        </th>
        <th className="table__cell" onClick={() => filter.setFilter('capitalization')}>
          <span>Capitalization</span>
          <Icons
            name="capitalization"
            filter={filter.filter}
            order_by={filter.order_by}
          />
        </th>
        <th className="table__cell">
          <span>Date</span>
        </th>
        <th className="table__cell">
          <span>Creator</span>
        </th>
      </tr>
      </thead>
      <tbody className="table__body">
      {data.map((item, i) => (
        <tr className="table__row" key={i}>
          <th className="table__cell">{item.crr}</th>
          <th className="table__cell"> {new BigNumber(item.volume).toFormat(2) }</th>
          <th className="table__cell"> {new BigNumber(item.reserveBalance).toFormat(2) }</th>
          <th className="table__cell table__link">
            <Link href={`/coins/${name}`}>
              <a className="link_theme_none">
                {item.name}
              </a>
            </Link>
          </th>
          <th className="table__cell table__link">
            <Link href={`/coins/${item.symbol}`}>
              <a className="link_theme_none">
                {item.symbol}
              </a>
            </Link>
          </th>
          <th className="table__cell">{new BigNumber(item.price).toFormat(2)}</th>
          <th className="table__cell">{new BigNumber(item.delegated).toFormat(2)}</th>
          <th className="table__cell">{new BigNumber(item.volume * item.price).toFormat(2)} NOAH</th>
          <th className="table__cell">{convertDate(item.timestamp)}</th>
          <th className="table__cell table__link">
            <Link href={`/wallets/${item.creator}`}>
              <a className="link_theme_none">
                {shrinkString(item.creator, 14) }
              </a>
            </Link>
          </th>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

const Mobile = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <tbody className="table__body">
    {data.slice(0, 10).map((item, i) => (
      <tr className="table__row" key={i}>
        <th className="table__cell">
          <span className="table__cell-item"><strong>Сrr</strong> {item.crr}</span>
          <span className="table__cell-item"><strong>Volume</strong> {Number(item.volume).toFixed(6)}</span>
          <span
            className="table__cell-item"><strong>Reserve Balance</strong> {Number(item.reserveBalance).toFixed(6)}</span>
          <span className="table__cell-item"><strong>Name</strong> {item.name}</span>
          <span className="table__cell-item"><strong>Symbol</strong> {item.symbol}</span>

          <span className="table__cell-item"><strong>Price</strong> {item.price}</span>
          <span className="table__cell-item"><strong>Delegated</strong> {item.delegated}</span>
          <span className="table__cell-item"><strong>Capitalization</strong> {item.capitalization}</span>

          <span className="table__cell-item"><strong>Date</strong> {convertDate(item.timestamp)}</span>
          <span className="table__cell-item"><strong>Creator</strong> {' '}
            <Link className="table__link" href={`/wallets/${item.creator}`}>
              <a className="link_theme_none">
                {shrinkString(item.creator, 14) }
              </a>
            </Link>
          </span>
        </th>
      </tr>
    ))}
    </tbody>
  </table>
)

export default (props) => {
  const {pagination} = props;
  return (
    <div className="coins-container">
      <div className="transactions coins-tx table_theme_simple">
        <Desktop modificataion="desktop" {...props}/>
        <Mobile modificataion="mobile" {...props}/>
      </div>
      <Pagination {...pagination} />
    </div>
  )
}

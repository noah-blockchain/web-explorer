import React from 'react'
import './section_coins-details.less'

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
      </tr>
      </thead>
      <tbody className="table__body">
      {data.slice(0, 10).map((item, i) => (
        <tr className="table__row" key={i}>
          <th className="table__cell">{item.crr}</th>
          <th className="table__cell"> {Number(item.volume).toFixed(6)}</th>
          <th className="table__cell">{Number(item.reserveBalance).toFixed(6)}</th>
          <th className="table__cell">{item.name}</th>
          <th className="table__cell">{item.symbol}</th>
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
        </th>
      </tr>
    ))}
    </tbody>
  </table>
)

export default (props) => {
  console.log(props)
  return (
    <div className="coins-container">
      <div className="transactions coins-tx table_theme_simple">
        <h4 className="table__title">Coins</h4>
        <Desktop modificataion="desktop" {...props}/>
        <Mobile modificataion="mobile" {...props}/>
      </div>
    </div>
  )
}

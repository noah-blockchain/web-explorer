import React from 'react'
import './section_coins-details.less'

const Desktop = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <thead className="table__header">
    <tr>
      <th className="table__cell">Сrr</th>
      <th className="table__cell">Volume</th>
      <th className="table__cell">Reserve Balance</th>
      <th className="table__cell">Name</th>
      <th className="table__cell">Symbol</th>
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

const Mobile = ({ data, modificataion = '' }) => (
  <table className={`table__table table__table--${modificataion}`}>
    <tbody className="table__body">
    {data.slice(0, 10).map((item, i) => (
      <tr className="table__row" key={i}>
        <th className="table__cell">
          <span className="table__cell-item"><strong>Сrr</strong> {item.crr}</span>
          <span className="table__cell-item"><strong>Volume</strong> {Number(item.volume).toFixed(6)}</span>
          <span className="table__cell-item"><strong>Reserve Balance</strong> {Number(item.reserveBalance).toFixed(6)}</span>
          <span className="table__cell-item"><strong>Name</strong> {item.name}</span>
          <span className="table__cell-item"><strong>Symbol</strong> {item.symbol}</span>
        </th>
      </tr>
    ))}
    </tbody>
  </table>
)

export default ({ data = [] }) => {
  return (
    <div className="coins-container">
      <div className="transactions coins-tx table_theme_simple">
        <h4 className="table__title">Coins</h4>
        <Desktop modificataion="desktop" data={data}/>
        <Mobile modificataion="mobile" data={data}/>
      </div>
    </div>
  )
}

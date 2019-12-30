import React from 'react'
import Link from 'next/link'
import './delegators.less'
import convertDate from '~/utils/convertDate'
import shrinkString from '~/utils/shrinkString'
import { generate_avatar } from '../../../utils/generation'


const Desktop = props => {
  const { data, modificataion = '', filter } = props
  return (
    <div>
    <h4 className="table__title">Coin delegators</h4>
    <table className={`table__table table__table--${modificataion}`}>
      <thead className="table__header">
        <tr>
        <th className="table__cell">Coin</th>
          <th className="table__cell">Public key</th>
          <th className="table__cell">Value</th>
          <th className="table__cell">Noah value</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((item, i) => (
          <tr className="table__row" key={i}>
            <td className="table__cell">{(item.symbol)}</td>
            <td className="table__cell">{(item.address)}</td>
            <td className="table__cell">{Number(item.value).toFixed(2)}</td>
            <td className="table__cell">
              {Number(item.noah_value).toFixed(2)}
            </td>
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
    {data.slice(0, 4).map((item, i) => (
       <div className="blocks table_theme_simple table_theme_simple_mob_div">
      <tr className="table__row table__row_del_mob" key={i}>
        <th className="table__cell">
          <span className="table__cell-item">
            <strong>Name</strong> {item.symbol}
          </span>
          <span className="table__cell-item">
            <strong>Public key</strong>{' '}
            {shrinkString(item.address, 10)}
          </span>
          <span className="table__cell-item">
            <strong>Value</strong> {Number(item.value).toFixed(2)}
          </span>
          <span className="table__cell-item">
            <strong>Noah value</strong> {Number(item.noah_value).toFixed(2)}
          </span>
        </th>
      </tr>
      </div>
    ))}
  </tbody>
</table>
  )

export default props => {
  const { pagination } = props
  return (
    <div className="deligators-container">
      <div className="transactions coins-tx table_theme_simple">
        <Desktop modificataion="desktop" {...props} />
        <Mobile modificataion="mobile" {...props} />
      </div>
    </div>
  )
}

// export default ({ data = [] }) => {
//   return (
//     <div className="blocks table_theme_simple">
//       <h4 className="table__title">Coin delegators</h4>
//       <table className="table__table">
//         <thead className="table__header">
//           <tr>
//           <th className="table__cell">Coin</th>
//             <th className="table__cell">Public key</th>
//             <th className="table__cell">Value</th>
//             <th className="table__cell">Noah value</th>
//           </tr>
//         </thead>
//         <tbody className="table__body">
//           {data.slice(0, 4).map((item, i) => (
//             <tr className="table__row" key={i}>
//               <td className="table__cell">{(item.symbol)}</td>
//               <td className="table__cell">{(item.address)}</td>
//               <td className="table__cell">{Number(item.value).toFixed(2)}</td>
//               <td className="table__cell">
//                 {Number(item.noah_value).toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Link href="/blocks">
//         <a className="table__more">show more</a>
//       </Link>
//     </div>
//   )
// }
